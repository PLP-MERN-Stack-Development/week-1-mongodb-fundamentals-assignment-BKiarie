// queries.js

// --- Task 2: Basic CRUD Operations ---

// 1. Find all books in a specific genre (e.g., "Fiction")
db.books.find({ genre: "Fiction" });

// 2. Find books published after a certain year (e.g., 2010)
db.books.find({ published_year: { $gt: 2010 } });

// 3. Find books by a specific author (e.g., "Ngugi wa Thiong'o")
db.books.find({ author: "Ngugi wa Thiong'o" });

// 4. Update the price of a specific book (e.g., "Dust")
db.books.updateOne(
  { title: "Dust" },
  { $set: { price: 19.99 } }
);

// 5. Delete a book by its title (e.g., "The Hidden Hand of God")
db.books.deleteOne({ title: "The Hidden Hand of God" });


// --- Task 3: Advanced Queries ---

// 1. Find books that are both in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// 2. Use projection to return only the title, author, and price fields
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
);

// 3. Sort books by price ascending
db.books.find().sort({ price: 1 });

// 4. Sort books by price descending
db.books.find().sort({ price: -1 });

// 5. Pagination: limit and skip (e.g., page 2, 5 books per page)
db.books.find().skip(5).limit(5);


// --- Task 4: Aggregation Pipeline ---

// 1. Calculate the average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

// 2. Find the author with the most books in the collection
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

// 3. Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: { $concat: [
        { $substr: [ "$published_year", 0, 3 ] }, "0s"
      ] },
      count: { $sum: 1 }
    }
  }
]);


// --- Task 5: Indexing ---

// 1. Create an index on the title field
db.books.createIndex({ title: 1 });

// 2. Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// 3. Use explain() to demonstrate performance improvement with your indexes
db.books.find({ title: "Dust" }).explain("executionStats");
db.books.find({ author: "Ngugi wa Thiong'o", published_year: 2016 }).explain("executionStats");