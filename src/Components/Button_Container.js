import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

// Actions
import { BACK, NEXT_STEP, CREATE_SUBGENRE } from "../Redux/actions"

export default function Button_Container() {
  const currentPage = useSelector((state) => state.currentPage)
  const subgenreName = useSelector((state) => state.subgenreName)
  const subgenre = useSelector((state) => state.subgenre)
  const isDescriptionRequired = useSelector(
    (state) => state.isDescriptionRequired
  )
  const dispatch = useDispatch()

  let genre = useSelector((state) => state.genre)

  const [lastId, setLastId] = useState(25)

  const nextStep = () => {
    if (currentPage === 3) {
      if (!subgenreName) {
      } else {
        dispatch({ type: NEXT_STEP, payload: -1 })
        setLastId(lastId + 1)
        dispatch({
          type: CREATE_SUBGENRE,
          payload: {
            id: lastId + 1,
            name: subgenreName,
            isDescriptionRequired: isDescriptionRequired,
          },
        })
      }
    } else if (currentPage === 2) {
      dispatch({ type: NEXT_STEP, payload: 2 })
    } else if (currentPage === 4) {
      console.log("submited")
    } else {
      dispatch({ type: NEXT_STEP, payload: 1 })
    }
  }

  const back = () => {
    if (currentPage === 4) {
      dispatch({ type: BACK, payload: 2 })
    } else {
      dispatch({ type: BACK, payload: 1 })
    }
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
        disabled={
          currentPage === 1
            ? genre
              ? false
              : true
            : currentPage === 2
            ? subgenre
              ? false
              : true
            : currentPage === 3
            ? subgenreName
              ? false
              : true
            : currentPage === 4
            ? false
            : false
        }
        onClick={() => nextStep()}
        type={`${currentPage === 4 ? "submit" : "button"}`}
        className={`h-9 w-28 border-border border-2  rounded-lg 
        ${
          currentPage === 1
            ? genre
              ? "bg-white"
              : "bg-white"
            : currentPage === 2
            ? subgenre
              ? "bg-white"
              : "bg-border"
            : currentPage === 3
            ? subgenreName
              ? "bg-white"
              : "bg-border"
            : currentPage === 4
            ? "bg-white"
            : "bg-white"
        }
        `}
      >
        {currentPage === 4 ? "Add" : "Next"}
      </button>
    </div>
  )
}
