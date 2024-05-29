import styles from './ListItem.module.css'
import Button from '../../button/Button'
import { useState } from 'react'

export default function ListItem({ item, setItems }) {

    // state to keep track if the user wants to edit their task
    const [isEditting, setIsEditting] = useState(false)

    // state to keep track of input when user decides to edit
    const [input, setInput] = useState(item.message)

    // function to handle the deletion of a task
    function handleDelete() {
        // filtering through items to exclude the item with matching id
        setItems(prev => prev.filter(
            i => item.id !== i.id
        ))
    }

    // function to swap state of isEditting
    function handleEdit() {
        setIsEditting(prev => !prev)
    }

    // function to handle the saving of editted item, using map.
    function handleSave() {

        if (input !== "") {

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
        } else {
            setInput(item.message);
        }

        handleEdit()
    }

    // function handling the cancelation of edit
    function handleCancel() {
        setInput(item.message)
        handleEdit();
    }



    return (
        <main className={styles.container}>
            {/* <p>{item.id}</p> */}
            {!isEditting ? <p className={styles.message}>{item.message}</p> :
                <input className={styles.input} value={input} onChange={e => setInput(e.target.value)} />}
            <div className={styles['button-container']}>
                {/* save button */}
                {/* {!isEditting && <Button backgroundColor={'success'}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="10" viewBox="0 0 50 50">
                    <path d="M 42.875 8.625 C 42.84375 8.632813 42.8125 8.644531 42.78125 8.65625 C 42.519531 8.722656 42.292969 8.890625 42.15625 9.125 L 21.71875 40.8125 L 7.65625 28.125 C 7.410156 27.8125 7 27.675781 6.613281 27.777344 C 6.226563 27.878906 5.941406 28.203125 5.882813 28.597656 C 5.824219 28.992188 6.003906 29.382813 6.34375 29.59375 L 21.25 43.09375 C 21.46875 43.285156 21.761719 43.371094 22.050781 43.328125 C 22.339844 43.285156 22.59375 43.121094 22.75 42.875 L 43.84375 10.1875 C 44.074219 9.859375 44.085938 9.425781 43.875 9.085938 C 43.664063 8.746094 43.269531 8.566406 42.875 8.625 Z"></path>
                </svg></Button>} */}
                {/* edit/save button */}
                <Button backgroundColor={isEditting ? 'success' : 'warning'} fn={isEditting ? handleSave : handleEdit}> {isEditting ? <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="10" viewBox="0 0 48 48">
                    <path d="M 15 3 C 12.250484 3 10 5.2504839 10 8 L 10 45 A 1.0001 1.0001 0 0 0 11.609375 45.792969 L 25.904297 34.796875 A 1.0006638 1.0006638 0 1 0 24.683594 33.210938 L 12 42.96875 L 12 8 C 12 6.3315161 13.331516 5 15 5 L 33 5 C 34.668484 5 36 6.3315161 36 8 L 36 42.96875 L 27.681641 36.570312 A 1.0001 1.0001 0 1 0 26.462891 38.15625 L 36.390625 45.792969 A 1.0001 1.0001 0 0 0 38 45 L 38 8 C 38 5.2504839 35.749516 3 33 3 L 15 3 z"></path>
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="10" viewBox="0 0 50 50">
                    <path d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z"></path>
                </svg>}
                </Button>
                {/* cancel/delete button */}
                <Button backgroundColor={'danger'} fn={isEditting ? handleCancel : handleDelete}>
                    {isEditting ? <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="10" viewBox="0 0 50 50">
                        <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"></path>
                    </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="10" viewBox="0 0 30 30">
                            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                        </svg>
                    }
                </Button>
            </div>
        </main>
    )
}