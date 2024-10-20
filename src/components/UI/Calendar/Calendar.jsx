import { useState } from "react";

import "@demark-pro/react-booking-calendar/dist/react-booking-calendar.css";

const CalendarWrapper = () => {
  const [selectedFirst, setSelectedFirst] = useState(null);
  const [selectedSecond, setSelectedSecond] = useState(null);
  const [reserved, setReserved] = useState([]);
  const weekDays = [0, 6]; 

  const startDate = new Date();
  const nextMonthDate = new Date();
  nextMonthDate.setMonth(startDate.getMonth() + 1);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h3>Поточний місяць</h3>
        <Calendar
          selected={selectedFirst}
          reserved={reserved}
          range={true}
          protection={true}
          options={{ locale: "en", weekStartsOn: 0, useAttributes: true }}
          onChange={setSelectedFirst}
          onOverbook={(date, type) => alert(type)}
          classNames={
            {
              // DayContent: "reserved-pink",
            }
          }
          disabled={(date, state) => {
            return weekDays.includes(date.getDay());
          }}
          // Встановлюємо початкову дату для першого календаря
          initialDate={startDate}
        />
      </div>
      
      <div>
        <h3>Наступний місяць</h3>
        <Calendar
          selected={selectedSecond}
          reserved={reserved}
          range={true}
          protection={true}
          options={{ locale: "en", weekStartsOn: 0, useAttributes: true }}
          onChange={setSelectedSecond}
          onOverbook={(date, type) => alert(type)}
          classNames={
            {
              // DayContent: "reserved-pink",
            }
          }
          disabled={(date, state) => {
            return weekDays.includes(date.getDay());
          }}
          initialDate={nextMonthDate}
        />
      </div>
    </div>
  );
};

export default CalendarWrapper;