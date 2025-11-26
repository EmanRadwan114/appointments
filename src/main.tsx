import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppointmentsContextProvider } from "./contexts/AppointmentsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <AppointmentsContextProvider>
    <App />
  </AppointmentsContextProvider>
);
