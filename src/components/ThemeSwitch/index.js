import { ThemeContext } from 'context/Theme';
import { useContext } from 'react';
import styles from './ThemeSwitch.module.css';

export default function ThemeSwitch() {
    const { setTheme } = useContext(ThemeContext);

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    return (
        <div className={styles.theme__container}>
            <p>Alterar tema:</p>
            <span onClick={() => changeTheme('summer')} className={styles.theme__summer}>Summer</span>
            <span onClick={() => changeTheme('boreal')} className={styles.theme__boreal}>Boreal</span>
        </div>
    )
}

