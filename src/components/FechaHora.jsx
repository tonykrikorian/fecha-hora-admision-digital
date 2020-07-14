import React, { useState, useEffect } from "react";
import styles from "../fechaHoraStyles.css";

const FechaHora = () => {
  const [days, setDays] = useState(() => {
    return new Date().getDate();
  });

  const [month, setMonth] = useState(() => {
    return new Date().getMonth() + 1;
  });

  const [year, setYear] = useState(() => {
    return new Date().getFullYear();
  });

  const [monthLastDay, setMonthLastDay] = useState(() => {
    return new Date(year, month, 0).getDate();
  });

  //const actualDay = new Date().getDate();

  const meses = [
    { id: 1, name: "Enero" },
    { id: 2, name: "Febrero" },
    { id: 3, name: "Marzo" },
    { id: 4, name: "Abril" },
    { id: 5, name: "Mayo" },
    { id: 6, name: "Junio" },
    { id: 7, name: "Julio" },
    { id: 8, name: "Agosto" },
    { id: 9, name: "Septiembre" },
    { id: 10, name: "Octubre" },
    { id: 11, name: "Noviembre" },
    { id: 12, name: "Diciembre" }
  ];

  const { name: monthName } = meses.find(x => x.id === month);

  useEffect(() => {
    if (days < 1) {
      if (month === 1 && days < 1) {
        setMonth(12);
        setDays(31);
        setYear(y => --y);
      } else {
        setMonth(m => --m);
        setDays(new Date(year, month - 1, 0).getDate());
        setMonthLastDay(new Date(year, month - 1, 0).getDate());
      }
    }
    if (days > monthLastDay) {
      if (month === 12 && days > 31) {
        setMonth(1);
        setDays(1);
        setYear(y => ++y);
      } else {
        setMonth(m => ++m);
        setDays(1);
        setMonthLastDay(new Date(year, month + 1, 0).getDate());
      }
    }
  }, [days, month, year, monthLastDay]);

  console.log({ days, monthName, year, monthLastDay });

  return (
    <div>
      <div className="container">
        <div className="caja">
          <button
            //disabled={days === day - 3}
            onClick={() => {
              setDays(d => --d);
            }}
          >
            «
          </button>
        </div>
        <div className="caja">
          <span>{`${days} ${monthName} ${year}`}</span>
        </div>
        <div className="caja">
          <button
            // disabled={days === day}
            onClick={() => {
              setDays(d => ++d);
            }}
          >
            »
          </button>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  );
};

export default FechaHora;
