import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function Button_Container() {
  const [isClickable, setIsClickable] = useState(false)
  const currentPage = useSelector((state) => state.currentPage)
  const subgenreName = useSelector((state) => state.subgenreName)

  const dispatch = useDispatch()

  let genre = useSelector((state) => state.genre)

  const nextStep = () => {
    if (currentPage === 3) {
      if (!subgenreName) {
        console.log("Wow not nice")
      } else {
        dispatch({ type: "NEXT_STEP", payload: currentPage === 2 ? 2 : 1 })
      }
    } else {
      dispatch({ type: "NEXT_STEP", payload: currentPage === 2 ? 2 : 1 })
    }
  }

  const back = () => {
    dispatch({ type: "BACK", payload: currentPage === 4 ? 2 : 1 })
  }

  return (
    <div className="w-full h-12 px-4 flex justify-end items-center gap-4">
      <button
        type="button"
        onClick={() => back()}
        className="h-9 w-28 border-border border-2 rounded-md"
      >
        Back
      </button>
      <button
        type="submit"
        disabled={genre ? false : true}
        onClick={() => nextStep()}
        className={`h-9 w-28 border-border border-2 bg-darkGray rounded-lg 
        ${genre ? "bg-white" : "bg-border"}
        `}
      >
        Next
      </button>
    </div>
  )
}
