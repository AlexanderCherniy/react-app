import "./index.css";
// import store from "./redux/store";
import store from "./redux/store-redux"
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"));
const refreshPath = (state)=>{
  root.render(
    <React.StrictMode>
      <App store = {store} state={store.getState()} dispatch = {store.dispatch.bind(store)}/>
    </React.StrictMode>
  );
  
  reportWebVitals();
}
refreshPath(store.getState())
store.subscribe(()=>{
  let state = store.getState()
  refreshPath(state)
})