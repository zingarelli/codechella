import Banner from 'components/Banner';
import Ticket from 'components/Ticket';
import banner from './assets/banner.png';
import styles from './VerIngresso.module.css';

export default function VerIngresso() {
    return (
        <>
            <Banner image={banner} text="Seu ingresso está aqui!" />
            <main className={styles.container}>
                <div className={styles.ticket}>
                    <div className={styles.message}>
                        <p>Uhul, agora sim!</p>
                        <p>Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</p>
                    </div>
                    <Ticket />
                </div>
            </main>
        </>
    )
}