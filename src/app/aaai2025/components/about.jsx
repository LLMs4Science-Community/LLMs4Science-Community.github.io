"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Detail } from "./program";

const About = () => {

  const topics = {
    title: "TOPICS",
    content: `
        <p>In addition to the following research themes, we encourage novel contributions from researchers that bring different perspectives on the core focus of the workshop:</p>
        <ul>
          <li>Learning from Incomplete Data of Different Modalities</li>
          <li>Grounding Foundation Models in Knowledge Beyond the Data</li>
          <li>Reconciling Disparate Spatio-temporal scale and Varying Fidelity in Multimodal Data</li>
          <li>Beyond Prediction: Answering the How and the Why</li>
          <li>Quantifying Confidence of Predictions with Foundation Models</li>
        </ul>
      `,
  };

  return (
    <section
      id="about"
      className="w-[70vw] mx-auto pb-[100px] flex flex-col gap-10"
    >
      <h1 className="text-[32px] font-extrabold text-center mt-[200px]">
        <span className="block text-neutral-200 mb-4">AAAI 2025</span>
        <span>FOUNDATION MODELS FOR BIOLOGICAL DISCOVERIES</span>
      </h1>
      <div className="w-full flex justify-center gap-2 mb-[100px]">
        <Link
          href="https://easychair.org/conferences/?conf=fms4bio25"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ opacity: 0.7 }}
            className="px-5 py-3 bg-black text-white rounded-xl text-[18px] font-medium w-fit"
          >
            SUBMIT PAPER
          </motion.div>
        </Link>
        <Link
          href="https://github.com/LLMs4Science-Community"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ borderColor: "#000" }}
            className="px-5 py-3 bg-white text-black rounded-xl text-[18px] font-medium w-fit border border-neutral-100"
          >
            ACCEPTED PAPERS
          </motion.div>
        </Link>
      </div>

      <h1 className="text-[40px] font-bold text-neutral-200">ABOUT</h1>
      <div>
        <p>
          Foundation models (FMs) have transformed natural language
          understanding and computer vision. In particular, research on LLMs and
          multi-modal LLMs in these two domains is progressing rapidly, and this
          progress is starting to permeate a broad range of scientific
          disciplines. In this second offering of our workshop, our focus is on
          FMs for advancing biological discoveries. Current efforts have
          revealed that indeed FMs are advancing our ability to conduct
          biological research in silico, formulate interesting hypotheses and
          even design novel molecules, but biology remains complex and is
          ultimately a multi-systems discipline. Biology occurs when molecules
          come together, governed by an underlying physics advancing processes
          that occur at disparate spatio-temporal scales, only probed in the wet
          laboratories at different conditions, at different granularities, at
          different levels of fidelity, and incompletely. This workshop poses
          and advances the following question: How can we advance FMs to
          transform biological research? This workshop brings together an
          interdisciplinary community of researchers at various levels of their
          career to nucleate a community that advances this question.
        </p>
      </div>

      <Detail title={topics.title} content={topics.content} />
    </section>
  );
};

export default About;
