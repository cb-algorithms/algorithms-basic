export const f1 = (str1: string, str2: string) => {
  const f = (n1: number, n2: number): number => {
    if (n1 === 0) return n2;
    if (n2 === 0) return n1;
    if (str1[n1 - 1] === str2[n2 - 1]) return f(n1 - 1, n2 - 1);
    return Math.min(
      1 + f(n1, n2 - 1),
      1 + f(n1 - 1, n2),
      1 + f(n1 - 1, n2 - 1),
    );
  };
  return f(str1.length, str2.length);
};

console.log(
  f1('geek', 'gesek'),
  f1('cut', 'cat'),
  f1('sunday', 'saturday'),
  f1('thought', 'through'),
  f1('dog', 'cat'),
  f1('dog', 'horse'),
);
