import React from "react"
import { useDispatch } from "react-redux"

// Actions
import { ADD_ANOTHER_BOOK } from "../Redux/actions"

export default function Book_Added() {
  const dispatch = useDispatch()

  return (
    <article className="w-full h-80 flex flex-col justify-around items-center">
      <div className="w-36 h-36 flex justify-center items-center rounded-full bg-lightGray">
        <div className="check  w-10 h-24 border-green"></div>
      </div>
      <h2>Book Added Succesfully</h2>
      <div className="w-full h-36 flex justify-center items-center">
        <button
          onClick={() => dispatch({ type: ADD_ANOTHER_BOOK })}
          className="h-10 w-1/2 rounded-md bg-darkGray text-white"
        >
          Add Another Book
        </button>
      </div>
    </article>
  )
}
