import "./App.css";
// import AllRoutes from "./Components/LandingPage/components/AllRoutes"
import { SignUp } from "./Pages/Authentication/SignUp";
import {Faq} from './Components/Faq';

function App() {

	return <div className="App">
    {/* <AllRoutes /> */}
    <SignUp/>
    <Faq/>
  </div>;



}

export default App;
