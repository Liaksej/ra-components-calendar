import { FunctionComponent } from "react";
import { Day } from "@/components/Day";

interface RawProps {
  date: Date;
  dates: Date[];
}

export const Raw: FunctionComponent<RawProps> = ({ date, dates }) => {
  const week = dates.slice(0, 7);
  return (
    <tr>
      {week.map((day) => {
        return <Day key={day.getDay()} date={date} dates={dates} />;
      })}
    </tr>
  );
};
