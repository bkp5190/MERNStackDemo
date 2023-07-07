import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { deleteDeck } from './api/deleteDeck'
import { TDeck, getDecks } from './api/getDecks'
import { createDeck } from './api/createDeck'

function Deck() {
  const [cards, setCards] = useState<TDeck[]>([]);
  const [title, setText] = useState('');

  async function handleCreateCard(e: React.FormEvent) {
    e.preventDefault();
    // Optimistic Updating
    const card = await createCard(text);
    setCards([...cards, card]);
    setText("");
  }

//   async function handleDeleteDeck(deckId: string) {
//     await deleteDeck(deckId);
//     // Optimistic Updating
//     setDecks(decks.filter((deck) => deck._id !== deckId))
//   }

//   useEffect(() => {
//     async function fetchDecks() {
//       const newDecks = await getDecks();
//       setDecks(newDecks);
//     }
//     fetchDecks();
//   }, []);

  return <div className='App'>
    {/* <ul className="decks">
      {
        decks.map((deck) => (
          <li key={deck._id}>
            <button onClick={() => handleDeleteDeck(deck._id)}>X</button>
            <Link to={`/decks/:${deck._id}`}>{deck.title}</Link>
          </li>
        ))
      }
    </ul> */}
    <form onSubmit={handleCreateCard}>
      <label htmlFor='card-title'>Deck Title</label>
      <input 
        id='card-title'
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
      />
      <button>Create Deck</button>
    </form>
  </div>
}

export default Deck;