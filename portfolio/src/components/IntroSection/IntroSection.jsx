import React from 'react'
import Button from '@mui/material/Button';
import styles from './IntroSection.module.css';
import JobAvailability from '../HelperComponents/JobAvailability/JobAvailability';

const IntroSection = () => {
  return (
    <div className={styles.introsection}>
        <div className={styles.faded_gray}>Software Engineer</div>
        <div></div>
        <div className={styles.right_column}>
          <JobAvailability />
        </div>
        <div>
          <div className={`${styles['name']} ${styles['faded_gray']}`}>I'm Tyler Lo</div>
          <div className={styles.faded_gray}>I develop Front-End + Full-Stack Applications</div>
          <Button variant="contained" className={styles.button}>Hire Me</Button>
          <Button variant="contained" className={styles.button} id={styles.whiteButton}>Copy Email</Button>
        </div>
        <div></div>
        <div className={styles.right_column}>
          <div id={styles.grayCircle} className={styles.right_column}></div>
        </div>
    </div>
  )
}

export default IntroSection