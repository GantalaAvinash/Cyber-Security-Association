'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Insights = () => {
  const [data, setData] = useState([]);
  const baseUrl = 'http://localhost:1438/api/getevent/';
  useEffect(() => {
    axios.get(baseUrl)
      .then((response) => {
        setData(response.data.event);
      })
      .catch((error) => { console.error(error); });
  });
  return (
  <section className={`${styles.paddings} relative z-10` } id='events'>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Events" textStyles="text-center" />
      <TitleText title={<>EVENTS</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {data.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
  );
};

export default Insights;
