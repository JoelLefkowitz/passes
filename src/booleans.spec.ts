import { all, any, passes } from "./booleans";

describe("all", () => {
  it("checks if all elements are true", () => {
    expect(all([])).toBe(true);
    expect(all([true])).toBe(true);
    expect(all([true, false])).toBe(false);
  });
});

describe("any", () => {
  it("checks if any elements are true", () => {
    expect(any([])).toBe(false);
    expect(any([true])).toBe(true);
    expect(any([true, false])).toBe(true);
  });
});

describe("passes", () => {
  it("counts the number of any elements that are true", () => {
    expect(passes([])).toBe(0);
    expect(passes([true])).toBe(1);
    expect(passes([true, false])).toBe(1);
  });
});
