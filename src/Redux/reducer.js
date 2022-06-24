export const reducer = (state, action) => {
  if (action.type === "SET_STATE") {
    return {
      ...action.payload,
      currentPage: state.currentPage,
      genre: "",
      subGenre: "",
    }
  }

  if (action.type === "PICKED_GENRE") {
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

  if (action.type === "PICKED_SUBGENRE") {
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

  if (action.type === "NEXT_STEP") {
    return { ...state, currentPage: state.currentPage + action.payload }
  }

  if (action.type === "BACK") {
    return { ...state, currentPage: state.currentPage - action.payload }
  }

  if (action.type === "ADD_SUBGENRE_INPUT") {
    return { ...state, subgenreName: "" }
  }
  return state
}
