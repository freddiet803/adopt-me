import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet.js";
import SearchParams from "./SearchParams.js";
import { StrictMode, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Details from "./Details";
import ThemeContext from "./ThemeContext.js";
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Freddie",
//       animal: "Dog",
//       breed: "shitty",
//     }),
//   ]);
// };

const App = () => {
  const theme = useState('darkblue');
  return (
    <ThemeContext.Provider value={theme}>
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1>Adopt Me!</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
    </ThemeContext.Provider>
  );
};
//ReactDom.render(React.createElement(App),document.getElementById("root"));
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
