import styles from './Button.module.css';

export default function Button({ image, children }) {
    return (
        <button className={styles.button__container}>
            {children}
            {image && <img src={image} alt="imagem decorativa do botão" />}
        </button>
    )
}