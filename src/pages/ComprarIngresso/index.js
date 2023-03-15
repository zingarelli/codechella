import banner from './assets/banner.png';
import styles from './ComprarIngresso.module.css';
import Banner from "components/Banner";
import Form from 'components/Form';
import { Navigate, useNavigate } from 'react-router-dom';

export default function ComprarIngresso() {
    const navigate = useNavigate();

    /*
        Check if information was previously saved.
        If so, the user will be redirected to view the ticket.
    */
    const ticketInfo = localStorage.getItem('ticket');

    const purchaseTicket = (e, ticket) => {
        e.preventDefault();
        localStorage.setItem('ticket', JSON.stringify(ticket));
        navigate('/ingresso/ver');
    }
    
    return (
        <>
            {ticketInfo && (
                <Navigate to='/ingresso/ver' />
            )}
            <Banner image={banner} position='top' text='Garanta seu Ingresso' />
            <main className={styles.ticket__container}>
                <h2 className={styles.ticket__title}>Preencha o formulário a seguir:</h2>
                <Form onSubmit={purchaseTicket} />
            </main>
        </>
    )
}