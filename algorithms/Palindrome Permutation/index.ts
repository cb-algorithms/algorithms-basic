export const f1 = (s: string) => {
  const hash: Record<string, boolean> = {};
  const length = s.length;
  let oddCount = 0;
  for (let i = 0; i < length; ++i) {
    const char = s[i].toLowerCase();
    if (char !== ' ') {
      if (typeof hash[char] !== 'boolean') hash[char] = false;
      else hash[char] = !hash[char];

      if (hash[char] === false) ++oddCount;
      else --oddCount;
    }
  }
  return oddCount <= 1;
};

// ------------------------------------
// DEBUG
// ------------------------------------
console.log(f1('Tact Coa'));
// ------------------------------------
