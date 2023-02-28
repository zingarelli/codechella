import styles from './Header.module.css';
import logo from './logo.png';

export default function Header() {
    return (
        <header className={styles.header__container}>
            <img src={logo} alt="Logo do Festival CodeChella" />
            <div className={styles.menu__container}>
                <input type="checkbox" id="toggle" className={styles.menu__checkbox} />
                <label htmlFor="toggle" className={styles.menu__icon}>
                    <div className={styles.icon__trace}></div>
                    <div className={styles.icon__trace}></div>
                    <div className={styles.icon__trace}></div>
                </label>
                <nav data-menu className={styles.menu__links}>
                    <ul>
                        <li><a href="/">A experiência</a></li>
                        <li><a href="/">Mapa de Setores</a></li>
                        <li><a href="/">Informações</a></li>
                        <li><a href="/">Ingresso</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}