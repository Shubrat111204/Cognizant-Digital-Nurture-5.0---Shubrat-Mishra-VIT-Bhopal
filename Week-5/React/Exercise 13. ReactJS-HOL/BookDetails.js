import React from "react";

export const books = [
  {
    id: 101,
    name: "Master React",
    price: 670
  },
  {
    id: 102,
    name: "Deep Dive into Angular 11",
    price: 800
  },
  {
    id: 103,
    name: "Mongo Essentials",
    price: 450
  }
];

function BookDetails() {

  const bookList = books.map((book) => (
    <div key={book.id}>
      <h3>{book.name}</h3>
      <h4>{book.price}</h4>
    </div>
  ));

  return (
    <div
      style={{
        borderLeft: "3px solid green",
        paddingLeft: "20px"
      }}
    >
      <h2>Book Details</h2>

      {bookList}

    </div>
  );
}

export default BookDetails;