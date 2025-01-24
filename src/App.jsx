import './App.css'
import { useState } from 'react'
import InpForm from './companents/InpForm'
import WordList from './companents/WordsList'

function App() {
  const [wordsArray, setWordsArray] = useState([]);
  const addWord = (word, translation) => {
    setWordsArray((prevWords) => [...prevWords, { word, translation }]);
  };
  return (
    <div className="App">
      <InpForm addWord={addWord} />
      <WordList words={wordsArray} />
    </div>
  )
}

export default App
