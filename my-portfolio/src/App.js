import Provider from "./context/provider";
import HomePage from "./pages/homepage";

function App() {
  return (
    <div>
      <Provider>
        <HomePage/>
      </Provider>
    </div>
  );
}

export default App;
