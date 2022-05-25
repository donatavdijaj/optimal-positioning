type Props = {
  grid: { width: number; height: number };
  components: {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
  }[];
  newElement: { width: number; height: number };
};

export default function getOptimalPosition({
  grid,
  components,
  newElement,
}: Props): { x: number; y: number } {
  const gridArray = new Array<string>(grid.width * grid.height);

  //fill the array with existing components in the grid
  components.forEach(({ id, x, y, width, height }) => {
    for (let cloumn = y; cloumn < height + y; cloumn++) {
      for (let row = x; row < width + x; row++) {
        gridArray[row + grid.width * cloumn] = id;
      }
    }
  });

  var emptySpace = 0;
  var row = -1;

  for (let index = 0; index < gridArray.length; index++) {
    //prevents counting spaces from different rows together
    if (index % grid.width === 0) {
      emptySpace = 0;
      row++;
    }

    //keep a counter of sequential empty spaces
    if (gridArray[index] == null) {
      emptySpace++;
    } else {
      emptySpace = 0;
    }

    //if there is enough horizontal space, check for vertical space
    if (emptySpace === newElement.width) {
      var hasVerticalSpace = true;

      for (let j = 1; j < newElement.height; j++) {
        if (gridArray[index + j * grid.width]) {
          hasVerticalSpace = false;
        }
      }

      if (hasVerticalSpace) {
        const x = index - emptySpace + 1 - grid.width * row;
        return { x: x, y: row };
      }
    }
  }

  //if there is no suitable space, add it to the bottom of the grid
  return { x: 0, y: grid.height };
}
