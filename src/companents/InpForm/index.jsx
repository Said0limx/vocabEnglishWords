import React from 'react'
import { useState } from 'react'
import './style.css'

export default function InpForm({ addWord }) {
  const [word, setWord] = useState('')
  const [translation, setTranslation] = useState('')
  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (translation.length === 0 || word.length === 0) {
      setError(true);
      setErrorText('Please fill in all fields');
    } else {
      setError(false);
      addWord(word, translation); 
      setTranslation('');
      setWord('');
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}> 
      <input
        className="input"
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Write word"
      />
      <input
        className="input"
        type="text"
        value={translation}
        onChange={(e) => setTranslation(e.target.value)}
        placeholder="Write translation"
      />
      <br />
      {error && <p className="error">{errorText}</p>}
      <button type="submit" className="button">
        Save
      </button>
    </form>
    </div>
  )
}





