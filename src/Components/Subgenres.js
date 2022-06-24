import React from "react"
import { useDispatch, useSelector } from "react-redux"

// Actions
import { PICKED_SUBGENRE } from "../Redux/actions"

export default function Subgenres() {
  const genre = useSelector((state) => state.genre)
  const dispatch = useDispatch()

  return (
    <>
      {genre.subgenres.map((subgenre) => {
        return (
          <button
            type="button"
            onClick={() => {
              dispatch({
                type: PICKED_SUBGENRE,
                payload: subgenre.id,
              })
            }}
            key={subgenre.id}
            className={`w-10/12 h-12 flex justify-center items-center rounded-md border-border break-words border-2 ${
              subgenre.isClicked
                ? "bg-darkGray border-darkGray text-white"
                : "bg-white"
            }
              }`}
          >
            <h2 className="break-words">{subgenre.name}</h2>
          </button>
        )
      })}
    </>
  )
}
