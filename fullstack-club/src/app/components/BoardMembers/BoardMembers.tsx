// components/BoardMembers/BoardMembers.tsx
import React from 'react';
import BoardMember from '../BoardMember/BoardMember';
import styles from './BoardMembers.module.css';

interface Member {
  name: string;
  position: string;
  image: string;
}

const BoardMembers: React.FC = () => {
  const members: Member[] = [
    {
      name: 'Raiyan Zaman',
      position: 'President',
      image: '/images/raiyan.jpg',
    },
    {
      name: 'Sai Chandra',
      position: 'Vice President',
      image: '/images/member_sai.jpg',
    },
    {
      name: 'Leo Chen',
      position: 'Vice President',
      image: '/images/member_leo.jpg',
    },
    {
      name: 'Rishi Selvemani',
      position: 'Member at Large',
      image: '/images/member_rishi.jpg',
    },
  ];

  return (
    <section id="board-members" className={styles.boardMembers}>
      <h2 className={styles.sectionTitle}>Board Members</h2>
      <div className={styles.membersContainer}>
        {members.map((member, index) => (
          <BoardMember
            key={index}
            name={member.name}
            position={member.position}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
};

export default BoardMembers;
