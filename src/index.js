import { createRoot } from "react-dom/client";
import MainView from "./components/main-view/main-view";

import "./index.scss";

import { createStore } from "redux";
import { Provider } from "react-redux";
import todos from "./reducers";

//create a store of my todos
const store = createStore(todos);

function App() {
  return (
    <Provider store={store}>
      <MainView />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
