import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import { HOME_PATH, COMICBOOK_PATH } from './config/paths';
import Home from './components/screens/home/Home';
import ComicBook from './components/screens/comic-book/ComicBook';
import Header from './components/common/Header';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path={HOME_PATH} component={Home} />
          <Route exact path={COMICBOOK_PATH} component={ComicBook} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
