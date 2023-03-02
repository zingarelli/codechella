import styles from './Article.module.css';

/**
 * A component that renders an article contaning an image, a title and some other content (like texts).
 * @param {string} image - URL for an image 
 * @param {string} alt - alt text for the image
 * @param {string} title - Title of the article
 * @param {string} imagePosition - Where should the image be positioned relative to the text (top, right or left). Default is left. It's always on top for smaller screens. Bottom is not implemented.
 * @param {boolean} highlight - A highlighted article will have different styles for its text content. Default is false.
 */
export default function Article({ image, alt, title, imagePosition = 'left', highlight = false, children }) {
    // highlighted articles have a different style
    const highlightContent = highlight ? 'article__content--highlight' : ''
    const highlightHeader = highlight ? 'article__header--highlight' : ''

    // change display order of image and text content (for bigger screens)
    const displayOrder = `article__container--${imagePosition}`;

    return (
        <article className={`${styles.article__container} ${styles[displayOrder]}`}>
            <img src={image} alt={alt} className={styles.article__image} />
            <div className={`${styles.article__content} ${styles[highlightContent]}`}>
                <h2 className={`${styles.article__header} ${styles[highlightHeader]}`}>{title}</h2>
                <div className={styles.article__text}>
                    {children}
                </div>
            </div>
        </article>
    )
}