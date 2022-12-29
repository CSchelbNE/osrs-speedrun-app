import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TempScreen from "./authentication/temp-screen";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {jwtLoginThunk} from "./services/user-thunk";

function App() {
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.user);
    useEffect(() => {
        if(!currentUser) {
            dispatch(jwtLoginThunk())
        }
    }, [dispatch]);
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<TempScreen/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
