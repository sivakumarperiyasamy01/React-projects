import Sum from "../components/sum";

test("sum of twonumbers", () => {
  const result = Sum(3, 5);

  expect(result).toBe(8);
});
