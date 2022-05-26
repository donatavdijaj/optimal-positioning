import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import GridLayout from "react-grid-layout";
import { useState } from "react";
import getOptimalPosition from "./utils/getOptimalPosition";

function App() {
  const [layout, setLayout] = useState([
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 3, h: 2 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ]);

  const [newElemIdCounter, setNewElemIdCounter] = useState(1);
  const [gridWith, setGridWith] = useState(16);
  const [widthInput, setWidthInput] = useState(2);
  const [heightInput, setHeightInput] = useState(4);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();
    setNewElemIdCounter((currentValue) => {
      return currentValue + 1;
    });

    const { x, y } = getOptimalPosition(
      { width: gridWith, height: 8 },
      layout,
      {
        w: widthInput,
        h: heightInput,
      }
    );

    // Do something
    setLayout([
      ...layout,
      { i: "id" + newElemIdCounter, x: x, y: y, w: widthInput, h: heightInput },
    ]);
  };

  return (
    <>
      <header>
        <h1>Optimal Positioning by Donat Avdijaj</h1>
      </header>
      <main>
        <form onSubmit={submitForm}>
          <label htmlFor="width">Width:</label>
          <input
            type="number"
            name="width"
            id="width"
            min={0}
            value={widthInput}
            onChange={(e) => setWidthInput(e.target.valueAsNumber)}
          />

          <label htmlFor="height">Height:</label>
          <input
            type="number"
            name="height"
            id="height"
            min={0}
            value={heightInput}
            onChange={(e) => setHeightInput(e.target.valueAsNumber)}
          />
          <button type="submit">Add item</button>
        </form>

        <GridLayout
          className="layout"
          layout={layout}
          cols={gridWith}
          rowHeight={30}
          width={1500}
          onLayoutChange={(newLayout) => {
            console.log(newLayout.toString());
          }}
        >
          {layout.map(({ i }) => {
            return (
              <div key={i} style={{ border: "solid" }}>
                {i}
              </div>
            );
          })}
        </GridLayout>
      </main>
    </>
  );
}

export default App;
