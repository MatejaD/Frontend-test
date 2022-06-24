import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button_Container from "./Components/Button_Container"
import Genre_Subgenre from "./Components/Genre_Subgenre"
import Steps from "./Components/Steps"
import dummyObject from "./dummyObject.json"

function App() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const currentPage = useSelector((state) => state.currentPage)
  const subgenreName = useSelector((state) => state.subgenreName)
  useEffect(() => {
    dispatch({ type: "SET_STATE", payload: dummyObject })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentPage === 2) {
      console.log(`User picked genre: ${state.genre.name}`)
    }
    if (currentPage === 3) {
      if (!subgenreName) {
        console.log("Noice")
      } else {
        console.log(`Subgenre name can't be empty.`)
      }
    }
  }

  return (
    // Background
    <main className="font-Poppins w-screen h-screen bg-slate-200 flex justify-center items-center">
      {/* Container */}
      <form
        onSubmit={handleSubmit}
        className="w-5/12 h-3/6 p-2 flex flex-col justify-start gap-4 items-start border-2 border-black rounded-md"
      >
        <div className="w-full h-2 flex justify-start items-start ">
          <h2 className="">Add Book - New Book</h2>
        </div>
        <Steps />
        <Genre_Subgenre />
        <Button_Container />
      </form>
    </main>
  )
}

export default App
