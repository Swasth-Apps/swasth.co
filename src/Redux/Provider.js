import React from "react"
import { Provider } from "react-redux"

import createStore from "./store"

export default (props) => {
    const store = createStore();
    return <Provider store={store}>{props.children}</Provider>
}