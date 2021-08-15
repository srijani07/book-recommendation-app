import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Memoir: [
    {
      name: "Becoming",
      rating: "4.5/5",
      descripton:
        "Described by Michelle Obama as a deeply personal experience, the book talks about her roots and how she found her voice, as well as her time in the White House, her public health campaign, and her role as a mother"
    },
    {
      name: "I am Malala",
      rating: "4.5/5",
      descripton:
        "Written by Malala Yousafzai and Christina Lamb, the book details the early life of Yousafzai, her father's ownership of schools and activism and the assassination attempt made against Yousafzai, when she was aged 15, following her activism for female education."
    },
    {
      name: "tuesdays with Morrie",
      rating: "5/5",
      descripton:
        "A memoir by American author Mitch Albom about a series of visits Albom made to his former sociology professor Morrie Schwartz, as Schwartz gradually dies of ALS."
    }
  ],

  Fiction: [
    {
      name: "The Hare",
      rating: "3.5/5",
      descripton:
        "An affecting portrait of Rosie Monroe, of her resilience and personal transformation under the pin of the male gaze."
    },
    {
      name: "Every Last Fear",
      rating: "3.5/5",
      descripton:
        "A family made infamous by a true-crime documentary is found dead, leaving their surviving son to uncover the truth about their final days."
    },
    {
      name: "We Were Never Here",
      rating: "3/5",
      descripton:
        "A book that skillfully examines toxic friendship at its most extreme."
    }
  ],

  Thriller: [
    {
      name: "Red Wolves",
      rating: "4/5",
      descripton:
        "Ex-MI6 officer Scott Pearce uncovers a chilling plot to unleash a terrifying new toxin on an unsuspecting world. When Pearce’s team deploy to fight the menace on two fronts an undercover operation goes horribly wrong, leaving Pearce in a race against time to stop this deadly new threat."
    },
    {
      name: "Fragile",
      rating: "4.5/5",
      descripton:
        "A thrilling novel from New York Times bestselling author Lisa Unger about the hunt for a missing girl and one community's intricate yet fragile bonds."
    },
    {
      name: "The Imposter",
      rating: "4/5",
      descripton:
        "Anna Wharton’s debut, The Imposter, is a thought-provoking story of obsession, loneliness and the lies we tell ourselves in order to live with ourselves."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Fiction");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> booooooked. </h1>
      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "black",
              color: "white",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              style={{
                margin: "auto",
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "small" }}> {book.descripton} </div>
              <div style={{ fontSize: "small", paddingTop: "0.5rem" }}>
                {" "}
                Rating : {book.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
