import { dailyTemperatures } from "./daily-temperatures";

describe("dailyTemperatures", () => {
  [
    {
      input: [73, 74, 75, 71, 69, 72, 76, 73],
      expected: [1, 1, 4, 2, 1, 1, 0, 0],
    },
    {
      input: [30, 40, 50, 60],
      expected: [1, 1, 1, 0],
    },
    {
      input: [30, 60, 90],
      expected: [1, 1, 0],
    },
  ].forEach(({ expected, input }) => {
    it(`should return ${expected} for ${input} but returned ${dailyTemperatures(
      input
    )}`, () => {
      expect(dailyTemperatures(input)).toStrictEqual(expected);
    });
  });
});
