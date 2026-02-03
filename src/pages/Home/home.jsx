import styles from '../Home/Home.module.css';
import StudyCard from '../../components/StudyCard/studycard';
import { studiesMock } from '../../mocks';
import { useState } from 'react';

import { NewestStudy } from '../../components/NewestStudy/NewestStudy';
import { AllStudy } from '../../components/AllStudy/AllStudy';

export const Home = () => {
  return (
    <main className={styles.homeLayout}>
      <NewestStudy />
      <AllStudy />
    </main>
  );
};
