export function reverse(x: number): number {
  const isNegative = x < 0;
  const s = x.toString();
  let a = "";
  for (let i = 0; i < s.length; i++) {
    a = s[i] + a;
  }
  const ans = isNegative ? -parseInt(a) : parseInt(a);
  if (ans >= 2 ** 31 || ans < -(2 ** 31)) {
    return 0;
  }
  return ans;
}
