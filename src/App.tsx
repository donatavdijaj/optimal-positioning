import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

function App() {
  return (
    <>
      <header>
        <h1>Optimal Positioning by Donat Avdijaj</h1>
      </header>
      <main>
        <p>
          Algorithm for placing items inside of a grid, closest to the top.
          <br />
          <b>Check in 'src/utils/getOptimalPosition.ts'</b> for the algorithm,
          <br />
          and <b>'src/tests/getOptimalPosition.test.ts'</b> for the tests.
        </p>
      </main>
    </>
  );
}

export default App;
