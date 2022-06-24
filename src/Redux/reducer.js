import {
  BOOK_ADDED,
  ADD_ANOTHER_BOOK,
  ADD_SUBGENRE_INPUT,
  BACK,
  CREATE_SUBGENRE,
  NEXT_STEP,
  PICKED_GENRE,
  PICKED_SUBGENRE,
  SET_INPUT,
  SET_STATE,
  IS_DESC_REQUIRED,
} from "./actions"

export const reducer = (state, action) => {
  if (action.type === SET_STATE) {
    return {
      ...action.payload,
      currentPage: state.currentPage,
      genre: "",
      subgenre: "",
      isBookAdded: false,
    }
  }

  if (action.type === PICKED_GENRE) {
    let genre = state.genre
    let change = state.genres.map((item) => {
      if (item.id === action.payload) {
        if (item.isClicked) {
          genre = ""
          return { ...item, isClicked: false }
        }
        genre = item
        return { ...item, isClicked: true }
      } else {
        return { ...item, isClicked: false, genre: "" }
      }
    })

    return { ...state, genres: change, genre: genre }
  }

  if (action.type === PICKED_SUBGENRE) {
    let subgenre = ""
    let change = state.genre.subgenres.map((item) => {
      if (item.id === action.payload) {
        if (item.isClicked) {
          subgenre = ""
          return { ...item, isClicked: false }
        }
        subgenre = item
        return { ...item, isClicked: true }
      } else {
        return { ...item, isClicked: false, subgenre: "" }
      }
    })

    console.log(state)
    return {
      ...state,
      genre: { ...state.genre, subgenres: change },
      subgenre: subgenre,
    }
  }

  if (action.type === NEXT_STEP) {
    return { ...state, currentPage: state.currentPage + action.payload }
  }

  if (action.type === BACK) {
    if (state.currentPage === 1) {
      return { ...state, currentPage: state.currentPage }
    }
    return { ...state, currentPage: state.currentPage - action.payload }
  }

  if (action.type === ADD_SUBGENRE_INPUT) {
    return { ...state, subgenreName: "" }
  }

  if (action.type === SET_INPUT) {
    return { ...state, subgenreName: action.payload }
  }

  if (action.type === IS_DESC_REQUIRED) {
    console.log(action.payload)

    return { ...state, isDescriptionRequired: action.payload }
  }

  if (action.type === CREATE_SUBGENRE) {
    console.log(state)

    let change = state.genre.subgenres.concat(action.payload)

    return {
      ...state,
      genre: {
        ...state.genre,
        subgenres: change,
      },
    }
  }

  if (action.type === BOOK_ADDED) {
    return { ...state, isBookAdded: true }
  }

  if (action.type === ADD_ANOTHER_BOOK) {
    let change = state.genres.map((singelGenre) => {
      return { ...singelGenre, isClicked: false }
    })

    return {
      ...state,
      isBookAdded: false,
      currentPage: 1,
      genre: "",
      subgenre: "",
      genres: change,
    }
  }

  return state
}
