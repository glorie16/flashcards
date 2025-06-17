import React, { useState } from 'react';
import './App.css';
import Flashcard from './components/Flashcard';

const App = () => {
  const flashcards = [
    { word: "Salamat", translation: "Thank you" },
    { word: "Magandang umaga", translation: "Good morning" },
    { word: "Kain", translation: "To eat" },
    { word: "Magandang gabi", translation: "Good evening" },
    { word: "Paalam", translation: "Goodbye" },
    { word: "Oo", translation: "Yes" },
    { word: "Hindi", translation: "No" },
    { word: "Sige", translation: "Okay" },
    { word: "Kamusta?", translation: "How are you?" },
    { word: "Bukas", translation: "Tomorrow" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const card = flashcards[currentIndex];


  const goNext = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * flashcards.length);
    } while (newIndex === currentIndex);
  setCurrentIndex(newIndex);
};

  return (
    <div className="App">
      <h1>Tagalog Flash Cards</h1>
      <h3>Learn some common Tagalog words and phrases used in conversation!</h3>

    <div className="flashcard">
      <Flashcard word={card.word} translation={card.translation} />
      </div>

       < button onClick = { goNext } className = "nav-button" >Next</button>
         </div>
  )
  
}

export default App;