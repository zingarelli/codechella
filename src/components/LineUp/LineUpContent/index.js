import styles from './LineUpContent.module.css';

/**
 * Renders a section with the date of a show and a set of LineUpLayers 
 * with the bands that will perform in that date.
 * @param {string} title - String with the date of a show
 */
export default function LineUpContent({ title, children }) {
    return (
        <section className={styles.item__container}>
            <div className={styles.item__title}>
                <h4 className={styles.title__content}>{title}</h4>
            </div>
            <div className={styles.item__content}>
                {children}
            </div>
        </section>
    )
}