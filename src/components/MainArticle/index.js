import styles from './MainArticle.module.css';

/**
 * A component that renders an article contaning an image, a title and some other content (like texts).
 * @param {string} image - URL for an image 
 * @param {string} alt - alt text for the image
 * @param {string} title - Title of the article
 */
export default function MainArticle({ image, alt, title, children }) {
    return (
        <article className={styles.article__container}>
            <img src={image} alt={alt} className={styles.article__image} />
            <h2 className={styles.article__header}>{title}</h2>
            <div className={styles.article__text}>
                {children}
            </div>
        </article>
    )
}