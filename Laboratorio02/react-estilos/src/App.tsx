import "./App.css";
import { Card } from "./components/Card";
import UiverseCard from "./components/uiverse/UiverseCard";
import UiverseLoader from "./components/uiverse/UiverseLoader";
import UiverseRadioButton from "./components/uiverse/UiverseRadioButton";

function App() {
  return (
    <>
      <Card color="#f0f0f0">
        <Card color="#ffaa1d">
          <UiverseCard />
        </Card>
        <Card color="#ffaa1d">
          <UiverseRadioButton />
        </Card>
        <Card color="#ffaa1d">
          <UiverseLoader />
        </Card>
      </Card>
    </>
  );
}

export default App;
