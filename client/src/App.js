import { BrowserRouter as Router, Route } from "react-router-dom";
import Forum from "./Components/Forum";
import Header from "./Components/Header";
import Jokes from "./Components/Jokes";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact render={() => (
          <>
            <Header />
            <Jokes />
          </>
        )} />
        <Route path="/forum" render={() => (
          <>
            <Header title="Father Forum" />
            <Forum />
          </>
        )} />
      </div>
    </Router>
  );
}

export default App;
