import banner from './assets/banner.png';
import styles from './ComprarIngresso.module.css';
import Banner from "components/Banner";
import Form from 'components/Form';
import { useNavigate } from 'react-router-dom';

export default function ComprarIngresso() {
    const navigate = useNavigate();

    const purchaseTicket = (e, ticket) => {
        e.preventDefault();
        navigate('/ingresso/ver');
        localStorage.setItem('ticket', JSON.stringify(ticket));
    }
    
    return (
        <>
            <Banner image={banner} position='top' text='Garanta seu Ingresso' />
            <main className={styles.ticket__container}>
                <h2 className={styles.ticket__title}>Preencha o formulário a seguir:</h2>
                <Form onSubmit={purchaseTicket} />
            </main>
        </>
    )
}