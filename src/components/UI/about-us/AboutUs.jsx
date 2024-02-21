import styles from './AboutUs.module.sass';

const AboutUs = () => {
    return (
        <main className={styles.wrapper}>
            <h2 className={styles.title}>About Us</h2>
            <div className={styles.divider}><hr /><img src="/Vector.png" alt="Vector" /><hr /></div>
            <div className={styles.paragraphs}>
                <p>
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                </p>
                <p>
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                </p>
            </div>
        </main>
    );
};

export default AboutUs;