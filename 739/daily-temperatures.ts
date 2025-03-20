export function dailyTemperatures(temperatures: number[]): number[] {
  const predictions = [];
  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[i] < temperatures[j]) {
        predictions.push(j - i);
        break;
      }
    }
    if (predictions[i] == undefined) {
      predictions.push(0);
    }
  }
  return predictions;
}
