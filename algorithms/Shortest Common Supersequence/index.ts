export const f1 = (s1: string, s2: string) => {
  const f = (n1: number, n2: number): string => {
    if (n1 === 0) return s2.substr(0, n2);
    if (n2 === 0) return s1.substr(0, n1);
    const c1 = s1[n1 - 1];
    const c2 = s2[n2 - 1];
    if (c1 === c2) return f(n1 - 1, n2 - 1) + c1;
    const str1 = f(n1 - 1, n2) + c1;
    const str2 = f(n1, n2 - 1) + c2;
    return str1.length < str2.length ? str1 : str2;
  };

  return f(s1.length, s2.length);
};
