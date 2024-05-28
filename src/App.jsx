import Input from "./components/input/Input"
import ListContainer from "./components/list-container/ListContainer"
import { useState } from "react"

function App() {
  const [items, setItems] = useState([
    { id: 0, message: "First Todo", completed: false },
    { id: 2, message: "Second Todo", completed: true },
    { id: 12, message: "Second Todo", completed: true }])
  return (
    <>
      <Input items={items} setItems={setItems}></Input>
      <ListContainer items={items} setItems={setItems}></ListContainer>
    </>
  )
}

export default App
