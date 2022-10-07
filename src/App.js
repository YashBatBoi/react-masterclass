  import React from "react";
  import "./App.css";

  export default function App() {
    return (
      <div className="App">
        <div className="container">
          <Book />
        </div>
      </div>
    );
  }

  const Book = () => {
    bookList.map((books) => {
      return <BookRender {...books} />;
    });
  };

  const bookList = [
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/41v9lLp-xUL.jpg",
      title: "Life's Amazing Secrets",
      author: "Gaur Gopal Das",
    },
    {
      id: 2,
      img: "https://m.media-amazon.com/images/I/41mXQJF3aEL.jpg",
      title: "Think Like a Monk",
      author: "Jay Shetty",
    },
    {
      id: 3,
      img: "https://m.media-amazon.com/images/I/51T8OXMiB5L.jpg",
      title: "Ikigai",
      author: "Hector Garcia",
    },
    {
      id: 4,
      img: "https://m.media-amazon.com/images/I/51-nXsSRfZL.jpg",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      id: 5,
      img: "https://m.media-amazon.com/images/I/41SbRjQ+gCL._SY346_.jpg",
      title: "Atitude is everything",
      author: "Jeff Keller",
    },
    {
      id: 6,
      img: "https://m.media-amazon.com/images/I/51bwFsBc0TL._SY346_.jpg",
      title: "Win Friends & Influence People",
      author: "Dale Carnegie",
    },
    {
      id: 7,
      img: "https://m.media-amazon.com/images/I/51yIbg1fvDL._SY346_.jpg",
      title: "Power of Subconscious Mind",
      author: "Joseph Murphy",
    },
    {
      id: 8,
      img: "https://m.media-amazon.com/images/I/51W3MBtLGkL._SY346_.jpg",
      title: "Power of Positive Attitude",
      author: "Roger Fritz",
    },
    {
      id: 9,
      img: "https://m.media-amazon.com/images/I/41rIOOuX1aL._SY346_.jpg",
      title: "You Can",
      author: "George Metthew",
    },
    {
      id: 10,
      img: "https://m.media-amazon.com/images/I/41yzD6S63NL._SY346_.jpg",
      title: "Make your own Luck",
      author: "Bob Miglani",
    },
    {
      id: 11,
      img: "https://m.media-amazon.com/images/I/41AZTgK8S1L._SY346_.jpg",
      title: "Self employed Life",
      author: "Jeffrey Shaw",
    },
    {
      id: 12,
      img: "https://m.media-amazon.com/images/I/41gxzYX-iGL._SY346_.jpg",
      title: "Business made Simple",
      author: "Donald Miller",
    },
    {
      id: 13,
      img: "https://m.media-amazon.com/images/I/41GHG4M0u-L._SY346_.jpg",
      title: "Marketing made simple",
      author: "Donald Miller",
    },
    {
      id: 14,
      img: "https://m.media-amazon.com/images/I/4106Rxa59vL.jpg",
      title: "Virtual Selling",
      author: "Jeb Blount",
    },
    {
      id: 15,
      img: "https://m.media-amazon.com/images/I/515AyT0aKbL._SY346_.jpg",
      title: "Power phone scripts",
      author: "Mike Brooks",
    },
  ];

  const BookRender = ({ title, author, img }) => {
    console.log(title + author + img);
    return (
      <section className="book-list">
        <img src={img} alt="" />
        <h1>{title}</h1>
        <p>{author}</p>
      </section>
    );
  };
