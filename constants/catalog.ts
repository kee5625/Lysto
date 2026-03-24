export type CategoryKey = 'vegetables' | 'fruits' | 'dairy' | 'bakery' | 'pantry';

export type Product = {
  id: string;
  name: string;
  unitLabel: string;
  category: CategoryKey;
  imageUri: string;
  note?: string;
};

export const categories: Array<{ key: CategoryKey; label: string }> = [
  { key: 'vegetables', label: 'Vegetables' },
  { key: 'fruits', label: 'Fruits' },
  { key: 'dairy', label: 'Dairy' },
  { key: 'bakery', label: 'Bakery' },
  { key: 'pantry', label: 'Pantry' },
];

export const products: Product[] = [
  {
    id: 'kale',
    name: 'Tuscan Kale',
    unitLabel: '2 bunches',
    category: 'vegetables',
    note: 'Organic',
    imageUri:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYd49IzIZqqM0I2nqxfIYSGVF6ExIHK66eCtph2nnPZLRpyVMAG2YAl8YiyU9ifWOaj4EtN9wsjA8xPq1lteOAYUCsQNUEg_XF3F5emKwYVhRcPDxssn6VaLfDpSvSihx5FCp_Wiy6XfbuIuZn8iUsqw7dyPOgVy3K-WO8Ju8wpqKFbwRojwNXruxRqC9C8L-MEJiLiJ8PEL1ZNm9VFzgmEWaNwKEL0ZWQVcxPH-onROzGzPxz50CdTYc6BXUZjrtahSCeMuAKCTWW',
  },
  {
    id: 'tomatoes',
    name: 'Heirloom Tomatoes',
    unitLabel: '1 box',
    category: 'vegetables',
    note: 'Vine-ripened',
    imageUri:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAgIcIWCqBgZ9_tml8Un-hpRaY8jC8xEGnRVEOd0zN5MXVJrSKHJDDeRdVqSPVRmJvfd1Of2x77g4GkTgg-vlFi_sQfJAlr4bBzCo3JPJL1-VBtuYr883nV7E2ldkcmhKhxIn5saZOWsnA611q_7N3sWvxM1gWHLVXkTLJqIVNrTMlu8gv23bwdKOamTJXgHgt9B7299zTVxt-RyUisBL4gbguXUVYZ76qSifiDQU_Yyktz7uzRRkuPgjDUTTncchiVvFZ6qMo8sc1u',
  },
  {
    id: 'milk',
    name: 'Fresh Milk',
    unitLabel: '1 litre',
    category: 'dairy',
    imageUri:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBWnOxnEw5_-5paIDXYCMKcXgbCoElfeyyjKdzceL_o1iMyqwWVDLU3McA0MFlnhh8cPniMbTvuA-mPjjeNUQRVJtYQsc3zdMhrcMsF6sxiL5JXrBY0KCiy_DFwgxEgd0B0oaysUKfO3Of5xfeSJ67k1uR23bGVQfvNr8I0ixnogquywgA7DUqqTFG-SE2y5D-lAoaKDlXI94MPM9jvpK5UiVIBWXo9n7VKTsMieu_eZUh8SW5fH7bx7NmrdApguWSKjevwGRIep18W',
  },
  {
    id: 'eggs',
    name: 'Organic Eggs',
    unitLabel: '12 pcs',
    category: 'dairy',
    imageUri:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDsyv5Zlrc5kdoGpo-BULzJo6LTL_MJtWhv71tL17aWd8LjsSngzuH4onq4QvT1ZdXbQ-4QNvttiY3l76SLciy1ZpBJVDVMujqiqffMUy3DbKpBwVREti6jwRlIZ2Gdt5nG8latPygv_qRbDwhoSfaRJu4NrW1DA1Xv37R7RRWk8EybXNYS3R-RqyQV1afjkXUAmkcX2zEMGG0vj98VbhTCzliUeCcRc6yEwSBS-rdOpRUZkk66BPoe0U1B98ktaibewFX46LGlOWK8',
  },
  {
    id: 'sourdough',
    name: 'Sourdough Loaf',
    unitLabel: '450 g',
    category: 'bakery',
    imageUri:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAceS2wlylXJ9FstyxhVEWJVdmLx15I7mCxvV4lGAfK_GlwJdb_XmguX8Ab39wt96mZT4NHnTDp2Xv18bIHPaOG4Uk8UZwPzYxkQ9D9imUeafuR2FGekwPJSQg-w1_-c8KjoEPd4cL8pcNNDKVUD3BUPTfmRPNj0tikOGMAkX_Lp6PyDqB5eD5moUMzQ2WUH6dzRDxPC8Gjs5ymUr5nLpgcyb4aogd5jvSs-M6kSC1FLt_Ja87rt5E5MM3cLs11WM3g0spWn6udAvl1',
  },
  {
    id: 'coffee',
    name: 'Whole Bean Coffee',
    unitLabel: '12 oz',
    category: 'pantry',
    note: 'Dark roast',
    imageUri:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCXa3boXImBnwzbkOlN5ftivUaCMj1F5iM8kWqPaSkwlxEAInzgYSwCr_rRqIAFf25FPCmF4kAj945eKj8vMAfcRH5ckyIumdZ1ye_Hen-GMtYqBBsUHJw9J6-J-EIBr-Jz_GH_O3A0Q7cAoek37W3AY9J_F8luTA-xKa6Kfbg9GQjQgHRaGEz13Fs9WKtyCXywcXiFtxU40ljYt-OoBe7CT1bw9tmdm7hJg2uFbyvjn5sGzXJ9Unwz0CHI4POfGG1Cwdzbk7fuwGKZ',
  },
  {
    id: 'olive-oil',
    name: 'Cold Pressed Olive Oil',
    unitLabel: '500 ml',
    category: 'pantry',
    note: 'Organic',
    imageUri:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDvQlhDhBj3OmH09Jg2BTa7nOtJp3UPkOcjO93CuLGpqAl4P6EwbHJsESO6o7ZHWNN4ff4x3KMBRltfsv1FGxv2L6hLIzIzay4zwwr69wtlzJW-EcNrQPZI0e07jSZitBXuQou_FWsbmctf938gxUtTaDb_h70UF3oWI3w6Rau3LA-bNJDCiTwtTwBU4uqhUViEXWrZdO2U05_IS0kpgU4Q0eYOTm7hQZMx1RsK_BSrNPWrW_7xWbLF_hJydDpO9lanAnabsiFdSWm0',
  },
];
