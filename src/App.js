import React from 'react';

import Main from './containers/Main';
import ShowList from './components/ShowList';

const App = () => (
  <div>
    <header />
    <main>
      <Main />
      <div>
        <ShowList />
      </div>
    </main>
  </div>
);

export default App;
