import Calendar from './components/Calendar';
import { EventsProvider } from './contexts/EventsContext';

export default function App() {
  return (
    <EventsProvider>
      <Calendar />
    </EventsProvider>
  );
}
