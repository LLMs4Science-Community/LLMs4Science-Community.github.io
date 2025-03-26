'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import data from './data.json';

const Papers = () => {
  const str = `${1}`;
  return (
    <div className="w-[70vw] mx-auto pb-[100px] flex flex-col gap-10">
      <h1 className="mt-40 text-[40px] font-bold text-neutral-200">
        ACCEPTED PAPERS
      </h1>
      <ul className="list-none p-0">
        {data.map((paper) => (
          <motion.li
            key={paper.id}
            whileHover={{ borderColor: '#000000' }}
            transition={{ duration: 0.3, ease: 'linear' }}
            className="border border-neutral-100 rounded-xl mb-4"
          >
            <Link
              href={`/aaai2025/papers/FMs4Bio25_paper_${paper.id}.pdf`}
              target="_blank"
              className="text-black no-underline flex flex-col gap-2 p-4"
            >
              <h3 className="text-base m-0">{paper.title}</h3>
              <p className="text-neutral-200 text-sm m-0">
                {paper.author.join(', ')}
              </p>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Papers;
