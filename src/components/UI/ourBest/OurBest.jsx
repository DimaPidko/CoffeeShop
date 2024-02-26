import styles from './OurBest.module.sass';

const OurBest = () => {
	return (
		<section className={styles.best}>
			<h2>Our Best</h2>
			<div className={styles.best__wrapper}>
				<div className={styles.best__wrapper_item}>
					<img src="/icons/BestCoffe1.png" alt="BestCoffee1" />
					<h2>Solimo Coffee Beans 2 kg</h2>
					<h3>10.73$</h3>
				</div>
				<div className={styles.best__wrapper_item}>
					<img src="/icons/BestCoffe2.png" alt="estCoffee2" />
					<h2>Presto Coffee Beans 1 kg</h2>
					<h3>15.99$</h3>
				</div>
				<div className={styles.best__wrapper_item}>
					<img src="/icons/BestCoffe3.png" alt="estCoffee3" />
					<h2>AROMISTICO Coffee 1 kg</h2>
					<h3>6.99$</h3>
				</div>
			</div>
		</section>
	);
};

export default OurBest;
