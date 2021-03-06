/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react");
import {Provider} from "react-redux"
import createStore from "./src/Redux/store";

const store = createStore();
export const wrapPageElement = ({element}) => <Provider store={store}>{element}</Provider>;
