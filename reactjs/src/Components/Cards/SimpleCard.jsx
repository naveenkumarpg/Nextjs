import styles from './css/SimpleCard.module.css';

function SimpleCard({ title, description }) {
  return (
    <div className={styles.simpleCard}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default SimpleCard;
