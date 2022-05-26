import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import GridLayout from "react-grid-layout";
import { useState } from "react";

function App() {
  const [layout, setLayout] = useState([
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 3, h: 2 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ]);

  const [widthInput, setWidthInput] = useState(2);
  const [heightInput, setHeightInput] = useState(4);

  return (
    <>
      <header>
        <h1>Optimal Positioning by Donat Avdijaj</h1>
      </header>
      <main>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1200}
        >
          {layout.map(({ i }) => {
            return <div key={i}>{i}</div>;
          })}
        </GridLayout>

        <form>
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
          <button
            onClick={() => {
              setLayout([...layout, { i: "d", x: 8, y: 0, w: 1, h: 1 }]);
            }}
          >
            Add item
          </button>
        </form>
      </main>
    </>
  );
}

export default App;
