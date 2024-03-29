import React from 'react'
import styles from './RecentWork.module.css';


const WorkExperience = ({ jobTitle, date, company, index}) => {
  const title_color = index === 0 ? styles.blue_title : styles.white_title;
  return (
    <div className={styles.workexperience}>
      <div className={styles.left_column}>
        <div className={`${title_color} ${styles.jobtitle}`}>{jobTitle}</div>
        <div className={styles.date_company_color}>{date}</div>
      </div>
      <div className={`${styles.date_company_color} ${styles.company}`}>{company}</div>
    </div>
  )
}

const RecentWork = () => {
  return (
    <div className={styles.recentwork}>
      <div className={styles.header_container}>
        <div className={styles.circle}></div> {/* Blue circle */}
        <div id={styles.header}>RecentWork</div>
      </div>
      <WorkExperience index={0} jobTitle="Data Engineer" date="Jun 24 - Aug 24" company="CVS"/>
      <WorkExperience jobTitle="App Developer" date="Mar 24 - Present" company="Center for Energy Research"/>
      <WorkExperience jobTitle="ServiceNow Developer" date="Nov 23 - Present" company="UCSD ITS"/>
      <WorkExperience jobTitle="Unity UI Developer" date="Aug 23 - Mar 24" company="Cobey Motions"/>
      <WorkExperience jobTitle="FrontEnd Intern" date="Apr 22 - Dec 22" company="Jacobs School of Engineering" />
    </div>
  )
}

export default RecentWork