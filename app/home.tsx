import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type GroceryItem = {
  id: string;
  label: string;
  checked: boolean;
};

const starterItems: GroceryItem[] = [
  { id: '1', label: 'Milk', checked: false },
  { id: '2', label: 'Bread', checked: true },
  { id: '3', label: 'Eggs', checked: false },
];

export default function HomeScreen() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState<GroceryItem[]>(starterItems);

  const pendingCount = useMemo(() => items.filter((item) => !item.checked).length, [items]);

  const handleAddItem = () => {
    const nextLabel = newItem.trim();

    if (!nextLabel) {
      return;
    }

    setItems((prevItems) => [
      ...prevItems,
      { id: Date.now().toString(), label: nextLabel, checked: false },
    ]);
    setNewItem('');
  };

  const handleToggle = (id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  const handleSignOut = () => {
    router.replace('/sign-in');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.title}>Weekly Groceries</Text>
          <Text style={styles.subtitle}>{pendingCount} items left to buy</Text>
        </View>
        <Pressable onPress={handleSignOut} style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Sign Out</Text>
        </Pressable>
      </View>

      <View style={styles.addRow}>
        <TextInput
          value={newItem}
          onChangeText={setNewItem}
          style={styles.input}
          placeholder="Add item"
        />
        <Pressable onPress={handleAddItem} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Add</Text>
        </Pressable>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable onPress={() => handleToggle(item.id)} style={styles.card}>
            <View style={[styles.checkbox, item.checked && styles.checkboxChecked]} />
            <Text style={[styles.itemText, item.checked && styles.itemTextChecked]}>{item.label}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7ef',
    padding: 16,
    gap: 14,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1f3727',
  },
  subtitle: {
    marginTop: 2,
    fontSize: 14,
    color: '#4d5f4f',
  },
  addRow: {
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d6e2d5',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
  },
  primaryButton: {
    backgroundColor: '#2f7a43',
    borderRadius: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#c8d8c8',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#ffffff',
  },
  secondaryButtonText: {
    color: '#35593d',
    fontWeight: '600',
    fontSize: 13,
  },
  list: {
    gap: 8,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d6e2d5',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#7da683',
  },
  checkboxChecked: {
    backgroundColor: '#2f7a43',
    borderColor: '#2f7a43',
  },
  itemText: {
    fontSize: 16,
    color: '#2c3f2e',
  },
  itemTextChecked: {
    textDecorationLine: 'line-through',
    color: '#8a9a8b',
  },
});
