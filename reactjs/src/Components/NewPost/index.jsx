import React, { useState } from 'react';
import styles from './index.module.css';

function NewPost() {
  const [inputState, setInputState] = useState('');

  const inputChange = (e) => {
    const val = e.target.value;
    setInputState(val);
  };

  return (
    <div className={styles.panel}>
      <h3>Enter the details here</h3>

      <p>Title</p>
      <input
        className={styles.textArea}
        onChange={(e) => {
          inputChange(e);
        }}
      />
      <p>{inputState}</p>

      <p>Description</p>
      <textarea className={styles.textArea}></textarea>

      <button>Save</button>
    </div>
  );
}

export default NewPost;
