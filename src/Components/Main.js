import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Add_Subgenre from "./Add_Subgenre"
import Button_Container from "./Button_Container"
import Genres from "./Genres"
import Information from "./Information"
import Subgenres from "./Subgenres"

export default function Main() {
  const [pickedGenre, setPickedGenre] = useState("")

  let genres = useSelector((state) => state.genres)
  const genre = useSelector((state) => state.genre)
  const currentPage = useSelector((state) => state.currentPage)

  const dispatch = useDispatch()

  return (
    <article className="flex flex-col w-full h-2/4">
      <div
        className={`w-full h-2/5  ${
          currentPage >= 3
            ? "flex justify-start items-start"
            : " grid  gap-1 justify-items-start items-center grid-cols-4 grid-rows-2"
        }`}
      >
        {genres && currentPage === 1 ? (
          <Genres />
        ) : (
          currentPage === 2 && (
            <>
              <Subgenres />
              <button
                type="button"
                onClick={() => {
                  dispatch({ type: "NEXT_STEP", payload: 1 })
                  dispatch({ type: "ADD_SUBGENRE_INPUT" })
                }}
                className={`w-10/12 h-12 flex justify-center items-center rounded-md  border-2 bg-darkGray border-darkGray text-white`}
              >
                <h2>Add New</h2>
              </button>
            </>
          )
        )}
        {currentPage === 3 && <Add_Subgenre />}
        {currentPage === 4 && <Information />}
      </div>
      {currentPage === 4 ? "" : <Button_Container />}
    </article>
  )
}
