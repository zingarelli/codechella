import styles from './Header.module.css';
import logo from './logo.png';
import { Link, NavLink } from 'react-router-dom';

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
                        <li><NavLink to='experiencia' onClick={closeMenu} className={({ isActive}) => isActive ? `${styles.active}` : undefined} >A experiência</NavLink></li>
                        <li><NavLink to='mapa' onClick={closeMenu} className={({ isActive}) => isActive ? `${styles.active}` : undefined} >Mapa de Setores</NavLink></li>
                        <li><NavLink to='info' onClick={closeMenu} className={({ isActive}) => isActive ? `${styles.active}` : undefined} >Informações</NavLink></li>
                        <li><NavLink to='ingresso' onClick={closeMenu} className={({ isActive}) => isActive ? `${styles.active}` : undefined} >Ingresso</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}