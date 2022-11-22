import './App.css';
import {Route} from "react-router-dom"; //switch es para paginado? brouserrouter aca? o en index??
import React from "react";
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import RecipeDetail from './components/RecipeDetail';
import CreateRecipe from './components/CreateRecipe';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Route path="/home" component={Home}/>
      <Route path="/recipes/:id" component={RecipeDetail}/>
      <Route path="/create" component={CreateRecipe}/>
    </div>
  );
}

export default App;
