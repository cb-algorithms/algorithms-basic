const checkDifferingOneAway = (s1: string, s2: string) => {
  let hasDiffering = false;
  for (let i = 0; i < s1.length; ++i) {
    if (s1[i] !== s2[i]) {
      if (hasDiffering) return false;
      hasDiffering = true;
    }
  }
  return true;
};

const checkMissingOneAway = (shorter: string, longer: string) => {
  let hasMissing = false;
  let i1 = 0;
  let i2 = 0;
  while (i1 < shorter.length && i2 < longer.length) {
    if (shorter[i1] !== longer[i2]) {
      if (hasMissing) return false;
      hasMissing = true;
      ++i2;
    } else {
      ++i1;
      ++i2;
    }
  }
  return true;
};

export const f1 = (s1: string, s2: string) => {
  const s1Length = s1.length;
  const s2Length = s2.length;
  if (s1Length === s2Length) return checkDifferingOneAway(s1, s2);
  if (s1Length - s2Length === 1) return checkMissingOneAway(s2, s1);
  if (s2Length - s1Length === 1) return checkMissingOneAway(s1, s2);
  return false;
};

console.log(
  f1('pale', 'pale'),
  f1('pale', 'ple'),
  f1('pales', 'pale'),
  f1('pale', 'bale'),
  f1('pale', 'bae'),
);
