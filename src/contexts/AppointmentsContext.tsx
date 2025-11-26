import React, { createContext, useState, type ReactNode } from "react";
import type { IAppointment } from "../interfaces/helpers";

interface IProps {
  children: ReactNode;
}

interface IContext {
  appointments: IAppointment[];
  setAppointments: React.Dispatch<React.SetStateAction<IAppointment[]>>;
}

const AppointmentsContext = createContext<IContext>({
  appointments: [],
  setAppointments: () => {},
});

const AppointmentsContextProvider: React.FC<IProps> = ({ children }) => {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  return (
    <AppointmentsContext.Provider value={{ appointments, setAppointments }}>
      {children}
    </AppointmentsContext.Provider>
  );
};

export { AppointmentsContextProvider, AppointmentsContext };
