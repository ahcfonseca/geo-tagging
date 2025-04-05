import Controls from "./components/Controls";
import Header from "./components/Header";
import MapContainer from "./components/MapContainer";
import PointsList from "./components/PointsList";
import { MarkerProvider } from "./context/MarkerContext";
import "./styles.scss";

function App() {
  return (
    <>
      <MarkerProvider>
        <Header />
        <main className="main">
          <MapContainer />
          <PointsList />
          <Controls />
        </main>
      </MarkerProvider>
    </>
  );
}

export default App;
