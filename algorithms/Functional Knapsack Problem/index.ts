const getRatio = ({ value, weight }: Item) => value / weight;

export const f1 = (items: Item[], totalWeight: number) => {
  const sortedItems = Array.from(items);
  for (let i = 1; i < sortedItems.length; ++i) {
    const item = sortedItems[i];
    const ratio = getRatio(item);
    let j = i;

    for (; j >= 1 && ratio > getRatio(sortedItems[j - 1]); --j) {
      sortedItems[j] = sortedItems[j - 1];
    }

    sortedItems[j] = item;
  }

  let weight = 0;
  const results: Result[] = [];

  for (let i = 0; i < sortedItems.length; ++i) {
    const item = sortedItems[i];
    const remainingWeight = totalWeight - weight;
    if (totalWeight - weight >= item.weight) {
      results.push({ item, amount: 1 });
      weight += item.weight;
    }
  }
};

export interface Item {
  weight: number;
  value: number;
}

export interface Result {
  item: Item;
  amount: number;
}
