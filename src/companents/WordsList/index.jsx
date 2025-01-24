import React from 'react';
import './style.css';
export default function WordList({ words }) {
  return (
    <div>
      <h2>Saved Words</h2>
      {words.length === 0 ? (
        <p>No words added yet</p>
      ) : (
        words.map((item, index) => (
          <table key={index}>
                <tbody>
                    <tr>
                        <td> {item.word}</td> 
                          -  
                        <td> {item.translation}</td>
                    </tr>
                </tbody>
          </table>
        ))
      )}
    </div>
  );
}
