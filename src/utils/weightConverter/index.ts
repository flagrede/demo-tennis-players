export default (weight: number) => {
  return Number(Math.max(weight / 1000, 0).toFixed(1));
};
