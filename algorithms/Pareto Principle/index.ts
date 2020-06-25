export const f1 = (effort: number, effect: number, steps: number) => {
  const f = (n: number): Progress => {
    if (n === 0) return { work: 0, time: 0 };
    const { time, work } = f(n - 1);
    return {
      time: time + (1 - time) * effort,
      work: work + (1 - work) * effect,
    };
  };

  return f(steps);
};

export const f2 = (effort: number, effect: number, steps: number) => {
  let result: Progress = { time: 0, work: 0 };
  for (let n = 1; n <= steps; ++n) {
    result = {
      time: result.time + (1 - result.time) * effort,
      work: result.work + (1 - result.work) * effect,
    };
  }
  return result;
};

for (let n = 1; n < 10; ++n) {
  console.log(n, f2(0.45, 0.55, n));
}

interface Progress {
  work: number;
  time: number;
}
