import { TEMPLATE } from "./index";

describe("TEMPLATE", () => {
  [
    {
      input: 0,
      expected: 0,
    },
  ].forEach(({ expected, input }) => {
    it(`should return ${expected} for ${input} but return ${TEMPLATE(
      input
    )}`, () => {
      expect(TEMPLATE(input)).toBe(expected);
    });
  });
});
