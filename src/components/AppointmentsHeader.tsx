import React, { useContext } from "react";
import { AppointmentsContext } from "../contexts/AppointmentsContext";
import Button from "./ui/Button";

const AppointmentsHeader: React.FC = () => {
  //———————————————————————————————— data ————————————————————————————————
  const { appointments, setAppointments } = useContext(AppointmentsContext);

  const leftAppointments = appointments.filter(
    (item) => item.isCompleted === false
  );

  //———————————————————————————————— handlers ————————————————————————————————
  const clearList = () => {
    setAppointments([]);
  };
  return (
    <div className="flex flex-col md:flex-row gap-3 justify-between mb-8">
      <p className="font-medium text-gray-800 text-xl md:text-2xl flex-1">
        {leftAppointments.length !== 0 ? (
          <>
            You have{" "}
            <span className="text-pink-950 font-semibold">
              {leftAppointments.length}
            </span>{" "}
            {appointments.length === 1 ? "appointment" : "appointments"} left
            today!
          </>
        ) : (
          "Nothing left today 🎉"
        )}
      </p>
      <Button
        additionalClasses="bg-red-900 w-full md:w-fit"
        onClick={clearList}
      >
        Clear List
      </Button>
    </div>
  );
};

export default AppointmentsHeader;
