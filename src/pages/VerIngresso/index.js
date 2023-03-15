import Banner from 'components/Banner';
import Ticket from 'components/Ticket';
import { Link } from 'react-router-dom';
import banner from './assets/banner.png';
import styles from './VerIngresso.module.css';

export default function VerIngresso() {
    const ticketInfo = JSON.parse(localStorage.getItem('ticket'));

    const deleteTicket = () => {
        localStorage.removeItem('ticket');
    }

    return (
        <>
            {ticketInfo
                ?
                    <>
                        <Banner image={banner} text="Seu ingresso está aqui!" />
                        <main className={styles.container}>
                            <div className={styles.ticket}>
                                <div className={styles.header}>
                                    <p>Uhul, agora sim!</p>
                                    <p>Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</p>
                                </div>
                                <Ticket ticket={ticketInfo} />
                                <p className={styles.message}>Não é você? <Link to='/ingresso/comprar' onClick={deleteTicket}>Clique aqui</Link> para comprar um novo ingresso.</p>
                            </div>
                        </main>
                    </>
                : 
                    <main>
                        <div className={styles.error}>
                            <p>Ops!</p>
                            <p>Por favor, preencha o <Link to='/ingresso/comprar'>formulário</Link> para poder visualizar seu ingresso.</p>
                        </div>
                    </main>
            }
        </>
    )
}