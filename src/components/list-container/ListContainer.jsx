import ListItem from "./list-item/ListItem"
import Button from "../button/Button"
import { useState } from "react"

export default function ListContainer({ items, setItems }) {


    return (
        <ul>
            {items.map(item => {
                return <li key={item.id}>
                    <ListItem item={item} setItems={setItems}></ListItem>
                </li>
            })}
        </ul>
    )
}