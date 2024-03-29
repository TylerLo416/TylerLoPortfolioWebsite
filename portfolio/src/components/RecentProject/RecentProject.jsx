  import React from 'react'
  import styles from './RecentProject.module.css'
  import IconButton from "@mui/material/IconButton";
  import ArrowOutwardIcon from '@mui/icons-material/ArrowOutwardRounded';


  const PopUpButton = () => {
    return (
      <div>
        <IconButton style={{ 
          backgroundColor: '#126594'
          }}> 
        <ArrowOutwardIcon style={{ color: '#FFFFFF', fontSize: '3.3rem'}}/>
        </IconButton> 
      </div>
    )
  }


  const RecentProject = ({ Name, Description, Picture }) => {
    return (
      <div className={styles.recentproject}>
        <div className={styles.top_columns}>
          <div className={styles.name}>{Name}</div>
          <div></div>
          <div className={styles.right_column}>
            <PopUpButton/>
          </div>
          <div className={styles.description}>{Description}</div>
        </div>
        <div className={styles.imagecontainer}>
          <img src={Picture} alt="Project Image" className={styles.picture}/>
        </div>
      </div>
    )
  }
  export default RecentProject