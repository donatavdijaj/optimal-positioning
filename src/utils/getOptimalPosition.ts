type Grid = { width: number; height: number };
type GridComponent = {
  i: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

/**
 * Returns the closest position to the top for the new element in the grid
 * @param grid Grid width and height
 * @param components Items already in the grid
 * @param newElement Item to be added
 * @returns Position of the new item
 */
export default function getOptimalPosition(
  grid: Grid,
  components: GridComponent[],
  newElement: { width: number; height: number }
): { x: number; y: number } {
  //Storing the grid as an array
  const gridArray = new Array<string>(grid.width * grid.height);

  //Fill the array with existing components in the grid
  components.forEach(({ i, x, y, width, height }) => {
    for (let yPos = y; yPos < height + y; yPos++) {
      for (let xPos = x; xPos < width + x; xPos++) {
        gridArray[xPos + grid.width * yPos] = i;
      }
    }
  });

  let emptySpace = 0;
  let row = 0;

  for (let index = 0; index < gridArray.length; index++) {
    //prevents counting spaces from different rows together
    if (index % grid.width === 0 && index != 0) {
      emptySpace = 0;
      row++;
    }

    //keep a counter of sequential empty spaces
    if (gridArray[index] == null) {
      emptySpace++;
    } else {
      emptySpace = 0;
    }

    /**
     * gridArray[index] == null ? emptySpace++ : (emptySpace = 0);
     *
     * This would be a shorter syntax using the ternary operator
     * but it is less readable in my opinion so I don't use it
     */

    //if there is enough horizontal space, check for vertical space
    if (emptySpace === newElement.width) {
      var hasVerticalSpace = true;

      for (
        let verticalPos = 1;
        verticalPos < newElement.height;
        verticalPos++
      ) {
        if (gridArray[index + verticalPos * grid.width]) {
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
