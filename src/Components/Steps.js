import React from "react"
import { useSelector } from "react-redux"

export default function Steps() {
  const currentPage = useSelector((state) => state.currentPage)

  const steps = [
    {
      number: 1,
      name: "Genre",
      id: 1,
      isCurrentlyOn: true,
      isLast: false,
    },
    {
      number: 2,
      name: "Subgenre",
      id: 2,
      isCurrentlyOn: false,
      isLast: false,
    },
    {
      number: 3,
      name: "Add New",
      id: 3,
      isCurrentlyOn: false,
      isLast: false,
    },
    {
      number: currentPage > 2 ? (currentPage === 3 ? 4 : 3) : "...",
      name:
        currentPage > 2
          ? currentPage === 3
            ? "Information"
            : "Information"
          : "",
      id: 4,
      isCurrentlyOn: false,
      isLast: true,
    },
  ]

  return (
    <div className="w-10/12 h-28  flex justify-start gap-2 items-start">
      {steps.map((singleStep) => {
        const { number, name, id, isCurrentlyOn, isLast } = singleStep

        return (
          <div
            key={id}
            className={`w-1/4 h-full    flex justify-around items-center ${
              singleStep.id === 3 ? (currentPage === 3 ? "flex" : "hidden") : ""
            }
            }`}
          >
            <div className="relative w-16 h-full flex flex-col justify-center items-center">
              <div
                className={`w-12 h-12 flex justify-center items-center rounded-full  text-xl ${
                  currentPage === id ? "bg-darkGray text-white" : "bg-lightGray"
                }`}
              >
                {number}
              </div>
              <span className="absolute w-auto -bottom-1 text-sm">{name}</span>
            </div>
            <div
              className={`w-10 h-0.5 rounded-lg  ${!isLast && "bg-line"}`}
            ></div>
          </div>
        )
      })}
    </div>
  )
}
