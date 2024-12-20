import styles from './TheGameTable.module.css'
import CardSkirt from '../../assets/card-shirt.jpg'
import Cardinit1 from '../../assets/int1.jpg'

export const TheGameTable = () => {
	return (
		<>
			<div className={styles.game__table}>
				<div className={styles['game__table-top']}>
					<div className={styles.active__items__wrapper}></div>
					<div className={styles.info__wrapper}>
						<div className={styles['int__deck-reset']}>
							<img
								src={CardSkirt}
								className={styles['deck__wrapper-shirt']}
								alt=""
							/>
						</div>
						<div className={styles['int__deck-main']}>
							<img
								src={CardSkirt}
								className={styles['deck__wrapper-shirt']}
								alt=""
							/>
						</div>

						<div className={styles['int__deck-main']}>
							<img
								src={CardSkirt}
								className={styles['deck__wrapper-shirt']}
								alt=""
							/>
						</div>
						<div className={styles['int__deck-main']}>
							<img
								src={CardSkirt}
								className={styles['deck__wrapper-shirt']}
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className={styles['game__table-bot']}>
					<div className={styles.deck__hand}>
						<div className={styles['card-block']}>
							<img className={styles['card-img']} src={Cardinit1} alt="" />
						</div>
						<div className={styles['card-block']}>
							<img className={styles['card-img']} src={Cardinit1} alt="" />
						</div>
						<div className={styles['card-block']}>
							<img className={styles['card-img']} src={Cardinit1} alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
