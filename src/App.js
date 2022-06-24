import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Book_Added from "./Components/Book_Added"
import Main from "./Components/Main"
import Steps from "./Components/Steps"
import dummyObject from "./dummyObject.json"

// Actions
import { SET_STATE } from "./Redux/actions"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: SET_STATE, payload: dummyObject })
  }, [])
  const [bookName, setBookName] = useState("")

  const isBookAdded = useSelector((state) => state.isBookAdded)

  return (
    // Background
    <main
      style={{ minHeight: "30vh" }}
      className="font-Poppins w-screen h-screen bg-slate-200 flex justify-center   items-start p-6 "
    >
      {/* Container */}
      <div
        style={{ minHeight: "20vh" }}
        className="lg:w-5/12 w-2/3  p-2 mb-2  flex flex-col justify-start gap-4 items-start border-2 border-black rounded-md"
      >
        {isBookAdded ? (
          <Book_Added />
        ) : (
          <>
            <header className="w-full h-2 flex justify-start items-start ">
              <h1 className="">Add Book - New Book</h1>
            </header>
            <Steps />
            <Main />
          </>
        )}
      </div>
    </main>
  )
}

export default App
