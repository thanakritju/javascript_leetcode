import { intToRoman } from "./integer-to-roman";

describe("intToRoman", () => {
  [
    {
      input: 1,
      expected: "I",
    },
    {
      input: 2,
      expected: "II",
    },
    {
      input: 4,
      expected: "IV",
    },
    {
      input: 5,
      expected: "V",
    },
    {
      input: 9,
      expected: "IX",
    },
    {
      input: 10,
      expected: "X",
    },
    {
      input: 40,
      expected: "XL",
    },
    {
      input: 90,
      expected: "XC",
    },
    {
      input: 400,
      expected: "CD",
    },
    {
      input: 900,
      expected: "CM",
    },
    {
      input: 1000,
      expected: "M",
    },
    {
      input: 3000,
      expected: "MMM",
    },
    {
      input: 94,
      expected: "XCIV",
    },
    {
      input: 3749,
      expected: "MMMDCCXLIX",
    },
    {
      input: 58,
      expected: "LVIII",
    },
    {
      input: 994,
      expected: "CMXCIV",
    },
    {
      input: 1994,
      expected: "MCMXCIV",
    },
  ].forEach(({ expected, input }) => {
    it(`should return ${expected} for ${input}`, () => {
      expect(intToRoman(input)).toBe(expected);
    });
  });
});
