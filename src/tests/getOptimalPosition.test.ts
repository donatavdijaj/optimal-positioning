import getOptimalPosition from "../utils/getOptimalPosition";

test("Empty grid test", () => {
  expect(
    getOptimalPosition({
      grid: { width: 16, height: 8 },
      components: [],
      newElement: { width: 3, height: 3 },
    })
  ).toStrictEqual({ x: 0, y: 0 });
});
