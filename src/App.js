import React from 'react';

import MainShow from './components/MainShow';
import ShowLists from './components/ShowLists';

const App = () => (
  <div>
    <header />
    <main>
      <MainShow />
      <div>
        <ShowLists />
      </div>
    </main>
  </div>
);

export default App;
