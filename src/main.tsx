import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App.tsx";
import { SideBarModal } from "./features/basket/ui/SideBarModal.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <SideBarModal />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
