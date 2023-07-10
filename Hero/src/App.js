import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import ChipsContainer from "./components/ChipsContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HooksCakeContainer/> */}
        <CakeContainer />
        <ChipsContainer/>
        <IceCreamContainer/>
      </div>
    </Provider>
  );
}

export default App;
