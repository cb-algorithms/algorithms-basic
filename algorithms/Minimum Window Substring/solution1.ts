const createCharacterCounts = (characters: string) => {
  const characterCounts: Record<string, CountInfo> = {};
  for (const character of characters) {
    if (character in characterCounts) {
      characterCounts[character].expected += 1;
    } else {
      characterCounts[character] = { actual: 0, expected: 1 };
    }
  }
  return characterCounts;
};

const satisfies = (characterCounts: Record<string, CountInfo>) => {
  for (const character in characterCounts) {
    if (characterCounts[character].actual < characterCounts[character].expected)
      return false;
  }
  return true;
};

const updateCharacterCount = (
  character: string,
  characterCounts: Record<string, CountInfo>,
  amount: number,
) => {
  const contains = character in characterCounts;
  if (contains) characterCounts[character].actual += amount;
  return contains;
};

const updateResult = (
  resultIndices: WindowIndices,
  from: number,
  to: number,
) => {
  if (to - from < resultIndices.to - resultIndices.from) {
    resultIndices.from = from;
    resultIndices.to = to;
  }
};

const minWindow = (text: string, characters: string): string => {
  const resultIndices: WindowIndices = { from: -1, to: text.length };
  const characterCounts = createCharacterCounts(characters);
  let from = -1;

  for (let to = 0; to < text.length; to += 1) {
    if (
      updateCharacterCount(text[to], characterCounts, 1) &&
      satisfies(characterCounts)
    ) {
      for (from += 1; from <= to; from += 1) {
        if (
          updateCharacterCount(text[from], characterCounts, -1) &&
          !satisfies(characterCounts)
        ) {
          updateResult(resultIndices, from, to);
          break;
        }
      }
    }
  }

  return resultIndices.from >= 0 && resultIndices.to < text.length
    ? text.substring(resultIndices.from, resultIndices.to + 1)
    : '';
};

export default minWindow;

export interface WindowIndices {
  from: number;
  to: number;
}

export interface CountInfo {
  actual: number;
  expected: number;
}
