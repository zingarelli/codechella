import banner from './assets/banner.png';
import styles from './ComprarIngresso.module.css';
import Banner from "components/Banner";
import Form from 'components/Form';

export default function ComprarIngresso() {
    return (
        <>
            <Banner image={banner} position='top' text='Garanta seu Ingresso' />
            <main className={styles.ticket__container}>
                <h2 className={styles.ticket__title}>Preencha o formulário a seguir:</h2>
                <Form />
            </main>
        </>
    )
}