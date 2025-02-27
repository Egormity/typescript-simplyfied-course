import {
  addMonths,
  eachDayOfInterval,
  endOfDay,
  endOfMonth,
  endOfWeek,
  isBefore,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns';
import { FormEvent, Fragment, useId, useMemo, useRef, useState } from 'react';
import { formatDate } from '../utils/formatDate';
import { cc } from '../utils/cc';
import { EVENT_COLORS, useEvents } from '../contexts/useEvents';
import Modal, { ModalProps } from './Modal';
import { UnionOmit } from '../utils/type';
import { Event } from '../contexts/EventsContext';
import OverflowContainer from './OverflowContainer';

export default function Calendar() {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const { events } = useEvents();

  const calendarDays = useMemo(() => {
    const firstWeekStart = startOfWeek(startOfMonth(selectedMonth));
    const lastWeekEnd = endOfWeek(endOfMonth(selectedMonth));

    return eachDayOfInterval({
      start: firstWeekStart,
      end: lastWeekEnd,
    });
  }, [selectedMonth]);

  return (
    <div className='calendar'>
      <div className='header'>
        <button className='btn' onClick={() => setSelectedMonth(new Date())}>
          Today
        </button>
        <div>
          <button className='month-change-btn' onClick={() => setSelectedMonth(month => subMonths(month, 1))}>
            &lt;
          </button>
          <button
            className='month-change-btn '
            onClick={() => setSelectedMonth(month => addMonths(month, 1))}
          >
            &gt;
          </button>
        </div>
        <span className='month-title'>{formatDate(selectedMonth, { month: 'long', year: 'numeric' })}</span>
      </div>
      <div className='days'>
        {calendarDays.map((day, i) => (
          <CalendarDay
            day={day}
            showWeekName={i < 7}
            selectedMonth={selectedMonth}
            key={day.getTime()}
            events={events.filter(event => isSameDay(day, event.date))}
          />
        ))}
      </div>
    </div>
  );
}

type CalendarDayProps = {
  day: Date;
  showWeekName: boolean;
  selectedMonth: Date;
  events: Event[];
};

function CalendarDay({ day, showWeekName, selectedMonth, events }: CalendarDayProps) {
  const { addEvent } = useEvents();
  const [isNewEventModalOpen, setIsNewEventModalOpen] = useState(false);
  const [isViewMoreEventModalOpen, setIsViewMoreEventModalOpen] = useState(false);

  const sortedEvents = useMemo(() => {
    const timeToNumber = (time: string) => parseFloat(time.replace(':', '.'));

    return [...events].sort((a, b) => {
      if (a.allDay && b.allDay) return 0;
      if (a.allDay) return -1;
      if (b.allDay) return 1;
      return timeToNumber(a.startTime) - timeToNumber(b.startTime);
    });
  }, [events]);

  return (
    <div
      className={cc(
        'day',
        isBefore(endOfDay(day), new Date()) && 'old-month-day',
        !isSameMonth(day, selectedMonth) && 'non-month-day'
      )}
    >
      <div className='day-header'>
        {showWeekName && <div className='week-name'>{formatDate(day, { weekday: 'short' })}</div>}
        <div className={cc('day-number', isToday(day) && 'today')}>{formatDate(day, { day: 'numeric' })}</div>
        <button className='add-event-btn' onClick={() => setIsNewEventModalOpen(true)}>
          +
        </button>
      </div>
      {sortedEvents.length > 0 && (
        <OverflowContainer
          className='events'
          items={sortedEvents}
          getKey={event => event.id}
          renderItem={event => <CalendarEvent event={event} />}
          renderOverflow={amount => (
            <>
              <button onClick={() => setIsViewMoreEventModalOpen(true)} className='events-view-more-btn'>
                +{amount} More
              </button>
              <ViewMoreCalendarEventsModal
                events={sortedEvents}
                isOpen={isViewMoreEventModalOpen}
                onClose={() => setIsViewMoreEventModalOpen(false)}
              />
            </>
          )}
        />
      )}

      <EventFormModal
        date={day}
        isOpen={isNewEventModalOpen}
        onClose={() => setIsNewEventModalOpen(false)}
        onSubmit={addEvent}
      />
    </div>
  );
}

type ViewMoreCalendarEventsModalProps = {
  events: Event[];
} & Omit<ModalProps, 'children'>;

function ViewMoreCalendarEventsModal({ events, ...modalProps }: ViewMoreCalendarEventsModalProps) {
  if (events.length === 0) return;
  return (
    <Modal {...modalProps}>
      <div className='modal-title'>
        <small>{formatDate(events[0].date, { dateStyle: 'short' })}</small>
        <button className='close-btn' onClick={modalProps.onClose}>
          &times;
        </button>
      </div>
      <div className='events'>
        {events.map(event => (
          <CalendarEvent event={event} key={event.id} />
        ))}
      </div>
    </Modal>
  );
}

function CalendarEvent({ event }: { event: Event }) {
  const [isEditModelOpen, setIsEditModelOpen] = useState(false);
  const { updateEvent, deleteEvent } = useEvents();

  return (
    <>
      <button
        onClick={() => setIsEditModelOpen(true)}
        className={cc('event', event.color, event.allDay && 'all-day-event')}
      >
        {event.allDay ? (
          <div className='event-name'>{event.name}</div>
        ) : (
          <>
            {' '}
            <div className={`color-dot ${event.color}`}></div>
            <div className='event-time'>
              {formatDate(parse(event.startTime, 'HH:mm', event.date), { timeStyle: 'short' })}
            </div>
            <div className='event-name'>{event.name}</div>
          </>
        )}
      </button>
      <EventFormModal
        event={event}
        isOpen={isEditModelOpen}
        onClose={() => setIsEditModelOpen(false)}
        onSubmit={e => updateEvent(event.id, e)}
        onDelete={() => deleteEvent(event.id)}
      />
    </>
  );
}

type EventFormModalProps = {
  onSubmit: (event: UnionOmit<Event, 'id'>) => void;
} & ({ onDelete: () => void; event: Event; date?: never } | { onDelete?: never; event?: never; date: Date }) &
  Omit<ModalProps, 'children'>;

function EventFormModal({ onSubmit, onDelete, event, date, ...modalProps }: EventFormModalProps) {
  const formId = useId();
  const [selectedColor, setSelectedColor] = useState(event?.color || EVENT_COLORS[0]);
  const [isAllDayChecked, setIsAllDayChecked] = useState(event?.allDay || false);
  const [startTime, setStartTime] = useState(event?.startTime || '');
  const endTimeRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const name = nameRef.current?.value;
    const endTime = endTimeRef.current?.value;

    if (!name) return;

    const commonProps = {
      name,
      date: date || event?.date,
      color: selectedColor,
    };

    let newEvent: UnionOmit<Event, 'id'>;
    if (isAllDayChecked) newEvent = { ...commonProps, allDay: true };
    if (!isAllDayChecked) {
      if (!endTime || !startTime) return;
      newEvent = { ...commonProps, allDay: false, startTime, endTime };
    }

    modalProps.onClose();
    onSubmit(newEvent);
  }

  return (
    <Modal {...modalProps}>
      <div className='modal-title'>
        <div>{!event ? 'Add Event' : 'Edit Event'}</div>
        <small> {formatDate(date || event.date, { dateStyle: 'short' })}</small>
        <button className='close-btn' onClick={modalProps.onClose}>
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor={`${formId}-name`}>Name</label>
          <input defaultValue={event?.name} required type='text' id={`${formId}-name`} ref={nameRef} />
        </div>
        <div className='form-group checkbox'>
          <input
            type='checkbox'
            id={`${formId}-all-day`}
            checked={isAllDayChecked || event?.allDay}
            onChange={() => setIsAllDayChecked(checked => !checked)}
          />
          <label htmlFor={`${formId}-all-day`}>All Day?</label>
        </div>
        <div className='row'>
          <div className='form-group'>
            <label htmlFor={`${formId}-start-time`}>Start Time</label>
            <input
              value={startTime || event?.startTime}
              onChange={e => setStartTime(e.target.value)}
              required={!isAllDayChecked}
              disabled={isAllDayChecked}
              type='time'
              id={`${formId}-start-time`}
            />
          </div>
          <div className='form-group'>
            <label htmlFor={`${formId}-end-time`}>End Time</label>
            <input
              defaultValue={event?.endTime}
              min={startTime}
              required={!isAllDayChecked}
              disabled={isAllDayChecked}
              type='time'
              id={`${formId}-end-time`}
              ref={endTimeRef}
            />
          </div>
        </div>
        <div className='form-group'>
          <label>Color</label>
          <div className='row left'>
            {EVENT_COLORS.map(color => (
              <Fragment key={color}>
                <input
                  type='radio'
                  name='color'
                  value={color}
                  id={`${formId}-${color}`}
                  checked={selectedColor === color}
                  onChange={() => setSelectedColor(color)}
                  className='color-radio'
                />
                <label htmlFor={`${formId}-${color}`}>
                  <span className='sr-only'>{color}</span>
                </label>
              </Fragment>
            ))}
          </div>
        </div>
        <div className='row'>
          <button className='btn btn-success' type='submit'>
            {!event ? 'Add' : 'Edit'}
          </button>
          {onDelete && (
            <button className='btn btn-delete' type='button' onClick={onDelete}>
              Delete
            </button>
          )}
        </div>
      </form>
    </Modal>
  );
}
