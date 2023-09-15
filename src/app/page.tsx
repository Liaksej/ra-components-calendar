import { Calendar } from "@/components/Calendar";

const now: Date = new Date(Date.now());

export default function Home() {
  return <Calendar date={now} />;
}
