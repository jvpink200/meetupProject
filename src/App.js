import React from 'react';
   
import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetUps";
import NewMeetupPage from "./pages/NewMeetUp";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div className="text-center">
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
