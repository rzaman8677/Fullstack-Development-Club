// components/BoardMember/BoardMember.tsx
import React from 'react';
import styles from './BoardMember.module.css';

interface BoardMemberProps {
  name: string;
  position: string;
  image: string;
}

const BoardMember: React.FC<BoardMemberProps> = ({
  name,
  position,
  image,
}) => {
  return (
    <div className={styles.memberCard}>
      <img src={image} alt={name} className={styles.memberImage} />
      <h3 className={styles.memberName}>{name}</h3>
      <p className={styles.memberPosition}>{position}</p>
    </div>
  );
};

export default BoardMember;
