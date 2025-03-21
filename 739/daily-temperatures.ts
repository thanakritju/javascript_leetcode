export function dailyTemperatures(temperatures: number[]): number[] {
  const predictions = new Array(temperatures.length).fill(0);
  const stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1][0] < temperatures[i]) {
      const poppedTemperature = stack.pop();
      predictions[poppedTemperature[1]] = i - poppedTemperature[1];
    }

    stack.push([temperatures[i], i]);
  }
  return predictions;
}
