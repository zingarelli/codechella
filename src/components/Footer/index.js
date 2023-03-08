import styles from './Footer.module.css';
// TODO: is there a better way to import all this?
import logoSummer from 'assets/logo/logo-gray.png';
import logoBoreal from 'assets/logo/logo-white.png';
import instagramSummer from './assets/socials/instagram-gray.png';
import twitchSummer from './assets/socials/twitch-gray.png';
import twitterSummer from './assets/socials/twitter-gray.png';
import whatsappSummer from './assets/socials/whatsapp-gray.png';
import instagramBoreal from './assets/socials/instagram-white.png';
import twitchBoreal from './assets/socials/twitch-white.png';
import twitterBoreal from './assets/socials/twitter-white.png';
import whatsappBoreal from './assets/socials/whatsapp-white.png';
import { useContext } from 'react';
import { ThemeContext } from 'context/Theme';

export default function Footer() {
    const { theme, setTheme } = useContext(ThemeContext);

    // import assets
    const logo = theme === 'summer' ? logoSummer : logoBoreal;
    const instagram = theme === 'summer' ? instagramSummer : instagramBoreal;
    const twitch = theme === 'summer' ? twitchSummer : twitchBoreal;
    const twitter = theme === 'summer' ? twitterSummer : twitterBoreal;
    const whatsapp = theme === 'summer' ? whatsappSummer : whatsappBoreal;

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    return (
        <footer className={styles.footer__container} >
            <img className={styles.footer__logo} src={logo} alt="Logo do Festival CodeChella" />
            <div className={styles.footer__links}>
                <p>Acesse nossas redes:</p>
                <nav>
                    <ul className={styles.footer__socials}>
                        <li><a href="https://www.whatsapp.com" target='_blank' rel="noopener noreferrer"><img src={whatsapp} alt="Link para o WhatsApp do festival" /></a></li>
                        <li><a href="https://www.twitch.tv" target='_blank' rel="noopener noreferrer"><img src={twitch} alt="Link para o canal do festival na Twitch" /></a></li>
                        <li><a href="https://www.instagram.com" target='_blank' rel="noopener noreferrer"><img src={instagram} alt="Link para o Instagram do festival" /></a></li>
                        <li><a href="https://twitter.com" target='_blank' rel="noopener noreferrer"><img src={twitter} alt="Link para o Twitter do festival" /></a></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.footer__copyright}>
                <p>Desenvolvido por Alura.</p>
                <p>Projeto fictício sem fins comerciais.</p>
            </div>
            <div className={styles.theme__container}>
                <p>Alterar tema:</p>
                <span onClick={() => changeTheme('summer')} className={styles.theme__summer}>Summer</span>
                <span onClick={() => changeTheme('boreal')} className={styles.theme__boreal}>Boreal</span>
            </div>
        </footer>
    )
}