import './ComponentsGrid.css';

import React from 'react';

import { Text } from '../../../../../src/components/Text/Text';
import * as wp from '../../../../../src/uiKit/whitepaper/whitepaper';
import { cn } from '../../../../../src/utils/bem';

const cnComponentsGrid = cn('ComponentsGrid');
const cnComponentsGridContainer = cn('ComponentsGridContainer');

export const ComponentsGridBase = () => {
  return (
    <div
      className={cnComponentsGrid('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
    >
      <div className={cnComponentsGridContainer()}>
        <Text
          size="l"
          as="a"
          view="link"
          href="?path=/story/components-attach--playground"
          target="blank"
        >
          Attach
        </Text>
        <Text size="s">Показывает загрузку файла или уже загруженные файлы.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-button--playground">
          Button
        </Text>
        <Text size="s">Кнопка. Разные формы, цвета и размеры.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-calendar--playground">
          Calendar
        </Text>
        <Text size="s">Календарь. Выброр даты или периода.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-checkbox--playground">
          Checkbox
        </Text>
        <Text size="s">Чекбокс. Сделать выбор и подтвердить.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-checkboxgroup--playground">
          CheckboxGroup
        </Text>
        <Text size="s">Группа чекбоксов. Выбрать нескольких вариантов. </Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-choicegroup--playground">
          ChoiceGroup
        </Text>
        <Text size="s">Группа кнопок. Выбрать один или несколько вариантов.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-combobox--playground">
          Combobox
        </Text>
        <Text size="s">Выпадающий список. Выбрать один или несколько вариантов. </Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-contextmenu--playground">
          ContextMenu
        </Text>
        <Text size="s">Контекстное меню. Дополнительные действия на странице.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-filefield--playground">
          FileField
        </Text>
        <Text size="s">Выбрать файлы, чтобы загрузить или отправить.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-radio--playground">
          Radio
        </Text>
        <Text size="s">Радиокнопка. Выбрать один вариант.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-radiogroup--playground">
          RadioGroup
        </Text>
        <Text size="s">Группа радиокнопок. Выбрать один вариант.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-select--playground">
          Select
        </Text>
        <Text size="s">Выпадающий список. Выбрать один вариант.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-switch--playground">
          Switch
        </Text>
        <Text size="s">Переключатель. Два положения: включено и выключено.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-switchgroup--playground">
          SwitchGroup
        </Text>
        <Text size="s">Группа переключателей. Выбрать несколько вариантов.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-text--playground">
          Text
        </Text>
        <Text size="s">Текст — любые текстовые элементы на странице и стили для них. </Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-textfield--playground">
          TextField
        </Text>
        <Text size="s">Поле ввода. Одна или несколько строк.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-userselect--playground">
          UserSelect
        </Text>
        <Text size="s">Выпадающий список для выбора пользователей.</Text>
      </div>
    </div>
  );
};

export const ComponentsGridGrafics = () => {
  return (
    <div
      className={cnComponentsGrid('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
    >
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-avatar--playground">
          Avatar
        </Text>
        <Text size="s">Аватарка. Изображение пользователя.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-file--playground">
          File
        </Text>
        <Text size="s">Иконка для файла с раширением.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-icons--playground">
          Icons
        </Text>
        <Text size="s">Иконки на любые случаи.</Text>
      </div>
    </div>
  );
};

export const ComponentsGridData = () => {
  return (
    <div
      className={cnComponentsGrid('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
    >
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-badge--playground">
          Badge
        </Text>
        <Text size="s">Бейджик. Показывает статус процесса.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-collapse--playground">
          Collapse
        </Text>
        <Text size="s">Скрытый блок. Раскрывается по нажатию на заголовок.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-popover--playground">
          Popover
        </Text>
        <Text size="s">Поповер. Позиционирование элементов по координате или якорю.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-table--playground">
          Table
        </Text>
        <Text size="s">Таблица. Выводит данные с фильтрами и сортировкой.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-tag--playground">
          Tag
        </Text>
        <Text size="s">Тег. Объединяет группы объектов: статей, документов, фотографий.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-tooltip--playground">
          Tooltip
        </Text>
        <Text size="s">Тултип. Всплывающее окно возле элемента или точки.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-user--playground">
          User
        </Text>
        <Text size="s">Показывает информацию о пользователе: аватарку, имя, статус.</Text>
      </div>
    </div>
  );
};

export const ComponentsGridNav = () => {
  return (
    <div
      className={cnComponentsGrid('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
    >
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-breadcrumbs--playground">
          Breadcrumbs
        </Text>
        <Text size="s">Хлебные крошки. Показывает путь к текущей странице.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-pagination--playground">
          Pagination
        </Text>
        <Text size="s">Пагинация. Выбор страницы из диапозона.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-steps--playground">
          Steps
        </Text>
        <Text size="s">
          Вкладки по шагам. Показывает контент в определённой последовательности.
        </Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-Tabs--playground">
          Tabs
        </Text>
        <Text size="s">Табы. Переключает вкладки на странице.</Text>
      </div>
    </div>
  );
};

export const ComponentsGridService = () => {
  return (
    <div
      className={cnComponentsGrid('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
    >
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-Grid--playground">
          Grid
        </Text>
        <Text size="s">Модульная сетка. Отвечает за компоновку содержимого на странице.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-header--playground">
          Header
        </Text>
        <Text size="s">Шапка проекта из готовых блоков: логотип, меню, кнопки, логин, поиск.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-theme--playground">
          Theme
        </Text>
        <Text size="s">Тема. Набор правил, который определяет, как выглядит проект.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-themetoggler--playground">
          ThemeToggler
        </Text>
        <Text size="s">Переключатель тем.</Text>
      </div>
    </div>
  );
};

export const ComponentsGridFeedback = () => {
  return (
    <div
      className={cnComponentsGrid('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
    >
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-informer--playground">
          Informer
        </Text>
        <Text size="s">Сообщение для пользователя. Встраивается в содержимое страницы.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-loader--playground">
          Loader
        </Text>
        <Text size="s">Прелоадер. Показывает, что информация загружается.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-progressspin--playground">
          ProgressSpin
        </Text>
        <Text size="s">Показывает течение процесса: загрузку, отправку или что-то похожее.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-responces--playground">
          Responces
        </Text>
        <Text size="s">
          Заглушки с сообщением об ошибках и важных статусах (404, 503, не найдены данные и
          похожие).
        </Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-snackbbar--playground">
          SnackbBar
        </Text>
        <Text size="s">Мгновенные сообщения пользователю. Перекрывает содержимое.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-timer--playground">
          Timer
        </Text>
        <Text size="s">Таймер. Отсчитывает время до окончания процесса.</Text>
      </div>
    </div>
  );
};

export const ComponentsGridModal = () => {
  return (
    <div
      className={cnComponentsGrid('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
    >
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-modal--playground">
          Modal
        </Text>
        <Text size="s">Всплывающее окно. Показывает конент поверх основного экрана.</Text>
      </div>
      <div className={cnComponentsGridContainer()}>
        <Text size="l" as="a" view="link" href="?path=/story/components-sidebar--playground">
          Sidebar
        </Text>
        <Text size="s">Всплывающее окно. Прилипает к краю экрана.</Text>
      </div>
    </div>
  );
};
