import React, { useContext, useRef } from "react";
import type { IAppointment } from "../interfaces/helpers";
import { AppointmentsContext } from "../contexts/AppointmentsContext";
import Button from "./ui/Button";

interface IProps {
  appointment: IAppointment;
}

const AppointmentsCard: React.FC<IProps> = ({ appointment }) => {
  //———————————————————————————————— data ————————————————————————————————
  const details = appointment.details.split(" ");
  const { appointments, setAppointments } = useContext(AppointmentsContext);

  const RANDOM_RED_COLOR = useRef<number>(Math.random() * 255);
  const RANDOM_GREEN_COLOR = useRef<number>(Math.random() * 255);
  const RANDOM_BLUE_COLOR = useRef<number>(Math.random() * 255);

  //———————————————————————————————— handlers ————————————————————————————————
  const completeAppointment = (id: string) => {
    const arrAfterEdit = appointments.map((item) => {
      if (item.id === id) return { ...item, isCompleted: !item.isCompleted };
      else return item;
    });
    setAppointments(arrAfterEdit);
  };

  const deleteAppointmenet = (id: string) => {
    const arrAfterDelete = appointments.filter((item) => item.id !== id);
    setAppointments(arrAfterDelete);
  };

  return (
    <div className="flex gap-x-3 items-start bg-white shadow-lg px-5 py-3 rounded-md">
      {/*———————————————————————————————— img ————————————————————————————————*/}
      <div
        className="rounded-full size-10 md:size-16 text-lg md:text-2xl bg-gray-600 flex justify-center items-center text-white uppercase"
        style={{
          backgroundColor: `rgba(${RANDOM_RED_COLOR.current}, ${RANDOM_GREEN_COLOR.current}, ${RANDOM_BLUE_COLOR.current})`,
        }}
      >
        {details.length === 1
          ? details[0].slice(0, 2)
          : `${details[0].slice(0, 1)}${details[1].slice(0, 1)}`}
      </div>
      {/*———————————————————————————————— content ————————————————————————————————*/}
      <div className={`flex-1`}>
        <header className="flex justify-between items-center mb-1">
          <h3
            className={`${
              appointment.isCompleted && "line-through"
            } capitalize text-lg md:text-xl font-semibold text-gray-700`}
          >
            {appointment.details}
          </h3>
          <Button
            className="cursor-pointer p-1"
            onClick={() => deleteAppointmenet(appointment.id)}
          >
            ❌
          </Button>
        </header>
        <div
          className={`flex justify-between items-center ${
            appointment.isCompleted && "line-through"
          }`}
        >
          <span className="text-gray-600">
            {appointment.time} {parseInt(appointment.time) < 12 ? "AM" : "PM"}
          </span>
          <Button
            className="capitalize font-medium flex gap-x-1 items-center cursor-pointer text-pink-950"
            onClick={() => completeAppointment(appointment.id)}
          >
            <span
              className={`size-5 border border-pink-950 rounded-full inline-block ${
                appointment.isCompleted && "bg-pink-950"
              }`}
            ></span>
            <span className={`text-lg`}>done</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsCard;
