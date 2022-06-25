import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button_Container from "./Button_Container"

// Actions
import { BOOK_ADDED } from "../Redux/actions"

export default function Information() {
  const currentPage = useSelector((state) => state.currentPage)
  const state = useSelector((state) => state)
  const isDescriptionRequired = useSelector(
    (state) => state.subgenre.isDescriptionRequired
  )
  //   Inputs
  const [bookTitle, setBookTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [ISBN, setISBN] = useState("")
  const [publisher, setPublisher] = useState("")
  const [datePublished, setDatePublished] = useState("2022-6-24")
  const [numberOfPages, setNumberOfPages] = useState(1)
  const [format, setFormat] = useState("")
  const [edition, setEdition] = useState("")
  const [editionLanguage, setEditionLanguage] = useState("")
  const [descriptionValue, setDescriptionValue] = useState("")
  //
  // Errors
  const [errorTitle, setErrorTitle] = useState(false)
  const [errorDesc, setErrorDesc] = useState(false)
  //
  //   Refs
  const bookTitleRef = useRef()
  const descriptionRef = useRef()

  //

  const dispatch = useDispatch()

  //   Fake fetch function
  const wait = (ms) => {
    return new Promise((r) => setTimeout(r, ms))
  }

  const fakeFetch = async (item) => {
    await wait(500)

    console.log(item)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state)
    console.log(currentPage)
    if (!bookTitle) {
      console.log("Book name cannot be empty")
      bookTitleRef.current.style.borderColor = "red"
      setErrorTitle(true)
      setTimeout(() => {
        bookTitleRef.current.style.borderColor = "#555555"
        setErrorTitle(false)
      }, 1500)
      bookTitleRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      })
    }
    if (state.subgenre.isDescriptionRequired) {
      if (!descriptionValue) {
        descriptionRef.current.style.borderColor = "red"
        setErrorDesc(true)
        setTimeout(() => {
          setErrorDesc(false)
          descriptionRef.current.style.borderColor = "#555555"
        }, 1500)
      } else {
        let book = {
          bookTitle,
          author,
          ISBN,
          publisher,
          datePublished,
          numberOfPages,
          format,
          edition,
          editionLanguage,
          descriptionValue,
        }
        fakeFetch(book)
        dispatch({ type: BOOK_ADDED })
      }
    } else if (bookTitle) {
      let book = {
        bookTitle,
        author,
        ISBN,
        publisher,
        datePublished,
        numberOfPages,
        format,
        edition,
        editionLanguage,
        descriptionValue,
      }
      console.log("BOOK TITLE!")

      fakeFetch(book)
      dispatch({ type: BOOK_ADDED })
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ minHeight: "50vh" }}
      className="w-full px-4 mb-6  flex flex-col justify-around items-start gap-6"
    >
      <div className="relative w-full h-auto  flex flex-col items-start justify-center gap-1">
        <label className="flex gap-4 pl-2">
          {"  "}
          *Book Title
          <span className={`text-error  ${errorTitle ? "block" : "hidden"}`}>
            This field is required
          </span>
        </label>
        <input
          ref={bookTitleRef}
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          maxLength={30}
          placeholder="Book Title"
          className={`w-full h-10 px-3 rounded-md border-2 border-darkGray bg-white outline-none`}
          type="text"
        />
        {/* <span className="h-1"></span> */}
      </div>

      <div className="selectdiv w-full h-auto  flex flex-col items-start justify-center gap-1">
        <label className=" pl-2">
          {"  "}
          Author
        </label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          className="w-full h-10 px-2  rounded-md border-2 border-darkGray bg-white outline-none"
          type="text"
        >
          <option
            className="text-opacity-10 text-white"
            hidden={true}
            value=""
          ></option>
          <option value="Author1">Author 1</option>
          <option value="Author2">Author 2</option>
          <option value="Author3">Author 3</option>
        </select>
      </div>

      <div className="w-full h-auto  flex flex-col items-start justify-center gap-1">
        <label className=" pl-2">
          {"  "}
          ISBN
        </label>
        <input
          value={ISBN}
          onChange={(e) => setISBN(e.target.value)}
          placeholder="e.g.  978-3-16-148410-0"
          className="w-full h-10 px-3 rounded-md border-2 border-darkGray bg-white outline-none"
          type="number"
        />
      </div>

      <div className="selectdiv w-full h-auto  flex flex-col items-start justify-center gap-1">
        <label className=" pl-2">
          {"  "}
          Publisher
        </label>
        <select
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
          placeholder="Publisher"
          className="w-full h-10 px-2 rounded-md border-2 border-darkGray bg-white outline-none"
          type="text"
        >
          <option value="" hidden={true}>
            Publisher
          </option>
          <option value="2">Publisher 1</option>
          <option value="3">Publisher 2</option>
          <option value="4">Publisher 3</option>
        </select>
      </div>

      <div className="w-full h-auto  flex flex-col items-start justify-center gap-1">
        <label className=" pl-2">
          {"  "}
          Date Published
        </label>
        <input
          value={datePublished}
          onChange={(e) => setDatePublished(e.target.value)}
          maxLength={30}
          placeholder="DD/MM/YYYY"
          className="w-1/3 h-10 px-3 rounded-md border-2 border-darkGray bg-white outline-none"
          type="date"
        />
      </div>

      <div className="w-full h-auto  flex flex-col items-start justify-center gap-1">
        <label className=" pl-2">
          {"  "}
          Number of pages
        </label>
        <input
          value={numberOfPages}
          onChange={(e) => setNumberOfPages(e.target.value)}
          maxLength={30}
          placeholder="Number of pages"
          className="w-full h-10 px-3 rounded-md border-2 border-darkGray bg-white outline-none"
          type="number"
        />
      </div>

      <div className="selectdiv w-1/3 h-auto  flex flex-col items-start justify-center gap-1">
        <label className=" pl-2">
          {"  "}
          Format
        </label>
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          placeholder="Format"
          className="w-full h-10 px-2  rounded-md border-2 border-darkGray bg-white outline-none"
          type="text"
        >
          <option value="" hidden={true}></option>
          <option value="2">Format 1</option>
          <option value="3">Format 2</option>
          <option value="4">Format 3</option>
        </select>
      </div>

      <div className="w-full h-auto flex justify-start items-start gap-4">
        <div className="w-1/3 h-auto  flex flex-col items-start justify-center gap-1">
          <label className=" pl-2">
            {"  "}
            Edition
          </label>
          <input
            value={edition}
            onChange={(e) => setEdition(e.target.value)}
            maxLength={30}
            placeholder="Edition"
            className="w-full h-10 px-3 rounded-md border-2 border-darkGray bg-white outline-none"
            type="text"
          />
        </div>
        <div className="selectdiv w-1/3 h-auto  flex flex-col items-start justify-center gap-1">
          <label className="w-48  pl-2">
            {"  "}
            Edition Language
          </label>
          <select
            value={editionLanguage}
            onChange={(e) => setEditionLanguage(e.target.value)}
            placeholder="Format"
            className="w-full h-10 px-2 rounded-md border-2 border-darkGray bg-white outline-none"
          >
            <option value="" hidden={true}></option>
            <option value="2">English</option>
            <option value="3">Serbian</option>
            <option value="4">Bosnian</option>
          </select>
        </div>
      </div>

      {/* Description */}
      <div className="w-full h-auto  flex flex-col items-start justify-center gap-1">
        <label className="flex gap-2 pl-2">
          {"  "}
          {isDescriptionRequired ? "*Description" : "Description"}
          <span className={`text-error  ${errorDesc ? "block" : "hidden"}`}>
            This field is required
          </span>
        </label>
        <textarea
          ref={descriptionRef}
          value={descriptionValue}
          onChange={(e) => setDescriptionValue(e.target.value)}
          placeholder="Number of pages"
          className={`w-full h-36 p-3 rounded-md border-2 border-darkGray bg-white outline-none resize-none `}
          type="number"
        />
      </div>
      <Button_Container />
    </form>
  )
}
