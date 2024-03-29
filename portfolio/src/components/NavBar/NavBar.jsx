import React from 'react'
import Button from '@mui/material/Button';
import styles from './NavBar.module.css';
import MarkImage from '../../Assets/Mark.png';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <img src={MarkImage} alt='Mark' />
      <div className={styles.navbar}>
        <Button variant="text" className={styles.button}>About</Button>
        <Button variant="text" className={styles.button}>Portfolio</Button>
        <Button variant="text" className={styles.button}>Contact</Button>
      </div>
    </div>
  )
}

export default NavBar