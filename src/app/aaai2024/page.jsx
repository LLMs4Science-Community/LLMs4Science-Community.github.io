"use client";

import "../css/style.css";
import "../css/neurips23style.css";

const Aaai2024 = () => {
  return (
    <>
      <div className="header">
        <a href="#about">About</a>
        <a href="#program">Program</a>

        <a href="#keynoteInvite">Keynote Speakers</a>
        <a href="#organizers">Organizers</a>
        <a href="#student-co-organizers">Student Co-organizers</a>

        <a href="/" id="backbutton">
          LLMs4Bio
        </a>
      </div>

      <div className="title">
        <h1>AAAI 2024: LLMs4Bio</h1>
        <h4>
          An open exchange of ideas to spur foundational research and
          LLM-enabled biological discoveries
        </h4>
      </div>

      <div id="about" className="section">
        <h2>About</h2>
        <p>
          Rapid advances in large language models (LLMs) provide an
          unprecedented opportunity to further scientific inquiry across
          scientific disciplines and domains. Despite remarkable feats in
          natural language tasks often exclusively indicative of human
          intelligence, the potential of LLMs beyond natural language has yet to
          be realized. Outstanding challenges in diverse scientific disciplines,
          such as molecular biology, material science, climate science, geology,
          hydrology, and various domains within them, such as drug discovery,
          quantum material design, weather forecasting, and more, necessitate
          the integration of heterogeneous, multi-modal datasets resulting from
          diverse physical processes, as well as the injection of deep domain
          knowledge accumulated over decades of discovery about the inherent
          processes that govern the natural and biological world. This workshop
          brings together diverse researchers from various disciplines to
          formulate problem spaces, datasets, standards, benchmarks, and spur
          innovation on accessible and inclusive LLMs to power the next
          scientific breakthroughs.
        </p>
        <p>
          <b>
            The <a href="#call4paper">Call for Papers</a> has been published
          </b>
        </p>
      </div>

      <div id="program" className="section">
        <h2>Program</h2>
        <table className="main_table">
          <tbody>
            <tr>
              <td className="table_title">Opening Remarks</td>
              <td className="time">1:55PM – 2:00PM </td>
            </tr>

            <tr>
              <td>
                <span className="table_title">Keynote Remarks</span> <br />
                <i>Sorin Draghici, NSF CISE:IIS:III Program Director.</i>{" "}
                <b>
                  Molecular Biology Research at the National Science Foundation:
                  An Information and Intelligent Systems Perspective.
                </b>
              </td>
              <td className="time">2:00PM – 2:20PM </td>
            </tr>

            <tr>
              <td>
                <span className="table_title">Session I: Genomics</span>
                <div className="mini_table">
                  <tr>
                    <td>
                      <b>Invited Talk:</b> <i>Davuluri Ramana</i>
                    </td>
                    <td className="mini_time">20 mins</td>
                  </tr>

                  <tr>
                    <td>
                      <b>P1.</b>
                      <i>Jim Clauwaert</i>, Zahra McVey, Ramneek Gupta, John
                      Prensner and Gerben Menschaert.{" "}
                      <b>
                        <a
                          href="/aaai2024/papers/LLMs4Bio24_paper_1.pdf"
                          target="_blank"
                        >
                          RIBO-former: applying attention-based neural networks
                          for precise delineation of translated open reading
                          frames using ribosome profiling data.
                        </a>
                      </b>
                    </td>
                    <td className="mini_time">10 mins</td>
                  </tr>

                  <tr>
                    <td>
                      <b>P2.</b> <i>Bernardo de Almeida</i> and Thomas Pierrot.{" "}
                      <b>
                        <a
                          href="/aaai2024/papers/LLMs4Bio24_paper_11.pdf"
                          target="_blank"
                        >
                          Large Language Models for Genomics.
                        </a>
                      </b>
                    </td>
                    <td className="mini_time">10 mins</td>
                  </tr>

                  <tr>
                    <td>
                      <b>P3.</b> <i>Evan Trop</i>, Chia-Hsiang Kao, Mckinley
                      Polen, Yair Schiff, Bernardo P. de Almeida, Aaron
                      Gokaslan, Thomas Pierrot and Volodymyr Kuleshov.{" "}
                      <b>
                        <a
                          href="/aaai2024/papers/LLMs4Bio24_paper_12.pdf"
                          target="_blank"
                        >
                          Advancing DNA Language Models: The Genomics Long-Range
                          Benchmark.
                        </a>
                      </b>
                    </td>
                    <td className="mini_time">7 mins</td>
                  </tr>

                  <tr>
                    <td>
                      <b>P4.</b> <i>Sam Boshar</i>, Evan Trop, Bernardo P. de
                      Almeida and Thomas Pierrot.{" "}
                      <b>
                        <a
                          href="/aaai2024/papers/LLMs4Bio24_paper_14.pdf"
                          target="_blank"
                        >
                          Are Genomic Language Models All You Need ? Exploring
                          Genomic Language Models on Protein Downstream Tasks.
                        </a>
                      </b>
                    </td>
                    <td className="mini_time">7 mins</td>
                  </tr>

                  <tr>
                    <td>
                      <b>PANEL with Q&A for presenting authors of papers</b>
                    </td>
                    <td className="mini_time">15 mins</td>
                  </tr>
                </div>
              </td>
              <td className="time">2:20PM – 3:30PM </td>
            </tr>

            <tr>
              <td>
                <span className="table_title">Session II: Proteomics</span>
                <div className="mini_table">
                  <tr>
                    <td>
                      <b>P5.</b> <i>Asher Moldwin</i>, Anowarul Kabir, and
                      Amarda Shehu.{" "}
                      <b>
                        <a
                          href="/aaai2024/papers/LLMs4Bio24_paper_13.pdf"
                          target="_blank"
                        >
                          A More Informative and Reproducible Remote Homology
                          Evaluation for Protein Language Models.
                        </a>
                      </b>
                    </td>
                    <td className="mini_time">10 mins</td>
                  </tr>

                  <tr>
                    <td>
                      <b>P6.</b> <i>Amitesh Badkul</i>, Li Xie, Shuo Zhang and
                      Lei Xie.{" "}
                      <b>
                        <a
                          href="/aaai2024/papers/LLMs4Bio24_paper_8.pdf"
                          target="_blank"
                        >
                          Trustworthy protein-ligand binding affinity prediction
                          using large protein language model
                        </a>
                      </b>
                    </td>
                    <td className="mini_time">10 mins</td>
                  </tr>

                  <tr>
                    <td>
                      <b>P7.</b> <i>Shuo Zhang</i> and Lei Xie.{" "}
                      <b>
                        <a
                          href="/aaai2024/papers/LLMs4Bio24_paper_3.pdf"
                          target="_blank"
                        >
                          Protein Large Language Model-Powered 3D Ligand Binding
                          Site Prediction from Protein Sequence.
                        </a>
                      </b>
                    </td>
                    <td className="mini_time">10 mins</td>
                  </tr>
                  <tr>
                    <td>
                      <b>PANEL with Q&A for presenting authors of papers</b>
                    </td>
                    <td className="mini_time">15 mins</td>
                  </tr>
                </div>
              </td>
              <td className="time">3:30PM – 4:15PM</td>
            </tr>

            <tr>
              <td>
                <span className="table_title">
                  Session III: Bio & ChemInformatics
                </span>
                <div className="mini_table">
                  <tr>
                    <td>
                      <b>Invited Talk:</b> <i>Aidong Zhang</i>
                    </td>
                    <td className="mini_time">20 mins</td>
                  </tr>

                  <tr>
                    <td>
                      <b>P8.</b> <i>Amir Shariatmadari</i> and Aidong Zhang.{" "}
                      <b>
                        <a
                          href="/aaai2024/papers/LLMs4Bio24_paper_10.pdf"
                          target="_blank"
                        >
                          Harnessing the Power of Knowledge Graphs to Enhance
                          LLM Explainability in the BioMedical Domain.
                        </a>
                      </b>
                    </td>
                    <td className="mini_time">10 mins</td>
                  </tr>

                  <tr>
                    <td>
                      <b>P9.</b> <i>Jiayu Chang</i>, Shiyu Wang, Chen Ling,
                      Zhaohui Qin and Liang Zhao.{" "}
                      <b>
                        <a
                          href="/aaai2024/papers/LLMs4Bio24_paper_17.pdf"
                          target="_blank"
                        >
                          Gene-associated Disease Discovery Powered by Large
                          Language Models.
                        </a>
                      </b>
                    </td>
                    <td className="mini_time">10 mins</td>
                  </tr>

                  <tr>
                    <td>
                      <b>P10.</b> <i>Xiuyuan Hu</i>, Guoqing Liu, Yang Zhao and
                      Hao Zhang.{" "}
                      <b>
                        <a
                          href="/aaai2024/papers/LLMs4Bio24_paper_2.pdf"
                          target="_blank"
                        >
                          Empirical Evidence for the Fragment level
                          understanding on Drug Molecular Structure of LLMs.
                        </a>
                      </b>
                    </td>
                    <td className="mini_time">10 mins</td>
                  </tr>

                  <tr>
                    <td>
                      <b>P11.</b> <i>Gaetan De Waele</i>, Anneleen D Wieme,
                      Gerben Menschaert, Peter Vandamme and Willem Waegeman.{" "}
                      <b>
                        <a
                          href="/aaai2024/papers/LLMs4Bio24_paper_9.pdf"
                          target="_blank"
                        >
                          Transformers for MALDI-TOF mass spectra.
                        </a>
                      </b>
                    </td>
                    <td className="mini_time">7 mins</td>
                  </tr>

                  <tr>
                    <td>
                      <b>P12.</b> <i>Xinyang Liu</i>, Bowei Fang, Ping Zhang, Bo
                      Chen and Huaxiu Yao.{" "}
                      <b>
                        <a
                          href="/aaai2024/papers/LLMs4Bio24_paper_4.pdf"
                          target="_blank"
                        >
                          MolGuide: 2D Molecular Optimization with Preserved
                          Structural Motifs Guidance.
                        </a>
                      </b>
                    </td>
                    <td className="mini_time">7 mins</td>
                  </tr>

                  <tr>
                    <td>
                      <b>PANEL with Q&A for presenting authors of papers</b>
                    </td>
                    <td className="mini_time">20 mins</td>
                  </tr>
                </div>
              </td>
              <td className="time">4:15PM - 5:40PM</td>
            </tr>

            <tr>
              <td className="table_title">
                Moderated Discussion with all Participants
              </td>
              <td className="time">5:40PM – 6:00PM</td>
            </tr>

            <tr>
              <td className="table_title">Concluding Remarks</td>
              <td className="time">6:00PM</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="keynoteInvite" className="section">
        <h2>Keynote Speakers</h2>
        <div id="keynote-speakers">
          <div id="keynote" className="subsection">
            <div className="speaker">
              <img
                src="/aaai2024/images/InvitedSpeakers/Panel-II/sorindraghici.png"
                alt="Sorin Draghici"
              />
              <h3>
                <a href="https://engineering.wayne.edu/profile/ad3147">
                  Sorin Draghici
                </a>
              </h3>
              <p>Professor, Wayne State University</p>
            </div>
            <div className="speaker">
              <img
                src="/aaai2024/images/InvitedSpeakers/Panel-II/aidongzhang.png"
                alt="Aidong Zhang"
              />
              <h3>
                <a href="https://www.cs.virginia.edu/~az9eg/website/home.html">
                  Aidong Zhang
                </a>
              </h3>
              <p>Thomas M. Linville Professor, University of Virginia</p>
            </div>
            <div className="speaker">
              <img
                src="/aaai2024/images/InvitedSpeakers/Panel-II/RamanaDaluvuri.png"
                alt="Ramana Daluvuri"
              />
              <h3>
                <a href="https://bmi.stonybrookmedicine.edu/people/ramana_davuluri">
                  Ramana Daluvuri
                </a>
              </h3>
              <p>Professor, Stony Brook</p>
            </div>
          </div>
        </div>
      </div>

      <div id="organizers" className="section">
        <h2>Organizers</h2>
        <div id="organizer-list">
          <div className="organizer">
            <img
              src="/aaai2024/images/Organizers/Shehu-small.png"
              alt="Amarda Shehu"
            />
            <div className="org_content">
              <h3>
                <a href="https://cs.gmu.edu/~ashehu/" className="org_name">
                  Dr. Amarda Shehu
                </a>
              </h3>
              <p>
                Professor, Associate Dean of Engineering for AI Innovation and
                Associate Vice President of Research, George Mason University
              </p>
              <p>
                Dr. Amarda Shehu is a Professor in the Department of Computer
                Science at George Mason University, where she is also Associate
                Dean of Engineering for AI Innovation and Associate Vice
                President of Research for the Institute of Digital InnovAtion.
                Shehu obtained her Ph.D. from Rice University in 2008, where she
                was also an NIH predoctoral fellow in the Nanobiology Program
                and was dually trained in AI and Molecular Biophysics.
                Shehu&apos;s research bridges foundational AI research and AI in
                support of progress across scientific disciplines. Her
                scholarship includes work at the intersection of stochastic
                optimization, planning, deep learning, optimization for deep
                learning, bioinformatics, health informatics, applied NLP, and
                more. She is a 2022 Fellow of the American Institute for Medical
                and Biological Engineering (AIMBE) and is passionate about
                bridging scientific communities. She regularly delivers keynotes
                and invited talks (IEEE BIBM 2022, BIOKDD 2021, ICCABS 2020,
                etc.), organizes tutorials and workshops in ACM and IEEE
                bioinformatics and evolutionary computation conferences, and
                journal collections and special issues (PLoS Comput Biol, Curr
                Opin Struct Biol, Molecules, Intl J Mol Sci, etc.) to advance
                transdisciplinary research. Shehu also served as Program
                Director in the CISE directorate at NSF 2019-2022 during which
                time she galvanized various sub-communities of CISE, BIO, CHEM,
                and ENG researchers in transdisciplinary research, education
                programs, and workshops. She has extensive expertise bringing
                together silo-ed communities together in workshops (Women @
                GECCCO, CSBW, AAAI Workshops, etc.), with a strong emphasis on
                integration and leadership for historically-minoritized
                researchers.
              </p>
              <p>
                <a href="mailto:amarda@gmu.edu">amarda@gmu.edu</a>
              </p>
            </div>
          </div>
          <div className="organizer">
            <img
              src="/aaai2024/images/Organizers/Yana.png"
              alt="Yana Bromberg"
            />
            <div className="org_content">
              <h3>
                <a
                  href="https://www.cs.emory.edu/people/faculty/individual.php?NUM=767"
                  className="org_name"
                >
                  Dr. Yana Bromberg
                </a>
              </h3>
              <p>
                Professor, Departments of Computer Science and Biology, Emory
                University, Hans Fischer Fellow, Institute for Advanced Study,
                Technical University of Munich
              </p>
              <p>
                Dr. Yana Bromberg is a Professor in the Departments of Computer
                Science and Biology at Emory University and a Hans Fischer
                Fellow at the Institute for Advanced Study in the Technical
                University of Munich. She is a noted researcher in computational
                molecular biology. A former NLM Biomedical Informatics doctoral
                student, she is trained in molecular biology and bioinformatics.
                She is known for her work in annotation of genome variant-caused
                functional changes, tracking of microbiome functional shifts due
                to environmental pressures, and exploration of protein
                structures at the origins of life. Her seminal SNAP method, the
                first neural network-based tool for predicting functional
                impacts of single amino acid substitutions has enabled novel
                variant assessment methods and whole genome analyses and methods
                for mapping genetic architectures of disease. Bromberg has
                advanced computational annotation, prediction, and analysis of
                protein functionality, establishing the library of protein folds
                at the origins of life. Her exploration of the microbial world
                has led to advances in understanding molecular functional
                diversity carried out by individual microbes and emergent
                functionality in microbial communities. Bromberg is a director
                of the International Society for Computational Biology and has
                filled a number of leading roles in the organization of ISMB --
                the society&apos;s annual flagship conference. She consistently
                delivers keynotes and invited talks at national and
                international conferences (ISMB, GRC, etc.) and lectures at
                relevant workshops and courses (STAMPs workshop @MBL, the
                University of Bologna International Masters Bioinformatics
                program, etc.)
              </p>
              <p>
                <a href="mailto:yana@bromberglab.org">yana@bromberglab.org</a>
              </p>
            </div>
          </div>
          <div className="organizer">
            <img src="/aaai2024/images/Organizers/Liang.png" alt="Liang Zhao" />
            <div className="org_content">
              <h3>
                <a href="https://cs.emory.edu/~lzhao41/" className="org_name">
                  Dr. Liang Zhao
                </a>
              </h3>
              <p>
                Associate Professor, Department of Computer Science, Emory
                University
              </p>
              <p>
                Dr. Liang Zhao is an Associate Professor in the Department of
                Computer Science at Emory University with extensive experience
                in spatiotemporal data mining, network modeling, deep learning,
                interpretable machine learning, and nonconvex and distributed
                optimization. His work is published at top conferences/journals,
                including KDD, NeurIPS, ICLR, ICDM, AAAI, IJCAI, WWW, TKDE,
                CSUR, PIEEE, and TPAMI. He received the NSF CAREER Award, Amazon
                Research Award, Meta Research Award, Cisco Faculty Research
                Award, and Jeffress Trust Award. His paper on deep subgraph
                anomaly detection won the Best Paper Award in ICDM 2022. His
                paper on interpretable representation learning is among the Best
                Paper Shortlist in WWW 2021. He has also won Best Paper
                Runner-up and Best Paper Candidate in ACM SIGSPATIAL 2022. His
                paper on deep graph transformation and applications on molecule
                reaction prediction won the Best Paper Award in ICDM 2019. His
                recent book &quot;Graph Neural Network: Foundations, Frontiers,
                and Applications&quot; received over 100K accesses in the
                publisher Springer link&apos;s website. Its Chinese version has
                won Best-Seller Award from Post \& Telecom Press. Zhao has
                disseminated over 30 software tools and numerous datasets.{" "}
              </p>
              <p>
                <a href="mailto:liang.zhao@emory.edu">liang.zhao@emory.edu</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="student-co-organizers" className="section">
        <h2>Student Co-Organizers</h2>
        <h3>George Mason University</h3>
        <div id="GeorgeMasonUniversity" className="subsection">
          <div className="speaker">
            <img
              src="/aaai2024/images/StudentOrganizers/Sam.png"
              alt="Samuel Blouir"
            />
            <h3>
              <a href="https://www.linkedin.com/in/samblouir/">Samuel Blouir</a>
            </h3>
            <p>Role: Speaker Engagement</p>
          </div>
          <div className="speaker">
            <img
              src="/aaai2024/images/StudentOrganizers/Anowarul.png"
              alt="Anowarul Kabir"
            />
            <h3>
              <a href="https://www.linkedin.com/in/anowarul-kabir-25b0021b5/">
                Anowarul Kabir
              </a>
            </h3>
            <p>Role: PC Engagement</p>
          </div>
          <div className="speaker">
            <img
              src="/aaai2024/images/StudentOrganizers/Manpriya.png"
              alt="Manpriya Dua"
            />
            <h3>
              <a href="https://www.linkedin.com/in/mdua/">Manpriya Dua</a>
            </h3>
            <p>Role: DEI Ambassador</p>
          </div>
          <div className="speaker">
            <img
              src="/aaai2024/images/StudentOrganizers/Asher.jpg"
              alt="Asher Moldwin"
            />
            <h3>
              <a href="https://www.linkedin.com/in/asher-moldwin-8665519b/">
                Asher Moldwin
              </a>
            </h3>
            <p>Role: Social Media</p>
          </div>
        </div>
        <h3>Emory University</h3>

        <div id="EmoryUniversity" className="subsection">
          <div className="speaker">
            <img src="/aaai2024/images/StudentOrganizers/Bo.png" alt="Bo Pan" />
            <h3>
              <a href="https://pb0316.github.io/">Bo Pan</a>
            </h3>
            <p>Role: DEI Ambassador</p>
          </div>
          <div className="speaker">
            <img
              src="/aaai2024/images/StudentOrganizers/Yijun.png"
              alt="Yijun Liu"
            />
            <h3>
              <a href="http://liuyijun.com">Yijun Liu</a>
            </h3>
            <p>Role: Workshop Website</p>
          </div>
          <div className="speaker">
            <img
              src="/aaai2024/images/StudentOrganizers/Chen.png"
              alt="Chen Ling"
            />
            <h3>
              <a href="https://lingchen0331.github.io/">Chen Ling</a>
            </h3>
            <p>Role: Social Media</p>
          </div>
          <div className="speaker">
            <img
              src="/aaai2024/images/StudentOrganizers/Praba.png"
              alt="Prabakaram Ram"
            />
            <h3>
              <a href="https://www.linkedin.com/in/prabakaran-ramakrishnan-87792418/?originalSubdomain=in">
                R. Prabakaran
              </a>
            </h3>
            <p>Role: PC Engagement</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aaai2024;
