import "./App.css";
import Card from "./components/Card";
import Profile from "./components/Profile";

function App() {
  const profiles = [
    { id: 1, name: "Vincent", hobby: "Coding" },
    { id: 2, name: "Alice", hobby: "Reading" },
    { id: 3, name: "Bob", hobby: "Gaming" },
  ];

  return (
    <>
      <h1>React Basic</h1>
      <hr />
      {/* {profiles ? (
        profiles.map((profile) => {
          const { id, name, hobby } = profile;
          return <Profile key={id} name={name} hobby={hobby} />;
        })
      ) : (
        <p>No profiles available.</p>
      )} */}
      <Card name="Vincent" />
    </>
  );
}

export default App;
