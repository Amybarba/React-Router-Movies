import React, { useState } from 'react';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* Replace this Div with your Routes */}
      <div>
        <Route exact path='/' component={MovieList}/>
        <Route path='/movies/: id' component={Movie}/>
        </div>
    </div>
  );
};

export default App;
