import styles from './Form.module.css';
import arrowIcon from './assets/arrow-right.png';
import Button from 'components/Button';

export default function Form({ onSubmit }) {
    return (
        <form className={styles.form__container} onSubmit={onSubmit} >
            <div className={styles.form__field}>
                <label htmlFor="nome" className={styles.form__label}>Nome Completo:</label>
                <input required id="nome" name="nome" className={styles.form__input} />
            </div>
            <div className={styles.form__field}>
                <label htmlFor="email" className={styles.form__label}>Email:</label>
                <input required id="email" name="email" type='email' className={styles.form__input} />
            </div>
            <div className={styles.form__field}>
                <label htmlFor="tipo" className={styles.form__label}>Tipo de ingresso:</label>
                <select required name="tipo" id="tipo" className={styles.form__input}>
                    <option value="">Tipo de ingresso</option>
                    <option value="premium">Pista Premium</option>
                    <option value="commom">Pista Comum</option>
                    <option value="floor">Cadeiras Térreo</option>
                    <option value="top">Cadeiras Superiores</option>
                </select>
            </div>
            <div className={styles.form__field}>
                <label htmlFor="nascimento" className={styles.form__label}>Data de nascimento:</label>
                <input required id="nascimento" name="nascimento" type='date' className={styles.form__input} />
            </div>
            <div className={styles.form__button}>
                <Button image={arrowIcon}>Avançar!</Button>
            </div>
        </form>
    )
}