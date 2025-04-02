export const all = (arr: boolean[]) =>
  arr.reduce<boolean>((acc, x) => acc && x, true);

export const any = (arr: boolean[]) =>
  arr.reduce<boolean>((acc, x) => acc || x, false);

export const passes = (arr: boolean[]) => arr.filter((i) => i).length;
