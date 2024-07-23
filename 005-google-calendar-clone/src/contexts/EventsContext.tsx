import { createContext, ReactNode, useEffect, useState } from 'react';
import { UnionOmit } from '../utils/type';
import { EVENT_COLORS } from './useEvents';

export type Event = {
  id: string;
  name: string;
  color: (typeof EVENT_COLORS)[number];
  date: Date;
} & (
  | { allDay: false; startTime: string; endTime: string }
  | { allDay: true; startTime?: never; endTime?: never }
);

type EventsContextProps = {
  events: Event[];
  addEvent: (event: UnionOmit<Event, 'id'>) => void;
  updateEvent: (id: string, event: UnionOmit<Event, 'id'>) => void;
  deleteEvent: (id: string) => void;
};

export const EventsContext = createContext<EventsContextProps | null>(null);

type EventProviderProps = {
  children: ReactNode;
};

export function EventsProvider({ children }: EventProviderProps) {
  const [events, setEvents] = useLocalStorage('calendar-ivents', []);

  function addEvent(eventDetails: UnionOmit<Event, 'id'>) {
    setEvents(events => [...events, { ...eventDetails, id: crypto.randomUUID() }]);
  }

  function updateEvent(id: string, eventDetails: UnionOmit<Event, 'id'>) {
    setEvents(events => events.map(event => (event.id === id ? { id, ...eventDetails } : event)));
  }

  function deleteEvent(id: string) {
    setEvents(events => events.filter(event => event.id !== id));
  }

  return (
    <EventsContext.Provider value={{ events, addEvent, updateEvent, deleteEvent }}>
      {children}
    </EventsContext.Provider>
  );
}

function useLocalStorage(key: string, initialValue: Event[]) {
  const [value, setValue] = useState<Event[]>(() => {
    const jsonValue = localStorage.getItem(key);
    if (!jsonValue) return initialValue;

    return (JSON.parse(jsonValue) as Event[]).map(event => {
      if (event.date instanceof Date) return event;
      return { ...event, date: new Date(event.date) };
    });
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
}
