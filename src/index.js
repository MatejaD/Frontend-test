import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { initalState } from "./Redux/initalState"
import { reducer } from "./Redux/reducer"
import { Provider } from "react-redux"
import { createStore } from "redux"

const store = createStore(reducer, initalState)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
