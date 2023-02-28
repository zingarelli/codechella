import styles from './Banner.module.css';

export default function Banner({ image, text=''}) {
    const backgroundImage = {
        background: `url(${image}) no-repeat center/cover`
    }

    // when there's a text, add opacity to the background image
    const addOpacity = text === '' ? '' : `${styles.banner__opacity}`;
    
    return (
        <div 
            style={backgroundImage}
            className={`${styles.banner__container} ${addOpacity}`} 
        >
            {text && <h1 className={styles.banner__text}>{text}</h1>}
        </div>
    )
}