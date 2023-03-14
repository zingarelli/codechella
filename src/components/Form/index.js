import styles from './Form.module.css';
import arrowIcon from './assets/arrow-right.png';
import Button from 'components/Button';
import { useEffect, useRef, useState } from 'react';

export default function Form({ onSubmit }) {
    const [ageStatus, setAgeStatus] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [ticket, setTicket] = useState({});
    const buttonRef = useRef(null); // reference to the button, so it can be disabled if needed

    useEffect(() => {
        buttonRef.current.disabled = buttonDisabled
    }, [buttonDisabled])

    const getAge = (birthdate) => {
        const today = new Date();
        // getting UTC date from input to convert user's local timezone
        const age = today.getFullYear() - birthdate.getUTCFullYear();
        const month = today.getMonth() - birthdate.getUTCMonth();
        const day = today.getDate() - birthdate.getUTCDate();

        // still a few days or months behind to birthday
        if (month < 0 || (month === 0 && day < 0)) {
            return (age - 1);
        }

        return age;
    }

    /*
        Between ages 10 and 15, needs to consent that will be accompanied with
        parents or guardians. Below age 10, entry is forbidden.
    */
    const validateAge = (e) => {
        const age = getAge(new Date(e.target.value));
        if (age < 10) {
            setAgeStatus('forbidden');
            setButtonDisabled(true);
            e.target.setCustomValidity('Pessoa menor de 10 anos');
        } else {
            if (age >= 10 && age <= 15) {
                setAgeStatus('consentment');
                setTicket(oldState => ({...oldState, consentment: true}));
            } else {
                setAgeStatus(null);
            }
            setButtonDisabled(false);
            setTicket(oldState => ({...oldState, age}));
            e.target.setCustomValidity('');
        }
    }

    // get the content of a selected option and update ticket 
    const setTicketSector = (e) => {
        const selected = e.target.options[e.target.selectedIndex].text;
        setTicket(oldState => ({...oldState, sector: selected}));
    }

    return (
        <form className={styles.form__container} onSubmit={(e) => onSubmit(e, ticket)} >
            <p className={styles.form__info}>Todos os campos são obrigatórios</p>
            <div className={styles.form__field}>
                <label htmlFor="nome" className={styles.form__label}>Nome Completo:</label>
                <input 
                    required 
                    minLength={5} 
                    id="nome" 
                    name="nome" 
                    className={styles.form__input} 
                    value={ticket.name || ''}
                    onChange={(e) => setTicket(oldState => ({...oldState, name: e.target.value}))}
                />
            </div>
            <div className={styles.form__field}>
                <label htmlFor="email" className={styles.form__label}>Email:</label>
                <input 
                    required 
                    id="email" 
                    name="email" 
                    type='email' 
                    className={styles.form__input} 
                    value={ticket.email || ''}
                    onChange={(e) => setTicket(oldState => ({...oldState, email: e.target.value}))}
                />
            </div>
            <div className={styles.form__field}>
                <label htmlFor="tipo" className={styles.form__label}>Tipo de ingresso:</label>
                <select 
                    required 
                    name="tipo" 
                    id="tipo" 
                    className={styles.form__input}
                    onChange={setTicketSector}
                >
                    <option value="">Tipo de ingresso</option>
                    <option value="premium">Pista Premium</option>
                    <option value="commom">Pista Comum</option>
                    <option value="floor">Cadeiras Térreo</option>
                    <option value="top">Cadeiras Superiores</option>
                    <option value="top">Rampas</option>
                </select>
            </div>
            <div className={styles.form__field}>
                <label htmlFor="nascimento" className={styles.form__label}>Data de nascimento:</label>
                <input
                    required 
                    id="nascimento"
                    name="nascimento" type='date'
                    className={styles.form__input}
                    onChange={validateAge}
                />
                {ageStatus === 'forbidden' && <p className={styles.form__forbidden}>A entrada é proibida para menores de 10 anos</p>}
            </div>
            {ageStatus === 'consentment' && <div className={styles.form__checkbox}>
                    <input required type="checkbox" name="consentimento" id="consentimento" />
                    <label htmlFor="consentimento">Confirmo que estarei acompanhado de meus pais ou responsáveis legais.</label>
                </div>}
            <div className={styles.form__button} >
                <Button image={arrowIcon} ref={buttonRef}>Avançar!</Button>
            </div>
        </form>
    )
}