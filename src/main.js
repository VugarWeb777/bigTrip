// Информация о маршруте
import {getTripInfoTemplate} from './components/trip-info';
// Меню
import {getTripControlsTemplate} from './components/trip-controls';
// Фильтры
import {getTripFiltersTemplate} from './components/trip-filters';
import {getTripSortTemplate} from './components/trip-sort';
import {getEventListTemplate} from './components/event-list';
// Карточка с редактированием
import {getEventEditTemplate} from './components/event-edit';
// Карточка
import {getEventTemplate} from './components/event';

function renderTemplate(container, template, type = `beforeend`) {
  container.insertAdjacentHTML(type, template);
}

const tripMainContainer = document.querySelector(`.trip-main`);

renderTemplate(tripMainContainer.querySelector(`.trip-info`), getTripInfoTemplate(), `afterBegin`);
renderTemplate(tripMainContainer.querySelector(`.trip-controls`), getTripControlsTemplate(), `afterBegin`);
renderTemplate(tripMainContainer.querySelector(`.trip-controls`), getTripFiltersTemplate());

const tripEventsContainer = document.querySelector(`.trip-events`);
renderTemplate(tripEventsContainer, getTripSortTemplate());
renderTemplate(tripEventsContainer, getEventListTemplate());

const NUMBER_OF_EVENTS_TO_RENDER = 3;
const eventList = tripEventsContainer.querySelector(`.trip-events__list`);
renderTemplate(eventList, getEventEditTemplate());
new Array(NUMBER_OF_EVENTS_TO_RENDER).fill(``).forEach(()=>{
  renderTemplate(eventList, getEventTemplate());
});

