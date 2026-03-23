import { categories, products, type CategoryKey, type Product } from '@/constants/catalog';
import { createContext, useContext, useMemo, useState, type PropsWithChildren } from 'react';

export type ListItem = Product & { quantity: number };

type ListContextValue = {
  selectedCategory: CategoryKey;
  setSelectedCategory: (next: CategoryKey) => void;
  quantities: Record<string, number>;
  products: Product[];
  filteredProducts: Product[];
  listItems: ListItem[];
  totalUnits: number;
  totalDistinctItems: number;
  getQuantity: (productId: string) => number;
  setQuantity: (productId: string, quantity: number) => void;
  increment: (productId: string) => void;
  decrement: (productId: string) => void;
  buildShareText: () => string;
};

const ListContext = createContext<ListContextValue | null>(null);

export function ListProvider({ children }: PropsWithChildren) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('vegetables');
  const [quantities, setQuantities] = useState<Record<string, number>>({
    kale: 2,
    tomatoes: 3,
    coffee: 1,
    'olive-oil': 1,
  });

  const setQuantity = (productId: string, quantity: number) => {
    setQuantities((prev) => {
      const nextValue = Math.max(0, Math.floor(quantity));

      if (nextValue === 0) {
        const { [productId]: _removed, ...rest } = prev;
        return rest;
      }

      return { ...prev, [productId]: nextValue };
    });
  };

  const getQuantity = (productId: string) => quantities[productId] ?? 0;

  const increment = (productId: string) => {
    setQuantity(productId, getQuantity(productId) + 1);
  };

  const decrement = (productId: string) => {
    setQuantity(productId, getQuantity(productId) - 1);
  };

  const filteredProducts = useMemo(
    () => products.filter((product) => product.category === selectedCategory),
    [selectedCategory],
  );

  const listItems = useMemo(
    () =>
      products
        .map((product) => ({ ...product, quantity: quantities[product.id] ?? 0 }))
        .filter((product) => product.quantity > 0),
    [quantities],
  );

  const totalUnits = useMemo(
    () => listItems.reduce((sum, item) => sum + item.quantity, 0),
    [listItems],
  );

  const totalDistinctItems = listItems.length;

  const buildShareText = () => {
    const lines: string[] = ['Lysto - My List'];

    categories.forEach((category) => {
      const sectionItems = listItems.filter((item) => item.category === category.key);

      if (!sectionItems.length) {
        return;
      }

      lines.push('', `${category.label}:`);
      sectionItems.forEach((item) => {
        lines.push(`- ${item.name} x${item.quantity}`);
      });
    });

    lines.push('', `Total items: ${totalDistinctItems} | Total units: ${totalUnits}`);
    return lines.join('\n');
  };

  const value: ListContextValue = {
    selectedCategory,
    setSelectedCategory,
    quantities,
    products,
    filteredProducts,
    listItems,
    totalUnits,
    totalDistinctItems,
    getQuantity,
    setQuantity,
    increment,
    decrement,
    buildShareText,
  };

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
}

export function useList() {
  const context = useContext(ListContext);

  if (!context) {
    throw new Error('useList must be used within ListProvider');
  }

  return context;
}
