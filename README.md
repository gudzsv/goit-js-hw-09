# Домашнє завдання №9 `goit-js-hw-09`

> [!NOTE] Для стилізації розмітки твоїх завдань використовуй цей
> [макет](https://www.figma.com/file/m8k9NQV7qZrtYDCvxfD68B/%D0%94%D0%97-JavaScript?type=design&node-id=3-969&mode=design&t=rHElfDXknQHk0BFj-0).

## Завдання 1 - Галерея зображень

Виконуй це завдання у файлах `1-gallery.html` і `1-gallery.js`.

У попередньому домашньому завданні ти самостійно створив/-ла галерею зображень,
використовуючи делегування подій, і додав/-ла через CDN бібліотеку модальне
вікно для відображення повнорозмірної версії зображення.

**_Створення галерей_** — це повсякденна задача розробника, але писати їх вручну
кожного разу занадто трудомістко. Для цього існують бібліотеки, які реалізують
усю логіку роботи галереї.

Зроби таку саму галерею, але використовуючи бібліотеку
[SimpleLightbox](https://simplelightbox.com/), яка повністю візьме на себе
обробку кліків по зображеннях, відкриття і закриття модального вікна, а також
гортання зображень за допомогою клавіатури.

Подивися демовідео роботи галереї.

Зверни увагу на такі деталі:

- Тобі більше не потрібно вручну встановлювати делегування подій, оскільки
  бібліотека [SimpleLightbox](https://simplelightbox.com/) автоматично відстежує
  кліки по картках галереї. Немає необхідності додавати слухачі подій для
  елементів галереї.

- Окрема бібліотека BasicLightbox для створення модальних вікон більше не
  потрібна, оскільки функціонал відкриття модального вікна вбудовано в
  бібліотеку [SimpleLightbox](https://simplelightbox.com/).
- Для встановлення бібліотек тепер не потрібно додавати CDN-посилання в
  **index.html**. Замість цього ми встановлюємо бібліотеки через **npm** в
  терміналі.

Виконуй це завдання у файлах ` 1-gallery.html` і `1-gallery.js`. Розбий його на
декілька підзавдань:

Використовуй код з минулого домашнього завдання та виконай його рефакторинг. Не
потрібно писати все з нуля. Наприклад, створення елементів галереї буде таким
самим. А ось код делегування та відкриття модального вікна потрібно видалити.

Необхідно трохи змінити розмітку картки галереї, використовуй цей шаблон.

```html
<li class="gallery-item">
  <a class="gallery-link" href="large-image.jpg">
    <img class="gallery-image" src="small-image.jpg" alt="Image description" />
  </a>
</li>
```

Додай бібліотеку [SimpleLightbox](https://simplelightbox.com/) як залежність
проєкту, використовуючи **npm** .

Для того щоб підключити CSS код бібліотеки в проєкт, необхідно додати ще один
імпорт, крім того, що описаний у документації.

```js
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
```

Наступний крок це ініціалізація бібліотеки після створення і додання елементів
галереї у `ul.gallery`. Для цього ознайомся з документацією **SimpleLightbox** —
насамперед секції **«Usage»** і **«Markup»**.

Після цього подивись у документації секцію **«Options»** і додай відображення підписів до зображень з атрибута `alt`. Нехай підпис буде знизу і з'являється через **250** мілісекунд після відкриття модального вікна.

#### На що буде звертати увагу ментор при перевірці:
- На живій сторінці відображається галерея зображень із масиву даних `images`
- Галерея зображень стилізована згідно з макетом
- Дані для галереї створені динамічно в JS
- Відсутні власні слухачі
- Підключена бібліотека `SimpleLightbox` з використанням `npm`
- Екземпляр бібліотеки ініціалізований після додавання елементів галереї у DOM і поза межами будь-яких функцій
- При кліку по елементу галереї відкривається модальне вікно підключеної бібліотеки, в якому міститься збільшена версія зображення, по якому клікнули. Весь базовий функціонал бібліотеки працює
- Через `250` мілісекунд після відкривання модального вікна вміст атрибута `alt` з’являється знизу, як підпис до зображення

#### Завдання 2 - Форма зворотного зв'язку
Виконуй це завдання у файлах `2-form.html` і `2-form.js`.

Додай у **HTML** розмітку форми. У **JS** напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

```html
<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>
```
Виконуй це завдання у файлах `2-form.html` і `2-form.js`. Розбий його на декілька підзавдань:
1. Використовуючи делегуваня, відстежуй на формі подію `input` і щоразу записуй у локальне сховище об'єкт з полями `email` і `message`, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок `"feedback-form-state"`.
2. Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, то заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
3. Під час сабміту форми очищай сховище і поля форми, а також виводь у консоль об'єкт з полями `email`, `message` та їхніми поточними значеннями.

#### На що буде звертати увагу ментор при перевірці:
- На живій сторінці відображається форма з двома елементами форми і кнопкою типу `submit`
- Форма стилізована згідно з макетом
- На формі прослуховуються події `input` і `submit`
- При введенні даних у будь-який елемент форми вони записуються у локальне сховище під ключем `"feedback-form-state"`, збережені дані не містять пробіли по краях
- Введення даних в одне поле форми не видаляє дані в сховищі для іншого
- При оновленні сторінки дані з локального сховища підставляються в елементи форми, у полях форми відсутні `undefined`
- При сабміті форми є перевірка, щоб обидва елементи форми були заповнені
- Під час сабміту форми, якщо обидва елементи форми заповнені, виводиться у консоль об'єкт з полями `email`, `message` та їхніми поточними значеннями, а також очищаються сховище і поля форми
- Якщо після сабміту форми ввести в будь-який елемент форми дані, то в локальному сховищі не з’являються дані від попереднього сабміта
