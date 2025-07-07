import React from 'react';
import styles from './index.module.css';

function Card(props) {
  const cardData = props.data;

  return (
    <div className={styles.card} id={cardData.id}>
      <h3>{cardData.title}</h3>
      <p>{cardData.body}</p>
    </div>
  );
}

export default Card;
