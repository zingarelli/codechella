import styles from './Header.module.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
    // close menu that is displayed in mobile layout
    const closeMenu = () => {
        document.querySelector('#toggle').checked = false;
    }
    
    return (
        <header className={styles.header__container}>
            <Link to='/' onClick={closeMenu}>
                <img src={logo} alt="Logo do Festival CodeChella" />
            </Link>
            <div className={styles.menu__container}>
                <input type="checkbox" id="toggle" className={styles.menu__checkbox} />
                <label htmlFor="toggle" className={styles.menu__icon}>
                    <div className={styles.icon__trace}></div>
                    <div className={styles.icon__trace}></div>
                    <div className={styles.icon__trace}></div>
                </label>
                <nav data-menu className={styles.menu__links}>
                    <ul>
                        <li><Link to='experiencia' onClick={closeMenu}>A experiência</Link></li>
                        <li><Link to='mapa' onClick={closeMenu}>Mapa de Setores</Link></li>
                        <li><Link to='/' onClick={closeMenu}>Informações</Link></li>
                        <li><Link to='/' onClick={closeMenu}>Ingresso</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}