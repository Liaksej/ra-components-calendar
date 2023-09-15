import { FunctionComponent } from "react";

interface DayProps {
  date: Date;
  dates: Date[];
}

export const Day: FunctionComponent<DayProps> = ({ date, dates }) => {
  let currentDate = dates.shift();

  if (currentDate) {
    let isSameMonth = currentDate.getMonth() === date.getMonth();
    let isSameDay = currentDate.getDate() === date.getDate();

    if (!isSameMonth) {
      return (
        <td className="ui-datepicker-other-month">{currentDate.getDate()}</td>
      );
    } else if (isSameDay) {
      return <td className="ui-datepicker-today">{currentDate.getDate()}</td>;
    } else {
      return <td>{currentDate.getDate()}</td>;
    }
  }

  return null;
};
