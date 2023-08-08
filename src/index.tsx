import { createRoot } from "react-dom/client";
import App from "./App";
import { ModalState } from "./context/ModalContext";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ModalState>
        <App />
      </ModalState>
    </Provider>
  </BrowserRouter>
);
