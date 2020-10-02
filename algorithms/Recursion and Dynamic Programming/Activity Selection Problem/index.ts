import { generateArray } from '../../../utils/array';

export const f1 = (activities: Activity[]) => {
  const f = (n: number, endTime: number): number => {
    if (n === 0) return 0;
    const { begin, end } = activities[n - 1];
    return Math.max(
      end <= endTime ? f(n - 1, begin) + 1 : 0,
      f(n - 1, endTime),
    );
  };

  const lastActivity = activities[activities.length - 1];
  return f(activities.length, lastActivity.end);
};

export const f2 = (activities: Activity[]) => {
  const lastActivity = activities[activities.length - 1];
  const results = generateArray<number>(
    activities.length + 1,
    lastActivity.end + 1,
  );

  for (let n = 0; n <= activities.length; ++n) {
    for (let endTime = 0; endTime <= lastActivity.end; ++endTime) {
      if (n === 0 || endTime < activities[0].end) results[n][endTime] = 0;
      else {
        const { begin, end } = activities[n - 1];
        results[n][endTime] = Math.max(
          end <= endTime ? results[n - 1][begin] + 1 : 0,
          results[n - 1][endTime],
        );
      }
    }
  }

  return results[activities.length][lastActivity.end];
};

export const f3 = (activities: Activity[]) => {
  const lastActivity = activities[activities.length - 1];
  const results = generateArray<number>(
    activities.length + 1,
    lastActivity.end + 1,
  );

  const f = (n: number, endTime: number): number => {
    let result = results[n][endTime];
    if (typeof result === 'number') return result;
    if (n === 0) result = 0;
    else {
      const { begin, end } = activities[n - 1];
      result = Math.max(
        end <= endTime ? f(n - 1, begin) + 1 : 0,
        f(n - 1, endTime),
      );
    }
    return (results[n][endTime] = result);
  };

  return f(activities.length, lastActivity.end);
};

export const f4 = (activities: Activity[]) => {
  const firstActivity = activities[0];
  const list: Activity[] = [firstActivity];
  let lastEndTime = firstActivity.end;

  for (let i = 1; i < activities.length; ++i) {
    const activity = activities[i];
    const { begin, end } = activity;
    if (begin >= lastEndTime) {
      list.push(activity);
      lastEndTime = end;
    }
  }

  return list.length;
};

interface Activity {
  begin: number;
  end: number;
}
