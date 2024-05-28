import styles from './ListItem.module.css'
import Button from '../../button/Button'
import { useState } from 'react'

export default function ListItem({ item, setItems }) {
    const [isEditting, setIsEditting] = useState(false)
    const [input, setInput] = useState(item.message)

    function handleDelete() {
        setItems(prev => prev.filter(
            i => item.id !== i.id
        ))
    }

    function handleEdit() {
        if (isEditting) {

            setItems(items => items.map(i => {
                if (i.id === item.id) {
                    return {
                        ...i,
                        message: input
                    }
                }
                else {
                    return i
                }
            }))
        }
        setIsEditting(prev => !prev)
    }

    return (
        <>
            {/* <p>{item.id}</p> */}
            {!isEditting ? <p className={styles.message}>{item.message}</p> :
                <input value={input} onChange={e => setInput(e.target.value)} />}
            <div>
                <Button>complete</Button>
                <Button fn={handleEdit}> {isEditting ? 'Save' : 'Edit'} </Button>
                <Button fn={handleDelete}>del</Button>
            </div>
        </>
    )
}