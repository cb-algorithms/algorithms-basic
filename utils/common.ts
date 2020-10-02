export const whichHasMaxLength = <T extends { length: number }>(
  ...items: T[]
) => items.reduce((res, cur) => (res.length > cur.length ? res : cur));
