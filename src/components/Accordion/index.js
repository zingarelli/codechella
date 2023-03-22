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
    
    // show/hide content by changing content's height
    // credits: https://www.w3schools.com/howto/howto_js_accordion.asp
    useEffect(() => {
        accordionContent.current.style.height = active
            ? `${accordionContent.current.scrollHeight}px`
            : null;
    }, [active])

    // show/hide content
    const toggleAccordion = (e) => {        
        setActive(oldstate => !oldstate);
    }

    return (
        <div 
            className={`${styles.accordion__container}`}  
            style={{marginBottom: active? '24px' : '8px'}}
        >
            <button 
                className={`${styles.accordion__title} ${active? styles.accordion__open : ''}`} 
                onClick={toggleAccordion} 
            >
                {title}
            </button>
            <div 
                className={styles.accordion__content}
                ref={accordionContent}
            >
                {active && <div className={styles.content__container}>
                    {children}
                </div>}
            </div>
        </div>
    )
}