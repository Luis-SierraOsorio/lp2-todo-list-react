import styles from './Input.module.css'

export default function Input(){
    return (
        <div className={styles.container}>
            <input className={styles.inputTextBox} type="text" placeholder='Add an item' />
            <button className={styles['add-button']}>Add</button>
        </div>
    )
}