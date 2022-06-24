import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button_Container from "./Button_Container"

export default function Genre_Subgenre() {
  const [pickedGenre, setPickedGenre] = useState("")

  const [isDescRequired, setIsDescRequired] = useState()

  let genres = useSelector((state) => state.genres)
  const genre = useSelector((state) => state.genre)
  const currentPage = useSelector((state) => state.currentPage)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {}

  return (
    <div
      className={`w-full h-2/5  ${
        currentPage >= 3
          ? "flex justify-start items-start"
          : " grid  justify-items-start items-center grid-cols-4 grid-rows-2"
      }`}
    >
      {genres && currentPage === 1
        ? genres.map((singleGenre) => {
            return (
              <button
                type="button"
                onClick={() => {
                  dispatch({
                    type: "PICKED_GENRE",
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
        : currentPage === 2 && (
            <>
              {genre.subgenres.map((subgenre) => {
                return (
                  <button
                    type="button"
                    onClick={() => {
                      dispatch({
                        type: "PICKED_SUBGENRE",
                        payload: subgenre.id,
                      })
                    }}
                    key={subgenre.id}
                    className={`w-10/12 h-12 flex justify-center items-center rounded-md border-border border-2 ${
                      subgenre.isClicked
                        ? "bg-darkGray border-darkGray text-white"
                        : "bg-white"
                    }
              }`}
                  >
                    <h2>{subgenre.name}</h2>
                  </button>
                )
              })}
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
          )}
      {currentPage === 3 && (
        <form className="w-full h-full flex flex-col  justify-around items-center">
          <input
            placeholder="Subgenre name"
            className="w-full h-10 px-3 rounded-md border-2 border-darkGray bg-white outline-none"
            type="text"
          />
          <div className="w-full h-16 flex justify-start items-center">
            <div>
              <div className="form-check">
                <input
                  value={isDescRequired}
                  onChange={(e) => setIsDescRequired(e.target.value)}
                  className="form-check-input appearance-none h-4 w-4 border-2 border-darkGray rounded-sm bg-white checked:bg-green checked:border-green focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label inline-block text-darkGray"
                  for="flexCheckDefault"
                >
                  Description is required for this subgenre
                </label>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}
