export function subtractWaterRemain(water, waterPerCup) {
  if (waterPerCup <= water) return parseFloat(water - waterPerCup).toFixed(2);
  else 0;
}

export function getPercentageOfWaterDaily(waterIntake, percent, waterPerCup) {
  const percentage = (waterPerCup * 100) / waterIntake + percent;
  return percentage > 100 ? 100 : parseFloat(percentage.toFixed(2));
}

export function calWaterIntake(gender, weight) {
  let waterIntake;
  switch (gender) {
    case "male":
      waterIntake = (weight * 2.2 * 30) / 2;
      break;
    case "female":
      waterIntake = ((weight * 2.2 * 30) / 2) * 0.85;
      break;
    default:
      waterIntake = 0;
      break;
  }
  waterIntake /= 1000;
  return parseFloat(waterIntake.toFixed(2));
}
