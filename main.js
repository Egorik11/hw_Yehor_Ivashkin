const listAutors = document.querySelector('.listAutors');

const authorsBook = [
  {
    fullName: 'Іван Котляревський',
    product: 'Енеїда',
  },
  {
    fullName: 'Іван Котляревський',
    product: 'Наталка Полтавка',
  },
  {
    fullName: 'Марко Вовчок',
    product: 'Інститутка',
  },
  {
    fullName: 'Григорий Квитка-Основьяненко',
    product: 'Маруся',
  },
  {
    fullName: 'Микола Гоголь',
    product: 'Тарас Бульба',
  },
  {
    fullName: 'Пантелеймон Куліш',
    product: 'Чорна рада',
  },
];

const style = 'font-size:32px; text-align:left;';

authorsBook.forEach((autor, index) => {
  listAutors.innerHTML += `<p style="${style}">
  ${index + 1}. «${autor.product}» - ${autor.fullName};<br />
  </p>`;
});
