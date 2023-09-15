import { FunctionComponent } from "react";
import { format, getWeek } from "date-fns";
import { ru } from "date-fns/locale";
import { Raw } from "@/components/Raw";

interface DateProps {
  date: Date;
}

export const Calendar: FunctionComponent<DateProps> = ({ date }) => {
  let firstDay = new Date(date);

  firstDay.setDate(1);

  let lastDay = new Date(date);
  lastDay.setMonth(firstDay.getMonth() + 1);
  lastDay.setDate(1);

  if (firstDay.getDay() !== 1) {
    let diff = firstDay.getDay() - 1;
    if (diff < 0) diff = 6;
    firstDay.setDate(firstDay.getDate() - diff);
  }

  if (lastDay.getDay() !== 0) {
    const diff = 7 - lastDay.getDay();
    lastDay.setDate(lastDay.getDate() + diff);
  }

  const dates: Date[] = [];
  do {
    dates.push(new Date(firstDay));
    firstDay.setDate(firstDay.getDate() + 1);
  } while (firstDay <= lastDay);

  const weeks = dates.filter((date) => date.getDay() === 1);

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">
          {format(date, "eeee", { locale: ru })}
        </div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
          <div className="ui-datepicker-material-month">
            {format(date, "MMMM", { locale: ru })}
          </div>
          <div className="ui-datepicker-material-year">
            {date.getFullYear()}
          </div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">
            {date.toLocaleString("ru", { month: "long" })}
          </span>
          &nbsp;
          <span className="ui-datepicker-year">{date.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">
              Пн
            </th>
            <th scope="col" title="Вторник">
              Вт
            </th>
            <th scope="col" title="Среда">
              Ср
            </th>
            <th scope="col" title="Четверг">
              Чт
            </th>
            <th scope="col" title="Пятница">
              Пт
            </th>
            <th scope="col" title="Суббота">
              Сб
            </th>
            <th scope="col" title="Воскресенье">
              Вс
            </th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((week) => {
            return <Raw key={getWeek(week)} date={date} dates={dates} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
