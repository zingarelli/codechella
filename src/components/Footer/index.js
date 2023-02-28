import styles from './Footer.module.css';
import instagram from './instagram.png';
import twitch from './twitch.png';
import twitter from './twitter.png';
import whatsapp from './whatsapp.png';
import logo from './logo-gray.png'

export default function Footer() {
    return (
        <footer className={styles.footer__container} >
            <img className={styles.footer__logo} src={logo} alt="Logo do Festival CodeChella" />
            <div className={styles.footer__links}>
                <p>Acesse nossas redes:</p>
                <nav>
                    <ul className={styles.footer__socials}>
                        <li><a href="/"><img src={whatsapp} alt="Link para o WhatsApp do festival" /></a></li>
                        <li><a href="/"><img src={twitch} alt="Link para o canal do festival na Twitch" /></a></li>
                        <li><a href="/"><img src={instagram} alt="Link para o Instagram do festival" /></a></li>
                        <li><a href="/"><img src={twitter} alt="Link para o Twitter do festival" /></a></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.footer__copyright}>
                <p>Desenvolvido por Alura.</p>
                <p>Projeto fictício sem fins comerciais.</p>
            </div>
        </footer>
    )
}