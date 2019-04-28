import React from 'react';

import Main from './containers/Main';
import ShowLists from './components/ShowLists';

const App = () => (
  <div>
    <header />
    <main>
      <Main />
      <div>
        <ShowLists />
      </div>
    </main>
  </div>
);

export default App;
