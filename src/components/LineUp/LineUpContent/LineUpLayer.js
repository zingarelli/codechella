import styles from './LineUpContent.module.css'

/**
 * Component to render band names. Content inside it have texts with different font sizes and weight.
 * The appropriate style is included based on the layer informed (l1, l2, l3 or l4).
 * @param {string} layer change font size and weight.
 */
export default function LineUpLayer({ layer, children }) {
    return (
        <div className={styles[layer]}>
            {children}
        </div>
    )
}