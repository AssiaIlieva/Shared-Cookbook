import styles from './RecipeCard.module.css';

const RecipeCard = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <img src="https://noobcook.com/wp-content/uploads/2012/02/blackpeppersteak.jpg" alt="PepperSteak" className={styles.image} />
      </div>
      <div className="title">
        <h1 className="border-bottom">Pepper steak</h1>
      </div>
      <div className="border" />
      <div className="content">
        <p>
          In bibendum eros eget dolor gravida sed venenatis nisl sollicitudin.
          <br />
        </p>
        <div className="button-link">
          <a href="#">readmore</a>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
