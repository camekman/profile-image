import "./App.css";
import ProfileImage from "./component/ProfileImage";

const profileImage = {
  image: "./assets/profile.png",
  name: "Linus Ekenstam",
};

function App() {
  return (
    <div className="App">
      <ProfileImage image={profileImage.image} name={profileImage.name} />
    </div>
  );
}

export default App;
