import logo from './logo.svg';
import "./App.css";
import ChangeTime from "./ChangeTime";
import Inc_Dec_numbers from "./Inc_Dec_number";
import DigitalClock from "./DigitalClock";

function App() {
  // const state = useState();

  // stateposition();
  return (
    <div>
      <DigitalClock />
      <Inc_Dec_numbers />
      <ChangeTime />
    </div>
  );
}

export default App;
