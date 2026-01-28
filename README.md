## Тестовое задание only.digital

![main_page](docs/preview.png)

### Задача

Реализовать блок в соответствии с [макетом](https://disk.360.yandex.ru/d/sKdTKKjxMT06sg). Блок содержит информацию о временных отрезках, в каждом из которых существует несколько событий.
При переключении временных отрезков изменяются соответствующие числа и под ними показывается новый слайдер, который содержит подробную информацию по ключевым событиям на активном временном отрезке.

Возможно существование от 2 до 6 временных отрезков. Все интерактивные точки на окружности располагаются на одинаковом расстоянии друг от друга

Весь блок стоит сделать независимым от другой логики на странице.
Например, если добавить на страницу ещё один такой же блок, верстка и логика работы этих блоков не будет нарушена

[deploy](https://friday-13.github.io/only-history-period/)

## Стек

### Frontend

- TypeScript ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- React ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

### Сборка и стили

- Webpack ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
- SASS ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

### Анимация и UI

- Swiper ![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat-square)
- GSAP ![GSAP](https://img.shields.io/badge/GSAP-%2388CE02.svg?style=for-the-badge&logo=greensock&logoColor=black)

## Варианты запуска

### docker compose

- Выполнить команду

```shell
docker compose up --build -d
```

- после сборки и запуска контейнера, приложение будет доступно по адресу [http://localhost:8023/](http://localhost:8023/)

### dev server

- Выполнить команды

```shell
npm i
npm run dev
```

- после сборки и запуска контейнера, приложение будет доступно по адресу [http://localhost:8080/](http://localhost:8080/)

### prod server

- Выполнить команды

```shell
npm i
npm run build
npm run serve:prod
```

- после сборки и запуска контейнера, приложение будет доступно по адресу [http://localhost:3000/](http://localhost:3000/)

[ts-url]: https://www.djangoproject.com/
[ts-label]: https://img.shields.io/badge/django-19447c?style=for-the-badge&logo=django&logoColor=D45428
