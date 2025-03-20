import { reverse } from "./reverse";

describe("reverse", () => {
  [
    {
      input: 1,
      expected: 1,
    },
    {
      input: 123,
      expected: 321,
    },
    {
      input: -123,
      expected: -321,
    },
    {
      input: 1534236469,
      expected: 0,
    },
  ].forEach(({ expected, input }) => {
    it(`should return ${expected} for ${input}`, () => {
      expect(reverse(input)).toBe(expected);
    });
  });
});
