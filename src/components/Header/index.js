import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header__container}>
            <img src="/logo.png" alt="Logo da CodeChella" />
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