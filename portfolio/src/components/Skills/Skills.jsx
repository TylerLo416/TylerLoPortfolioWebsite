import React from 'react'
import styles from './Skills.module.css'

const WorkExperience = ({ jobTitle, date, company, index}) => {
  const title_color = index === 0 ? styles.blue_title : styles.white_title;
  return (
    <div className={styles.workexperience}>
      <div className={styles.left_column}>
        <div className={title_color}>{jobTitle}</div>
        <div className={styles.date_company_color}>{date}</div>
      </div>
      <div className={styles.date_company_color}>{company}</div>
    </div>
  )
}

const Skill = ({ skillName, proficiency }) => {

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < 5; i++) {
      const dotColor = i < proficiency ? styles.light_blue_dot : styles.blue_dot;
      dots.push(<div key={i} className={`${styles.dots} ${dotColor}`}></div>);
    }
    return dots;
  };

  return (
    <div className={styles.skill}>
      <div className={styles.skill_name}>{skillName}</div>
      <div className={styles.dot_container}>
        {renderDots()}
      </div>
    </div>
  )
}



const Skills = () => {
  return (
    <div className={styles.skills}>
      <Skill skillName="JavaScript" proficiency="4" />
      <Skill skillName="React" proficiency="3" />
      <Skill skillName="Unity" proficiency="3" />
      <Skill skillName = "SQL" proficiency="2" />
      <Skill skillName = "ServiceNow" proficiency="2" />
    </div>
  )
}

export default Skills