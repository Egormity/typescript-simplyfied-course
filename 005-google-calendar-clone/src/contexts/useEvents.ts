import { useContext } from 'react';
import { EventsContext } from './EventsContext';

export const EVENT_COLORS = ['red', 'green', 'blue'] as const;

export function useEvents() {
  const value = useContext(EventsContext);
  if (!value) throw new Error('useEvent must be used within Events Provider');
  return value;
}
