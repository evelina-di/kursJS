import Book from "./books.js";

const firstBook = new Book(
    "Gone with the wind",
    "Margaret Mitchell",
    "1936,01,30",
    false,
    true
)
console.log(firstBook);

const secondBook = new Book(
    "Anna Karenina",
    "Lew Tolstoy",
    "1877,01,20",
    false,
    false
)
console.log(secondBook);

const thirdBook = new Book(
    "Moomins",
    "Tove Marika Jansson",
    "1945,05,20",
    true,
    false
)
console.log(thirdBook);

const fourthBook = new Book(
    "One Hundred Years of Solitude",
    "Gabriel Garcia Marquez",
    "1967,05,20",
    false,
    true
)
console.log(fourthBook);

const fifthBook = new Book(
    "Mrs. Dalloway",
    "Virginia Woolf",
    "1925,05,14",
    false,
    true
)
console.log(fifthBook);