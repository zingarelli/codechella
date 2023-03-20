import { useEffect, useRef, useState } from 'react';
import styles from './Accordion.module.css';

/**
 * Display an accordion (a collapsible content), with a title and a text content. 
 * When the user clicks on the title, the content is displayed. 
 * It can be used, for example, in a FAQ section.
 * @param {string} title - Title for the content
 */
export default function Accordion({ title, children }) { 
    const [active, setActive] = useState(false);
    const accordionContent = useRef(null);
    const accordionContainer = useRef(null);
    const button = useRef(null);
    
    // show/hide content
    // credits: https://www.w3schools.com/howto/howto_js_accordion.asp
    useEffect(() => {      
        // if it has an inline style for height, content is already being displayed
        if (active) {
            // show content
            accordionContent.current.style.height = `${accordionContent.current.scrollHeight}px`;
            accordionContainer.current.style.marginBottom = '24px';
            // arrow is in a pseudo-element, needs to be styled inside the CSS file
            button.current.classList.add(`${styles.accordion__open}`);
        }
        else {
            accordionContent.current.style.height = null;
            accordionContainer.current.style.marginBottom = '8px';               
            button.current.classList.remove(`${styles.accordion__open}`);            
        }
    }, [active])

    // show/hide content
    const toggleAccordion = (e) => {
        setActive(!active);
    }

    return (
        <div className={`${styles.accordion__container}`} ref={accordionContainer}>
            <button className={styles.accordion__title} onClick={toggleAccordion} ref={button}>{title}</button>
            <div className={styles.accordion__content} ref={accordionContent}>
                {active && <div className={styles.content__container}>
                    {children}
                </div>}
            </div>
        </div>
    )
}