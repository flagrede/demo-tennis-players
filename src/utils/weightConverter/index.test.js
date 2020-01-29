import convertWeight from ".";

test("should couvert positive weight", () => {
  // Given
  const weightInput = 85000;
  const expectedWeight = 85;

  // When
  const result = convertWeight(weightInput);

  // Then
  expect(result).toEqual(expectedWeight);
});

test("should not return negative value", () => {
  // Given
  const weightInput = -85000;
  const expectedWeight = 0;

  // When
  const result = convertWeight(weightInput);

  // Then
  expect(result).toEqual(expectedWeight);
});

test("should return weight with one decimal precision", () => {
  // Given
  const weightInput = 85622;
  const expectedWeight = 85.6;

  // When
  const result = convertWeight(weightInput);

  // Then
  expect(result).toEqual(expectedWeight);
});
