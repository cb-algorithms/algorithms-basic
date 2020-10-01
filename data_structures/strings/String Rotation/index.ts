const isSubstring = (s1: string, s2: string) => s2.includes(s1);

export const f1 = (s1: string, s2: string) => {
  return isSubstring(s2, s1 + s1);
};

console.log(f1('waterbottle', 'erbottlewat'));
console.log(f1('waterbottle', 'elttobretaw'));
