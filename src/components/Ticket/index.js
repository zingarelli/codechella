import styles from './Ticket.module.css';
import logoSummer from 'assets/logo/logo-gray.png';
import logoBoreal from 'assets/logo/logo-white.png';
import miniLogo from './assets/mini-logo.png';
import qrCode from './assets/qr-code.png';
import { useContext } from 'react';
import { ThemeContext } from 'context/Theme';

export default function Ticket({ ticket }) {
    const { theme } = useContext(ThemeContext);
    const logo = theme === 'summer' ? logoSummer : logoBoreal;

    return (
        <section className={styles.ticket__container}>
            <div className={styles.ticket__header}>
                <img src={logo} alt="Logo do Evento" className={styles.ticket__img} />
                <img src={miniLogo} alt="Ícone do logo do evento" className={styles.ticket__img} />
            </div>
            <div className={styles.ticket__content}>
                <img src={qrCode} alt="QR Code do ingresso" className={styles.ticket__qr} />
                <div className={styles.ticket__info}>
                    <h2 className={styles.ticket__name}>{ticket.name}</h2>
                    <p>Ingresso Cortesia</p>
                    <p>{ticket.sector}</p>
                    <p>Data: {ticket.days.join(', ')}</p>
                    <p>Local: São Paulo/SP</p>                   
                </div>
            </div>
            {ticket.consentment && <p className={styles.ticket__warning}>Entrada permitida somente se acompanhado dos pais ou responsáveis legais</p>}
        </section>
    )
}