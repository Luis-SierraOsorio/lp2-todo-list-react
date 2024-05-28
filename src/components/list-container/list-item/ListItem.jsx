import styles from './ListItem.module.css'
import Button from '../../button/Button'

export default function ListItem({ item, setItems }) {
    function handleDelete() {
        setItems(prev => prev.filter(
            i => item.id !== i.id
        ))
    }

    return (
        <>
            <p>{item.id}</p>
            <p className={styles.message}>{item.message}</p>
            <div>
                <Button text={'complete'}></Button>
                <Button text={'edit'}></Button>
                <Button text={'del'} fn={handleDelete}></Button>
            </div>
        </>
    )
}