// import "./index.css";

// const bookList = [
//   {
//     id: 1,
//     img: "https://m.media-amazon.com/images/I/41v9lLp-xUL.jpg",
//     title: "Life's Amazing Secrets",
//     author: "Gaur Gopal Das",
//   },
//   {
//     id: 2,
//     img: "https://m.media-amazon.com/images/I/41mXQJF3aEL.jpg",
//     title: "Think Like a Monk",
//     author: "Jay Shetty",
//   },
//   {
//     id: 3,
//     img: "https://m.media-amazon.com/images/I/51T8OXMiB5L.jpg",
//     title: "Ikigai",
//     author: "Hector Garcia",
//   },
//   {
//     id: 4,
//     img: "https://m.media-amazon.com/images/I/51-nXsSRfZL.jpg",
//     title: "Atomic Habits",
//     author: "James Clear",
//   },
//   {
//     id: 5,
//     img: "https://m.media-amazon.com/images/I/41SbRjQ+gCL._SY346_.jpg",
//     title: "Atitude is everything",
//     author: "Jeff Keller",
//   },
//   {
//     id: 6,
//     img: "https://m.media-amazon.com/images/I/51bwFsBc0TL._SY346_.jpg",
//     title: "Win Friends & Influence People",
//     author: "Dale Carnegie",
//   },
//   {
//     id: 7,
//     img: "https://m.media-amazon.com/images/I/51yIbg1fvDL._SY346_.jpg",
//     title: "Power of Subconscious Mind",
//     author: "Joseph Murphy",
//   },
//   {
//     id: 8,
//     img: "https://m.media-amazon.com/images/I/51W3MBtLGkL._SY346_.jpg",
//     title: "Power of Positive Attitude",
//     author: "Roger Fritz",
//   },
//   {
//     id: 9,
//     img: "https://m.media-amazon.com/images/I/41rIOOuX1aL._SY346_.jpg",
//     title: "You Can",
//     author: "George Metthew",
//   },
//   {
//     id: 10,
//     img: "https://m.media-amazon.com/images/I/41yzD6S63NL._SY346_.jpg",
//     title: "Make your own Luck",
//     author: "Bob Miglani",
//   },
//   {
//     id: 11,
//     img: "https://m.media-amazon.com/images/I/41AZTgK8S1L._SY346_.jpg",
//     title: "Self employed Life",
//     author: "Jeffrey Shaw",
//   },
//   {
//     id: 12,
//     img: "https://m.media-amazon.com/images/I/41gxzYX-iGL._SY346_.jpg",
//     title: "Business made Simple",
//     author: "Donald Miller",
//   },
//   {
//     id: 13,
//     img: "https://m.media-amazon.com/images/I/41GHG4M0u-L._SY346_.jpg",
//     title: "Marketing made simple",
//     author: "Donald Miller",
//   },
//   {
//     id: 14,
//     img: "https://m.media-amazon.com/images/I/4106Rxa59vL.jpg",
//     title: "Virtual Selling",
//     author: "Jeb Blount",
//   },
//   {
//     id: 15,
//     img: "https://m.media-amazon.com/images/I/515AyT0aKbL._SY346_.jpg",
//     title: "Power phone scripts",
//     author: "Mike Brooks",
//   },
// ];

// const Book = () => {
//   return (
//     <article>
//       {bookList.map((book) => {
//         return (
//           <div key={book.id} className="book">
//             <BookList {...book} />
//           </div>
//         );
//       })}
//     </article>
//   );
// };

// const BookList = ({ img, title, author }) => {
//   return (
//     <section>
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <p>{author}</p>
//     </section>
//   );
// };

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<Book />);

import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const url = "https://api.github.com/users";

const UseEffectFetchData = ({ title }) => {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState("");

  const getUsers = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const usersData = await response.json();
    setIsLoading(false);
    if (response.status >= 200 && response.status <= 299) {
      setIsError(false);
    } else {
      setIsError(true);
      setErrorText(response.statusText);
    }
    setUsers(usersData);
    console.log(response);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>{isError ? errorText : title}</h1>
      <h1>{isLoading ? "Loading... 🥱" : null}</h1>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url} target="_blank">
                  profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<UseEffectFetchData />);
