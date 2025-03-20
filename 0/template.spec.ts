import { template } from "./template";

describe("template", () => {
  [
    {
      input: 0,
      expected: 0,
    },
  ].forEach(({ expected, input }) => {
    it(`should return ${expected} for ${input}`, () => {
      expect(template(input)).toBe(expected);
    });
  });
});
