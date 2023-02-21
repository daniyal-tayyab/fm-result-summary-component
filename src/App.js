import Summary from "./components/summary/Summary";
import { PaleBlue } from "./styles/colors";

export const App = () => {
  const appStyles = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: PaleBlue,
  };

  return (
    <div style={appStyles}>
      <Summary />
    </div>
  );
};

export default App;
