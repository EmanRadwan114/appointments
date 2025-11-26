import React, { useContext } from "react";
import { AppointmentsContext } from "../contexts/AppointmentsContext";
import NotFound from "./NotFound";
import AppointmentsCard from "./AppointmentsCard";
import AppointmentsHeader from "./AppointmentsHeader";

const AppointmentsList: React.FC = () => {
  const { appointments } = useContext(AppointmentsContext);
  return (
    <div className="lg:w-4/6 xl:w-1/2 mx-auto">
      {appointments.length ? (
        <>
          <AppointmentsHeader />
          <section className="flex flex-col gap-y-5">
            {appointments.map((item) => (
              <AppointmentsCard appointment={item} key={item.id} />
            ))}
          </section>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default AppointmentsList;
