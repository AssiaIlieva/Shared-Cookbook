import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <p>
          Copyright (c) Shered Cookbook. All rights reserved.
          <a href="https://softuni.bg/trainings/4529/reactjs-june-2024">{`< www.softuni.bg >`}</a>
        </p>
        <p>This project is developed as part of the ReactJS course at SoftUni (June 2024).</p>
      </div>
    </div>
  );
}
