import './App.css';
import Button from '@mui/material/Button';
import { NavBar, IntroSection, RecentWork, RecentProject, Skills } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <IntroSection />
        <div className="two_column">
          <RecentWork />
          <Skills />
          <RecentProject Name="LOR Hand Tracker" Description="Front-End"/>
          <RecentProject Name="VAWT Wind Turbine" Description="Data Lead"/>
        </div>
      </header>
    </div>
  );
}

export default App;
