import styles from './Button.module.css'


export default function Button({ text, fn, children, backgroundColor }) {
    return (<button className={`${styles.btn} ${styles[backgroundColor]}`} onClick={fn}>{children}
    </button>)
}