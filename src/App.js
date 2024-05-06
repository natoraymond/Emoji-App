import React, {useState} from 'react';
import EmojiPicker, { Emoji } from 'emoji-picker-react';
import './App.css';

function App () {
  
  const [selectedEmoji, setSelectedEmoji] = useState('');

  function onClick(emojiData) {
      setSelectedEmoji(emojiData.unified);
  }
  return (
   
    <div className='header-content'>
        <h2>Emoji picker React App</h2>
        <p>Kindly select the emoji icons you want to choose</p>
        <div className='emoji-text'>
            {selectedEmoji ? <Emoji unified={selectedEmoji} size={52}/> : null}
        </div>

        <EmojiPicker onEmojiClick={onClick} />
    </div>
  );
};

export default App;
