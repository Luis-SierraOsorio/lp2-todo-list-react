import styles from './ListItem.module.css'

export default function ListItem({ item }) {
    return (
        <>
            <p>{item.id}</p>
            <p className={styles.message}>{item.message}</p>
        </>
    )
}