// insert_books.js
db = db.getSiblingDB('plp_bookstore');

db.books.insertMany([
  {
    title: "The River and the Source",
    author: "Margaret A. Ogola",
    genre: "Fiction",
    published_year: 1994,
    price: 18.99,
    in_stock: true,
    pages: 368,
    publisher: "Focus Books"
  },
  {
    title: "Petals of Blood",
    author: "Ngugi wa Thiong'o",
    genre: "Political Fiction",
    published_year: 1977,
    price: 15.50,
    in_stock: true,
    pages: 432,
    publisher: "East African Educational Publishers"
  },
  {
    title: "A Grain of Wheat",
    author: "Ngugi wa Thiong'o",
    genre: "Historical Fiction",
    published_year: 1967,
    price: 14.00,
    in_stock: false,
    pages: 247,
    publisher: "Heinemann"
  },
  {
    title: "My Life in Crime",
    author: "John Kiriamiti",
    genre: "Autobiography",
    published_year: 1980,
    price: 12.99,
    in_stock: true,
    pages: 240,
    publisher: "East African Educational Publishers"
  },
  {
    title: "Blossoms of the Savannah",
    author: "Henry R. ole Kulet",
    genre: "Fiction",
    published_year: 2008,
    price: 16.75,
    in_stock: true,
    pages: 287,
    publisher: "Longhorn Publishers"
  },
  {
    title: "Unbowed: A Memoir",
    author: "Wangari Maathai",
    genre: "Memoir",
    published_year: 2006,
    price: 20.00,
    in_stock: false,
    pages: 368,
    publisher: "Knopf"
  },
  {
    title: "The Last Villains of Molo",
    author: "Kinyanjui Kombani",
    genre: "Fiction",
    published_year: 2004,
    price: 13.50,
    in_stock: true,
    pages: 224,
    publisher: "Longhorn Publishers"
  },
  {
    title: "The Upright Revolution",
    author: "Ngugi wa Thiong'o",
    genre: "Fable",
    published_year: 2016,
    price: 10.99,
    in_stock: true,
    pages: 64,
    publisher: "Seagull Books"
  },
  {
    title: "Dust",
    author: "Yvonne Adhiambo Owuor",
    genre: "Literary Fiction",
    published_year: 2013,
    price: 17.25,
    in_stock: true,
    pages: 386,
    publisher: "Kwani Trust"
  },
  {
    title: "The Hidden Hand of God",
    author: "Rev. Timothy Njoya",
    genre: "Religious",
    published_year: 2017,
    price: 11.99,
    in_stock: true,
    pages: 200,
    publisher: "WordAlive Publishers"
  }
]);