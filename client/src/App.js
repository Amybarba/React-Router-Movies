import React, { useState } from "react";
import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";
import SavedList from "./Movies/SavedList";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* Replace this Div with your Routes */}
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route
          path="/movies/:id"
          render={props => <Movie {...props} addToSavedList={addToSavedList} />}
        />
      </Switch>
    </div>
  );
};

export default App;
