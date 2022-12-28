'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`} id="academics">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Academics" />
        <TitleText title={<>Academics</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          <a target="_Blank" rel="noreferrer" href='https://mallareddycybersecurity.firebaseapp.com'>
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <a target="_Blank" rel="noreferrer" href='https://drive.google.com/drive/folders/1-iPwqG_4uyqik0fe-VxnxdCs-tDxD4VB?usp=share_link'>
          <img
            src="/Academics.svg"
            alt="Academics"
            className="w-[90%] h-[90%] object-contain"
          />
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
