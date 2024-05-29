import Input from "./components/input/Input"
import ListContainer from "./components/list-container/ListContainer"
import styles from "./App.module.css"
import { useState } from "react"

function App() {
  const [items, setItems] = useState([
    // { id: 0, message: "First Todo", completed: false },
    // { id: 2, message: "Second Todo", completed: true },
    // { id: 12, message: "Second Todo", completed: true }
  ])
  return (
    <main className={styles.container}>
      {/* component with input and add button */}
      <Input setItems={setItems}></Input>
      {/* component container for all list items */}
      <ListContainer items={items} setItems={setItems}></ListContainer>
    </main>
  )
}

export default App
