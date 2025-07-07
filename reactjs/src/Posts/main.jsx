import React from 'react';
import ShowPosts from './ShowPosts';
import styles from './main.module.css';

function Posts() {
  return (
    <div className={styles.postWrap}>
      <ShowPosts />
    </div>
  );
}

export default Posts;
