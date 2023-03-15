import styles from './Form.module.css';
import arrowIcon from './assets/arrow-right.png';
import Button from 'components/Button';
import { useEffect, useRef, useState } from 'react';

export default function Form({ onSubmit }) {
    // ticket information (name, age, email, sector, days of event, consentment)
    const [ticket, setTicket] = useState({});

    // variables for age validation
    const [ageStatus, setAgeStatus] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const buttonRef = useRef(null);

    // variable for validation of days of event selected
    const [noDaysSelected, setNoDaysSelected] = useState(true);

    // enable/disable submit button (disabled if user is under 10yo)
    useEffect(() => {
        buttonRef.current.disabled = buttonDisabled;
    }, [buttonDisabled])

    // update/add a new item to the ticket object
    const updateTicket = (item) => {
        setTicket(oldState => ({ ...oldState, ...item }));
    }

    const getAge = (birthdate) => {
        const today = new Date();

        // getting UTC date from input to convert it to the user's local timezone
        const age = today.getFullYear() - birthdate.getUTCFullYear();
        const month = today.getMonth() - birthdate.getUTCMonth();
        const day = today.getDate() - birthdate.getUTCDate();

        // check if there are still a few days or months left for the user's birthday
        if (month < 0 || (month === 0 && day < 0)) {
            return (age - 1);
        }

        return age;
    }

    /*
        Rule: between ages 10 and 15, user needs to consent that will be accompanied
        with parents or guardians. Entry is forbidden for people under 10yo.
    */
    const validateAge = (e) => {
        const age = getAge(new Date(e.target.value));
        if (age < 10) {
            setAgeStatus('forbidden');
            setButtonDisabled(true);
            e.target.setCustomValidity('Pessoa menor de 10 anos');
        } else {
            setButtonDisabled(false);
            updateTicket({ age });
            e.target.setCustomValidity('');
            if (age >= 10 && age <= 15) {
                setAgeStatus('consentment');
                updateTicket({ consentment: true });
            } else {
                setAgeStatus(null);
            }
        }
    }

    // get the content of a selected option and update ticket 
    const setTicketSector = (e) => {
        const selected = e.target.options[e.target.selectedIndex].text;
        updateTicket({ sector: selected });
    }

    // get the selected days of event and update ticket 
    const setDaysOfEvent = (e) => {
        const daysSelected = Array.from(document.getElementsByName('dia'))
            .filter(select => select.checked === true)
            .map(item => item.value);

        updateTicket({ days: daysSelected });

        daysSelected.length === 0 ? setNoDaysSelected(true) : setNoDaysSelected(false);
    }

    // check if at least one day of event was selected
    const validateDaysOfEvent = () => {
        const checkbox = document.getElementById('primeiroDia');
        if (noDaysSelected) {
            checkbox.setCustomValidity('Você deve selecionar pelo menos um dia de evento');
        } else {
            checkbox.setCustomValidity('');
        }
    }

    /* 
        For now, only days of event is being validated. The other fields are being validated
        using the built-in HTML browser validation
    */
    const validateForm = () => {
        validateDaysOfEvent();
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
                    onChange={(e) => updateTicket({ name: e.target.value })}
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
                    onChange={(e) => updateTicket({ email: e.target.value })}
                />
            </div>

            <div className={styles.form__field}>
                <fieldset className={styles.form__fieldset}>
                    <legend className={styles.form__label}>Dias de evento</legend>
                    <p className={styles.form__info}>(Selecione pelo menos 1 dia)</p>
                    <div className={styles.form__days}>
                        <input
                            type="checkbox"
                            name="dia"
                            id="primeiroDia"
                            value='11/03/2023'
                            onChange={setDaysOfEvent}
                        />
                        <label htmlFor="primeiroDia">11/03/2023</label>
                    </div>
                    <div className={styles.form__days}>
                    <input
                        type="checkbox"
                        name="dia"
                        id="segundoDia"
                        value='12/03/2023'
                        onChange={setDaysOfEvent}
                    />
                    <label htmlFor="segundoDia">12/03/2023</label>
                    </div>
                </fieldset>
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
            {ageStatus === 'consentment' && <div className={styles.form__consentment}>
                <input required type="checkbox" name="consentimento" id="consentimento" />
                <label htmlFor="consentimento">Confirmo que estarei acompanhado de meus pais ou responsáveis legais.</label>
            </div>}

            <div className={styles.form__button} >
                <Button image={arrowIcon} ref={buttonRef} onClick={validateForm}>Avançar!</Button>
            </div>
        </form>
    )
}