import { randomValue } from "../src/js/colorChange.js";

describe("check random", () => {
  test("random esta entre 0 y 255 ", () => {
    expect(randomValue()).toBeLessThan(256);
  });
});
