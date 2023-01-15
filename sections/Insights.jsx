'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Insights = () => {
  // const [data, setData] = useState([]);
  // const baseUrl = 'https://csa-backend-iuwv.onrender.com/api/getevent';
  // useEffect(() => {
  //   axios.get(baseUrl)
  //     .then((response) => {
  //       setData(response.data.event);
  //     })
  //     .catch((error) => { console.error(error); });
  // });
  return (
    <section className={`${styles.paddings} relative z-10`} id="events">
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
          {insights.map((item, index) => (
            <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
          ))}
        </div>
        <Link href="/events" className="cursor-pointer mx-auto">
          <button href="/events" type="button" className="cursor-pointer mx-auto mt-[60px] mb-[60px] bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Show More..
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Insights;
