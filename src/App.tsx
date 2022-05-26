import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import GridLayout from "react-grid-layout";
import { useState } from "react";
import getOptimalPosition from "./utils/getOptimalPosition";
import "./App.css";

function App() {
  const [layout, setLayout] = useState([
    { i: "a", x: 0, y: 0, w: 3, h: 7 },
    { i: "b", x: 3, y: 0, w: 5, h: 2 },
    { i: "c", x: 3, y: 2, w: 4, h: 2 },
    { i: "d", x: 10, y: 0, w: 6, h: 6 },
  ]);

  const [newElemIdCounter, setNewElemIdCounter] = useState(1);
  const [gridWith] = useState(16);
  const [widthInput, setWidthInput] = useState(1);
  const [heightInput, setHeightInput] = useState(1);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // don't reload page
    setNewElemIdCounter((currentValue) => {
      return currentValue + 1;
    });

    const { x, y } = getOptimalPosition(
      { width: gridWith, height: 25 },
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
      <header id="header">
        <h1>Optimal Positioning by Donat Avdijaj</h1>
      </header>
      <main id="main">
        <form onSubmit={submitForm} className="flex-center">
          <div className="flex-center">
            <div className="flex-col-center">
              <label htmlFor="height">Height:</label>
              <label htmlFor="width">Width:</label>
            </div>
            <div className="flex-col-center">
              <input
                type="number"
                name="height"
                id="height"
                className="input"
                min={1}
                value={heightInput}
                onChange={(e) => setHeightInput(e.target.valueAsNumber)}
              />
              <input
                type="number"
                name="width"
                id="width"
                className="input"
                min={1}
                value={widthInput}
                onChange={(e) => setWidthInput(e.target.valueAsNumber)}
              />
            </div>
          </div>
          <button id="submit" type="submit">
            Add item
          </button>
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
