import ListItem from "./list-item/ListItem"
import Button from "../button/Button"
import { useState } from "react"

export default function ListContainer({ items, setItems }) {


    return (
        <ul>
            {/* mapping through each item and returning an item list component */}
            {items.map(item => {
                return <li key={item.id}>
                    <ListItem item={item} setItems={setItems}></ListItem>
                </li>
            })}
        </ul>
    )
}