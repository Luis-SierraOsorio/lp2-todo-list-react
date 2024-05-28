import ListItem from "./list-item/ListItem"
import Button from "../button/Button"
import { useState } from "react"

export default function ListContainer({ items }) {


    return (
        <ul>
            {items.map(item => {
                return <li>
                    <ListItem item={item}></ListItem>
                    <div>
                        <Button text={'complete'}></Button>
                        <Button text={'edit'}></Button>
                        <Button text={'del'}></Button>
                    </div>
                </li>
            })}
        </ul>
    )
}