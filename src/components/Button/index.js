import styles from './Button.module.css';
import { forwardRef } from 'react';

// using forwardRef so other components can manipulate the created button
const Button = forwardRef(({ image, children }, ref) => {
    return (
        <button className={styles.button__container} ref={ref}>
            {children}
            {image && <img src={image} alt="imagem decorativa do botão" />}
        </button>
    )
});

export default Button;