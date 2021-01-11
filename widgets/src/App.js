import './App.css';

import Menu from "./menu/menu";
import TimerWrapper from './timer/timer-wrapper';
import Tooltip from "./tooltip/tooltip";

function App() {
  const menuItems = ['Home', 'About', 'Services', 'Portfoilo', 'Contact us'];

  return (
    <div className="App">
      <Menu items={menuItems} />
      <div>
        <Tooltip text="Some information">
          React Quickly!
        </Tooltip>
      </div>
      <div className="container-fluid">
        <TimerWrapper />
      </div>
    </div >
  );
}

export default App;
