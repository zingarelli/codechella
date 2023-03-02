/*
    Not using CSS module because this component will be used as a template 
    for others components that might change the styles for its inner elements
*/
import './Article.css';

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
        <article className={`article__container ${displayOrder}`}>
            <img src={image} alt={alt} className='article__image' />
            <div className={`article__content ${highlightContent}`}>
                <h2 className={`article__header ${highlightHeader}`}>{title}</h2>
                <div className='article__text'>
                    {children}
                </div>
            </div>
        </article>
    )
}