import { Link } from 'react-router-dom';
import styles from './TipCard.module.css';

export default function TipCard({ _id, heading, imageURL, likedBy, tipType, description }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={imageURL} alt={heading} />
        </div>
        <div className={styles.details}>
          <div className={styles.title}>
            <h1>{heading}</h1>
            <h3 className={styles.tipType}>{tipType}</h3>
          </div>
          <div className={styles.borderBottom}></div>
          <p className={styles.description}>{description}</p>
          <div className={styles.buttonLink}>
            <Link to={`/tips/${_id}/details`}>Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
