const listAutors = document.querySelector('.listAutors');

const authorsBook = [
  {
    fullName: 'Іван Котляревський',
    product: 'Енеїда',
    link: 'https://www.ukrlib.com.ua/books/printit.php?tid=1052',
  },
  {
    fullName: 'Іван Котляревський',
    product: 'Наталка Полтавка',
    link: 'https://www.ukrlib.com.ua/books/printit.php?tid=1054',
  },
  {
    fullName: 'Марко Вовчок',
    product: 'Інститутка',
    link: 'https://www.ukrlib.com.ua/books/printit.php?tid=457',
  },
  {
    fullName: 'Григорий Квитка-Основьяненко',
    product: 'Маруся',
    link: 'https://www.ukrlib.com.ua/books/printit.php?tid=1018',
  },
  {
    fullName: 'Микола Гоголь',
    product: 'Тарас Бульба',
    link: 'https://www.ukrlib.com.ua/world/printit.php?tid=15',
  },
  {
    fullName: 'Пантелеймон Куліш',
    product: 'Чорна рада',
    link: 'https://www.ukrlib.com.ua/books/printit.php?tid=1084',
  },
];

const styleForAutor = 'font-size:32px; text-align:left;';
const styleForLink = 'text-decoration:none;';

authorsBook.forEach((autor, index) => {
  listAutors.innerHTML += `<p style="${styleForAutor}">
  ${index + 1}. «${autor.product}» - ${autor.fullName};<br />
  <a target="_blank" style="${styleForLink}" href="${autor.link}">${
    autor.link
  }</a> <br />
  </p>`;
});
