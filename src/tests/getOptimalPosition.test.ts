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

test("Empty grid with size 0 test", () => {
  expect(
    getOptimalPosition({
      grid: { width: 0, height: 0 },
      components: [],
      newElement: { width: 3, height: 3 },
    })
  ).toStrictEqual({ x: 0, y: 0 });
});

test("Filled grid with size 0 test", () => {
  expect(
    getOptimalPosition({
      grid: { width: 0, height: 0 },
      components: [
        { id: "a", x: 0, y: 0, width: 6, height: 3 },
        { id: "b", x: 6, y: 0, width: 6, height: 6 },
      ],
      newElement: { width: 3, height: 3 },
    })
  ).toStrictEqual({ x: 0, y: 0 });
});

test("Full grid", () => {
  expect(
    getOptimalPosition({
      grid: { width: 16, height: 8 },
      components: [{ id: "a", x: 0, y: 0, width: 16, height: 8 }],
      newElement: { width: 3, height: 3 },
    })
  ).toStrictEqual({ x: 16, y: 8 });
});

test("Regular use #1", () => {
  expect(
    getOptimalPosition({
      grid: { width: 16, height: 8 },
      components: [
        { id: "a", x: 0, y: 0, width: 6, height: 3 },
        { id: "b", x: 6, y: 0, width: 6, height: 6 },
      ],
      newElement: { width: 4, height: 7 },
    })
  ).toStrictEqual({ x: 12, y: 0 });
});

test("Regular use #2", () => {
  expect(
    getOptimalPosition({
      grid: { width: 16, height: 8 },
      components: [
        { id: "a", x: 0, y: 0, width: 3, height: 7 },
        { id: "b", x: 3, y: 0, width: 5, height: 2 },
        { id: "c", x: 3, y: 2, width: 4, height: 2 },
        { id: "d", x: 10, y: 0, width: 6, height: 6 },
      ],
      newElement: { width: 4, height: 7 },
    })
  ).toStrictEqual({ x: 3, y: 4 });
});
