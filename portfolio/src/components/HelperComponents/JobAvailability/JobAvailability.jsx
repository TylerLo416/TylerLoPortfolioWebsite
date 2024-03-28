import React from 'react'
import styles from './JobAvailability.module.css';

const JobAvailability = () => {
  return (
    <div className={styles.container}>
        <div className={styles.circle}></div> {/* Blue circle */}
        <div className={styles.text}>Available for Job</div>
    </div>
  )
}

export default JobAvailability