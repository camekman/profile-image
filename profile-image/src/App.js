import logo from "./logo.svg";
import "./App.css";
import ProfileImage from "./component/ProfileImage";

const image = "./assets/profile.png";

function App() {
  return (
    <div className="App">
      <ProfileImage image={image} />
    </div>
  );
}

export default App;
