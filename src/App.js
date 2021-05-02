import "./styles/global.scss";

import { Provider } from "react-redux";

import { Store } from "./store";

import Home from "./pages/Home";

function App(props) {
  return (
    <div>
      <Provider store={Store}>
        <Home></Home>
      </Provider>
    </div>
  );
}

export default App;
