import { useContext, useEffect } from "react";
import "./App.css";
import AddAppointment from "./components/AddAppointment";
import AppointmentsList from "./components/AppointmentsList";
import { AppointmentsContext } from "./contexts/AppointmentsContext";

function App() {
  const { appointments, setAppointments } = useContext(AppointmentsContext);

  //———————————————————————————————— side effects ————————————————————————————————
  useEffect(() => {
    if (localStorage.getItem("appointments") !== null) {
      setAppointments([...JSON.parse(localStorage.getItem("appointments")!)]);
    }
  }, [setAppointments]);

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  return (
    <main>
      <div className="container mx-auto py-10 px-5">
        <AddAppointment></AddAppointment>
        <div className="mt-52 lg:mt-32">
          <AppointmentsList />
        </div>
      </div>
    </main>
  );
}

export default App;
