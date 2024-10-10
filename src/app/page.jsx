"use client";

import "./css/style.css";

const App = () => {
  return (
    <>
      <div className="header">
        <a href="./aaai2024">AAAI 2024</a>
        <a href="./aaai2025">AAAI 2025</a>
      </div>

      <div className="title">
        <h1>LLMs4Science</h1>
        <h4>
          an open exchange of ideas to spur foundational research and
          LLM-enabled breakthroughs across scientific disciplines
        </h4>
      </div>

      <div id="intro" className="section">
        <center>
          <p>
            <b>
              The <a href="./aaai2024.html#call4paper">Call for Papers</a> has
              been published
            </b>
          </p>
        </center>
        <h2>Introduction</h2>
        <p>
          Rapid advances in large language models (LLMs) provide an
          unprecedented opportunity to further scientific inquiry across
          scientific disciplines and domains. Despite remarkable feats in
          natural language tasks often exclusively indicative of human
          intelligence, the potential of LLMs beyond natural language has yet to
          be realized. Outstanding challenges in scientific disciplines, such as
          molecular biology, material science, climate science, geology,
          hydrology, and various domains within them, such as drug discovery,
          quantum material design, weather forecasting, and more, necessitate
          the integration of heterogeneous, multi-modal datasets resulting from
          diverse physical processes, as well as the injection of deep domain
          knowledge accumulated over decades of discovery about the inherent
          physical processes that govern the natural and biological world.{" "}
          <br />
          <br />
          <i>Objective:</i> Through this workshop we want to bring together
          diverse communities of researchers for a thoughtful and concerted
          effort at advancing research on LLMs and their integration in
          learning-enabled frameworks. The hope is that by bringing together
          diverse researchers, we will properly formulate problem spaces and the
          proper datasets, standards, and benchmarks of scientific progress to
          support and more, excitingly, to spur scientific breakthroughs across
          diverse scientific disciplines and domains. The proposed workshop will
          be an important medium to leverage synergies and facilitate an open
          exchange of ideas so that the research community can advance both
          foundational research in LLMs, inspired beyond the classNameic NLP
          tasks and perspectives, as well as science-inspired research on
          LLM-enabled scientific breakthroughs across a variety of scientific
          disciplines and domains.
        </p>
      </div>
    </>
  );
};

export default App;
