import styles from './LineUpWrapper.module.css';

// wraps a set of LineUpContent
export default function LineUpWrapper({ title, children }) {
    return (
        <section>
            <h3 className={styles.wrapper__title}>{title}</h3>
            {children}
        </section>
    )
}