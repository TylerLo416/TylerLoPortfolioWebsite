import styles from './App.module.css';
import { NavBar, IntroSection, RecentWork, RecentProject, Skills } from './components';
import MarkImage from './Assets/Mark.png';
import Box from '@mui/material/Box';

function App() {
  return (
    <div className={styles.app}> {/* Apply padding class */}
      <div className={styles.appheader}>
        <NavBar />
        <div className={styles.introsection}>
          <IntroSection />
        </div>
        <div className={styles.twocolumn}>
          <RecentWork />
          <Box sx={{ border: '1px solid #126594', borderRadius: '20px', 
            display: 'grid', width: '100%', height: '100%', 
            
          }}>
            <Skills />
          </Box>
          <RecentProject Name="LOR Hand Tracker" Description="Front-End" Picture={MarkImage}/>
          <RecentProject Name="VAWT Wind Turbine" Description="Data Lead" Picture={MarkImage}/>
        </div>
      </div>
    </div>
  );
}

export default App;
