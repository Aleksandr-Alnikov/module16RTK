import './App.css'
import {Header} from "./components/Header/Header.jsx";
import {Main} from "./components/Main/Main";
import {Provider} from "react-redux";
import {store} from "./reduxTK/store";

function App() {

  return (
    <Provider store={store}>
      <Header />
        <Main />
    </Provider>
  )
}

export default App
