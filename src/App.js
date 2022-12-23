import './App.css';
import SignupScreen from "./authentication/signup-screen";
import LoginScreen from "./authentication/login-screen";

function App() {
  return (
        <div className="App">
          <SignupScreen/>
          <LoginScreen/>
        </div>
  );
}

export default App;
