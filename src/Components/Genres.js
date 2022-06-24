import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// Actions
import { PICKED_GENRE } from "../Redux/actions"

export default function Genres() {
  const [pickedGenre, setPickedGenre] = useState(false)
  const genres = useSelector((state) => state.genres)

  const dispatch = useDispatch()

  return genres.map((singleGenre) => {
    return (
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: PICKED_GENRE,
            payload: singleGenre.id,
          })
          setPickedGenre(singleGenre.id)
        }}
        key={singleGenre.id}
        className={`w-10/12 h-12 flex justify-center items-center rounded-md border-border border-2 ${
          singleGenre.isClicked
            ? "bg-darkGray border-darkGray text-white"
            : "bg-white"
        }
              }`}
      >
        <h2> {singleGenre.name}</h2>
      </button>
    )
  })
}
