export default (matchResults: number[]) => {
  return matchResults.reduce(
    (acc, value) => {
      value === 1 ? acc.win++ : acc.lose++;
      return acc;
    },
    { win: 0, lose: 0 }
  );
};
