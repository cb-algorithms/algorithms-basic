const getRatio = ({ value, weight }: Item) => value / weight;

const sortItems = (items: Item[]) => {
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

  return sortedItems;
};

export const f1 = (items: Item[], totalWeight: number) => {
  const sortedItems = sortItems(items);
  let accWeight = 0;
  let accValue = 0;

  for (let i = 0; i < sortedItems.length; ++i) {
    const { value, weight } = sortedItems[i];
    const remainingWeight = totalWeight - accWeight;
    if (remainingWeight === 0) break;
    if (remainingWeight >= weight) {
      accValue += value;
      accWeight += weight;
    } else {
      accValue += (remainingWeight / weight) * value;
      break;
    }
  }

  return accValue;
};

export interface Item {
  weight: number;
  value: number;
}
