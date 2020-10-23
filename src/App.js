import React from 'react';
import Nav from './components/navigation'
import Sidebar from './components/sidebar'
import Stories from './components/stories'
import Timeline from './components/timeline'
import Shortcut from './components/shortcut'
function App() {
  return (
    <>
      <Nav />
      <div className="wrapper">
        <Sidebar />
        <div class="posts">
          <Stories />
          <Timeline />
        </div>
        <Shortcut />
      </div>
    </>
  );
}

export default App;
