import getOptimalPosition from "../utils/getOptimalPosition";

test("Empty grid", () => {
  expect(
    getOptimalPosition({ width: 16, height: 8 }, [], { width: 3, height: 3 })
  ).toStrictEqual({ x: 0, y: 0 });
});

test("Empty grid with size 0", () => {
  expect(
    getOptimalPosition(
      {
        width: 0,
        height: 0,
      },
      [],
      { width: 3, height: 3 }
    )
  ).toStrictEqual({ x: 0, y: 0 });
});

test("Filled grid with size 0", () => {
  expect(
    getOptimalPosition(
      { width: 0, height: 0 },
      [
        { i: "a", x: 0, y: 0, width: 6, height: 3 },
        { i: "b", x: 6, y: 0, width: 6, height: 6 },
      ],
      { width: 3, height: 3 }
    )
  ).toStrictEqual({ x: 0, y: 0 });
});

test("Full grid", () => {
  expect(
    getOptimalPosition(
      { width: 16, height: 8 },
      [{ i: "a", x: 0, y: 0, width: 16, height: 8 }],
      { width: 3, height: 3 }
    )
  ).toStrictEqual({ x: 0, y: 8 });
});

test("New item is wider than grid", () => {
  expect(
    getOptimalPosition(
      { width: 16, height: 8 },
      [
        { i: "a", x: 0, y: 0, width: 3, height: 7 },
        { i: "b", x: 3, y: 0, width: 5, height: 2 },
        { i: "c", x: 3, y: 2, width: 4, height: 2 },
        { i: "d", x: 10, y: 0, width: 6, height: 6 },
      ],
      { width: 17, height: 2 }
    )
  ).toStrictEqual({ x: 0, y: 8 });
});

test("New item is taller than grid", () => {
  expect(
    getOptimalPosition(
      { width: 16, height: 8 },
      [
        { i: "a", x: 0, y: 0, width: 3, height: 7 },
        { i: "b", x: 3, y: 0, width: 5, height: 2 },
        { i: "c", x: 3, y: 2, width: 4, height: 2 },
        { i: "d", x: 10, y: 0, width: 6, height: 6 },
      ],
      { width: 3, height: 12 }
    )
  ).toStrictEqual({ x: 7, y: 2 });
});

test("Normal use case #1", () => {
  expect(
    getOptimalPosition(
      { width: 16, height: 8 },
      [
        { i: "a", x: 0, y: 0, width: 6, height: 3 },
        { i: "b", x: 6, y: 0, width: 6, height: 6 },
      ],
      { width: 4, height: 7 }
    )
  ).toStrictEqual({ x: 12, y: 0 });
});

test("Normal use case #2", () => {
  expect(
    getOptimalPosition(
      { width: 16, height: 8 },
      [
        { i: "a", x: 0, y: 0, width: 3, height: 7 },
        { i: "b", x: 3, y: 0, width: 5, height: 2 },
        { i: "c", x: 3, y: 2, width: 4, height: 2 },
        { i: "d", x: 10, y: 0, width: 6, height: 6 },
      ],
      { width: 4, height: 7 }
    )
  ).toStrictEqual({ x: 3, y: 4 });
});
