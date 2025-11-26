import React, { useContext, useEffect, useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { AppointmentsContext } from "../contexts/AppointmentsContext";
import { v4 as uuidv4 } from "uuid";

interface IAppointment {
  details: string;
  time: string;
}

const AddAppointment: React.FC = () => {
  //———————————————————————————————— data ————————————————————————————————
  const { setAppointments } = useContext(AppointmentsContext);

  const [newAppointment, setNewAppointment] = useState<IAppointment>({
    details: "",
    time: "",
  });

  //———————————————————————————————— handlers ————————————————————————————————
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAppointment((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const addAppointment = () => {
    if (newAppointment.details && newAppointment.time) {
      setAppointments((prev) => [
        ...prev,
        {
          id: uuidv4(),
          details: newAppointment.details.trim(),
          time: newAppointment.time,
          isCompleted: false,
        },
      ]);
      setNewAppointment({ details: "", time: "" });
    }
  };

  return (
    <div className="fixed top-10 start-5 end-5 lg:w-5/6 xl:w-4/6 lg:mx-auto">
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full bg-white p-5 shadow-lg rounded-md">
        <Input
          type="text"
          additionalClasses="w-full sm:w-[50%] text-gray-800"
          placeholder="Appointment Details"
          value={newAppointment.details}
          name="details"
          onChange={handleChange}
        />
        <Input
          type="time"
          additionalClasses="w-full sm:w-[30%]"
          value={newAppointment.time}
          name="time"
          onChange={handleChange}
        />
        <Button
          additionalClasses="w-full sm:w-[20%]"
          onClick={addAppointment}
          disabled={newAppointment.details === "" || newAppointment.time === ""}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddAppointment;
