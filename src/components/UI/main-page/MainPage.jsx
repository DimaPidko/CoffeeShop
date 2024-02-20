import styles from './MainPage.module.sass';

const MainPage = () => {
 return (
    <header className={styles.header}>
        <nav className={styles.navigation}>
            <a href="#"><img src="/coffee-beans.png" alt="coffee-beans" /></a>
            <ul className={styles.list}>
                <li className={styles.list__item}><a href="#">Coffee house</a></li>
                <li className={styles.list__item}><a href="#">For your pleasure</a></li>
                <li className={styles.list__item}><a href="#">Our coffee</a></li>
            </ul>
        </nav>
        <div className={styles.container}>
            <h1>Everything You Love About Coffee</h1>
            <div className={styles.divider}><hr /><img src="/Vector.png" alt="Vector" /><hr /></div>
            <h2>We makes every day full of energy and taste</h2>
            <h2>Want to try our beans?</h2>
            <a href="#">More</a>
        </div>
    </header>
 )
};

export default MainPage;