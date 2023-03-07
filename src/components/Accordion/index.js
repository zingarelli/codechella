import styles from './Accordion.module.css';

/**
 * Display an accordion (a collapsible content), with a title and a text content. 
 * When the user clicks on the title, the content is displayed. 
 * It can be used, for example, in a FAQ section.
 * @param {string} title - Title for the content
 */
export default function Accordion({ title, children }) {
    const open = 'close';
    
    const toggleAccordion = (e) => {
        const isOpen = e.target.parentNode.dataset.open;
        if (isOpen === 'open') {
            e.target.parentNode.style.paddingBottom = '8px';
            e.target.parentNode.dataset.open = 'close';
        }
        else {
            e.target.parentNode.style.paddingBottom = '24px';
            e.target.parentNode.dataset.open = 'open';
        }
    }
    
    return (
        <div className={`${styles.accordion__container}`} data-open={open}>
            <button className={styles.accordion__title} onClick={toggleAccordion}>{title}</button>
            <div className={styles.accordion__content}>
                {children}
            </div>
        </div>
    )
}