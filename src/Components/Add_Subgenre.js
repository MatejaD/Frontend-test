import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

// Actions
import { SET_INPUT, IS_DESC_REQUIRED } from "../Redux/actions"

export default function Add_Subgenre() {
  const [isDescRequired, setIsDescRequired] = useState(false)

  const dispatch = useDispatch()

  const subgenreName = useSelector((state) => state.subgenreName)

  return (
    <article className="w-full h-full flex flex-col  justify-around items-center">
      <input
        maxLength={11}
        value={subgenreName}
        onChange={(e) => dispatch({ type: SET_INPUT, payload: e.target.value })}
        placeholder="Subgenre name"
        className="w-full h-10 px-3 rounded-md border-2 border-darkGray bg-white outline-none"
        type="text"
      />
      <div className="w-full h-16 flex justify-start items-center">
        <div>
          <div className="form-check">
            <input
              value={isDescRequired}
              onChange={(e) => {
                dispatch({
                  type: IS_DESC_REQUIRED,
                  payload: isDescRequired ? false : true,
                })
                setIsDescRequired(!isDescRequired)
              }}
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
    </article>
  )
}
