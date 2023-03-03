import styles from './NotFound.module.css';

export default function NotFound() {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Ops! Essa página não existe!</h1>
            <p className={styles.text}>Mas não fique triste. Temos uma foto de gatinho para você!</p>
            <img src="https://cataas.com/cat" alt="foto aleatória de um gatinho" className={styles.image} />
        </main>
    )
}