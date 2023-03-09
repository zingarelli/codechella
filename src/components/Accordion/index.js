import styles from './Accordion.module.css';

/**
 * Display an accordion (a collapsible content), with a title and a text content. 
 * When the user clicks on the title, the content is displayed. 
 * It can be used, for example, in a FAQ section.
 * @param {string} title - Title for the content
 */
export default function Accordion({ title, children }) {
    // show/hide content
    // credits: https://www.w3schools.com/howto/howto_js_accordion.asp
    const toggleAccordion = (e) => {
        const divContainer = e.target.parentNode;
        const divContent = e.target.nextElementSibling;

        // if it has an inline style for height, content is already being displayed
        if (divContent.style.height) {
            divContent.style.height = null;
            divContainer.style.marginBottom = '8px';
        }
        else {
            // show content
            divContent.style.height = `${divContent.scrollHeight}px`;
            divContainer.style.marginBottom = '24px';
        }
    }

    return (
        <div className={`${styles.accordion__container}`} >
            <button className={styles.accordion__title} onClick={toggleAccordion}>{title}</button>
            <div className={styles.accordion__content}>
                <div className={styles.content__container}>
                    {children}
                </div>
            </div>
        </div>
    )
}