import "./App.css";

import AllRoutes from "./Components/AllRoutes";
import NavbarSecond from "./Components/NavbarSecond";
import DateSelector from "./Pages/DateSelector/DateSelector";

import { Plans } from "./Pages/Plans/plans";

function App() {
  return (
    <div className="App">

      {/* <AllRoutes /> */}
      {/* <NavbarSecond/> */}
      <DateSelector />
      {/* <Cart /> */}
      {/* <Plans /> */}

    </div>
  );
}

export default App;
