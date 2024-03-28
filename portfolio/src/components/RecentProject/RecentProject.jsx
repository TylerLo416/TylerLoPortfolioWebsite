import React from 'react'
import styles from './RecentProject.module.css'
import IconButton from "@mui/material/IconButton";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const PopUpButton = () => {
  return (
    <div>
      <IconButton style={{ backgroundColor: '#126594' }}> 
      <ArrowOutwardIcon style={{ color: '#FFFFFF' }}/>
      </IconButton> 
    </div>
  )
}


const RecentProject = ({ Name, Description }) => {
  return (
    <div className={styles.recentproject}>
      <div className={styles.top_columns}>
        <div className={styles.name}>{Name}</div>
        <div></div>
        <div className={styles.right_column}>
          <PopUpButton/>
        </div>
        <div className={styles.dates}>{Description}</div>
      </div>
    </div>
  )
}
export default RecentProject