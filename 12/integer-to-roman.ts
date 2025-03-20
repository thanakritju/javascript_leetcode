export function intToRoman(num: number): string {
  let ans = "";
  const map = {
    0: "",
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
  };
  if (num >= 1000) {
    ans += "M".repeat(Math.trunc(num / 1000));
    num = num % 1000;
  }
  if (num >= 500) {
    if (Math.trunc(num / 100) == 9) {
      ans += "CM";
    } else {
      ans += "D" + "C".repeat(Math.trunc(num / 100) - 5);
    }
    num = num % 100;
  }
  if (num >= 100) {
    if (Math.trunc(num / 100) == 4) {
      ans += "CD";
    } else {
      ans += "C".repeat(Math.trunc(num / 100));
    }
    num = num % 100;
  }
  if (num >= 50) {
    if (Math.trunc(num / 10) == 9) {
      ans += "XC";
    } else {
      ans += "L" + "X".repeat(Math.trunc(num / 10) - 5);
    }
    num = num % 10;
  }
  if (num >= 10) {
    if (Math.trunc(num / 10) == 4) {
      ans += "XL";
    } else {
      ans += "X".repeat(Math.trunc(num / 10));
    }
    num = num % 10;
  }

  ans += map[num];

  return ans;
}
