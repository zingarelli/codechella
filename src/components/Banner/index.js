import { ThemeContext } from 'context/Theme';
import { useContext } from 'react';
import styles from './Banner.module.css';

/**
 * Renders an image in the background and a text (optional)
 * @param {string} image - URL for an image 
 * @param {string} position - how the image should be positioned (top, bottom, left, right, center). Default is center.
 * @param {text} text - Optional text to be displayed in the middle. When added, opacity is applied to the background
 */
export default function Banner({ image, position='center', text=''}) {
    const { theme } = useContext(ThemeContext);

    const backgroundImage = {
        background: `url(${image}) no-repeat ${position}/cover`
    }

    // when there's a text, add opacity to the background image, based on the theme
    const addOpacity = 
        text === '' 
        ? '' 
        : theme === 'summer' 
            ? `${styles.opacity__summer}` 
            : `${styles.opacity__boreal}`;
    
    return (
        <div 
            style={backgroundImage}
            className={`${styles.banner__container} ${addOpacity}`} 
        >
            {text && <h1 className={styles.banner__text}>{text}</h1>}
        </div>
    )
}