import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import styles from './IntroSection.module.css';
import JobAvailability from '../HelperComponents/JobAvailability/JobAvailability';
import MarkImage from '../../Assets/Mark.png';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';

const IntroSection = () => {
  return (
    <div className={styles.introsection}>
      <div id={styles.softwareengineer} className={styles.faded_gray}>
        Software Engineer
      </div>
      <div className={styles.right_column}>
        <JobAvailability />
        <div className={styles.faded_gray}></div>
      </div>
      <div>
        <div className={`${styles['name']} ${styles['whitetext']}`}>
          I'm Tyler Lo
        </div>
        <div id={styles.description} className={styles.faded_gray}>
          I develop Front-End + Full-<br />
          Stack Applications
        </div>
        <ButtonGroup variant="contained" id={styles.hiremebuttongroup}>
          <Button className={styles.hireme} style={{ textTransform: 'none' }}>Hire Me</Button>
            <Button className={`${styles.pluscontainer} ${styles.hireme}`}>
              <AddCircleOutlineRoundedIcon />
            </Button>
        </ButtonGroup>
        <ButtonGroup 
          variant="text" 
          id={styles.emailbuttongroup}
          sx={{
            '& .MuiButton-root': {
              borderBottom: '1px solid #161616', // Apply border to the bottom of each button
            },
            '& .MuiButton-root:last-child': {
              borderBottom: 'none', // Remove border from the last button to prevent duplication
            },
          }}
        >
          <Button 
            variant="text" 
            className={styles.emailbutton} 
            id={styles.copyemail}
            style={{ textTransform: 'none' }}>
            Copy Email
          </Button>
          <Button variant="text" className={styles.emailbutton} id={styles.copybuttoncontainer}> 
            <ContentCopyRoundedIcon/>
          </Button>
        </ButtonGroup>
      </div>
      <div className={styles.grayCircleContainer}>
        <div id={styles.grayCircle}>
          <img src={MarkImage} alt='Mark' />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
