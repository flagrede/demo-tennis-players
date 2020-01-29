import computeResult from "./index";

test("should compute 3 wins and 2 loses", () => {
  // Given
  const matchResults = [1, 0, 1, 0, 1];
  const expectedResult = { win: 3, lose: 2 };

  // When
  const result = computeResult(matchResults);

  // Then
  expect(result).toEqual(expectedResult);
});

test("should compute 1 win and 4 loses", () => {
  // Given
  const matchResults = [0, 0, 1, 0, 0];
  const expectedResult = { win: 1, lose: 4 };

  // When
  const result = computeResult(matchResults);

  // Then
  expect(result).toEqual(expectedResult);
});

test("should compute 5 wins and 0 lose", () => {
  // Given
  const matchResults = [1, 1, 1, 1, 1];
  const expectedResult = { win: 5, lose: 0 };

  // When
  const result = computeResult(matchResults);

  // Then
  expect(result).toEqual(expectedResult);
});

test("should compute 0 win and 5 loses", () => {
  // Given
  const matchResults = [0, 0, 0, 0, 0];
  const expectedResult = { win: 0, lose: 5 };

  // When
  const result = computeResult(matchResults);

  // Then
  expect(result).toEqual(expectedResult);
});

test("should compute 0 win and 0 lose", () => {
  // Given
  const matchResults = [];
  const expectedResult = { win: 0, lose: 0 };

  // When
  const result = computeResult(matchResults);

  // Then
  expect(result).toEqual(expectedResult);
});
