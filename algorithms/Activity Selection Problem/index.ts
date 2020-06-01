export const f1 = (activities: Activity[]) => {
  const f = (n: number, endTime: number) => {
    if (n === 0) return 0;
    const { begin, end } = activities[n - 1];
    let max = 0;
    if (end <= endTime) {
      const s1 = f(n - 1, begin) + 1;
      if (max < s1) max = s1;
    }
    const s2 = f(n - 1, endTime);
    if (max < s2) max = s2;
    return max;
  };

  return f(activities.length, 24);
};

export const f4 = (activities: Activity[]) => {
  const f = (n: number, endTime: number): Activity[] => {
    if (n === 0) return [];
    const activity = activities[n - 1];
    const { begin, end } = activity;
    let a: Activity[] = [];
    if (end <= endTime) {
      const a1 = [...f(n - 1, begin), activity];
      if (a.length < a1.length) a = a1;
    }
    const a2 = f(n - 1, endTime);
    if (a.length < a2.length) a = a2;
    return a;
  };

  return f(activities.length, 24);
};

interface Activity {
  begin: number;
  end: number;
}
