"use client";

import program from "./programs.json";

const Program = () => {
  const details = [
    {
      title: "SUBMISSION",
      content: `
        <p>To reflect the disciplinary diversity, we will encourage submissions of varying length:</p>
        <ul>
          <li>1-page position papers</li>
          <li>4-page papers on breaking results, datasets, benchmark</li>
          <li>6-8-page papers on more detailed investigations</li>
          <li>10-page surveys on topics aligned with the theme of the workshop</li>
        </ul>
        <p>
          Each manuscript should be submitted in a single PDF file, including all content, 
          figures, tables, and references, following the format of AAAI conference papers. 
          Paper submissions need to include author information (reviews are not double-blinded).
          References do not counts towards page limit.
        </p>
        <p>
          <b>
            Papers should be submitted at:
            <a href="https://easychair.org/conferences/?conf=fms4bio25" target="_blank">https://easychair.org/conferences/?conf=fms4bio25</a>.
          </b>
        </p>
        <p>
          Concurrent submissions to other journals and conferences are acceptable. 
          Accepted papers will be presented as posters or short talks during the workshop and 
          published on the workshop website at 
          <a href="https://llms4science-community.github.io/aaai2025" target="_blank">https://llms4science-community.github.io/aaai2025</a>. 
          We encourage authors of accepted papers to submit datasets at <a href="https://github.com/LLMs4Science-Community" target="_blank">https://github.com/LLMs4Science-Community</a>. 
          Selected accepted papers will be presented as contributed talks. 
          As a tradition, accepted workshop papers are NOT included in the ACM Digital Library. 
          The authors maintain the copyright of their papers. Author enquiries should be directed 
          at llms4science@gmail.com.
        </p>
      `,
    },
    {
      title: "IMPORTANT DATES",
      content: `
        <p>
          Following are the key dates for the workshop. All deadlines are “anywhere on earth” (UTC-12).
        </p>
        <ul>
          <li>
            Paper submission deadline: December 2, 2024
          </li>
          <li>
            Notification of decision: December 13, 2024
          </li>
          <li>
            Early AAAI 2025 Registration Deadline: December 19, 2024
          </li>
          <li>
            Workshop Day: March 4, 2024
          </li>
        </ul>
      `,
    },
    {
      title: "ATTENDANCE",
      content: `
        <p>
         For each accepted paper, at least one author must attend the conference and 
         present their work. Authors of all accepted papers must prepare a final version for 
         publication and a three-minute short video presentation (further details will be provided in the 
         acceptance notification).
        </p>
      `,
    },
    { title: "SCHEDULE" },
  ];

  return (
    <section
      id="program"
      className="w-[70vw] mx-auto py-[100px] flex flex-col gap-6"
    >
      <h1 className="text-[40px] font-bold text-neutral-200">PROGRAM</h1>

      {/* DETAILS */}
      <div className="flex flex-col">
        {details.map((detail, i) => (
          <Detail key={i} title={detail.title} content={detail.content} />
        ))}
      </div>

      {/* SCHEDULE */}
      <div className="flex flex-col gap-4">
        {program.map((item, index) => (
          <ScheduleUnit key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export const Detail = ({ title, content }) => {
  return (
    <div className="border-t-2 border-neutral-100 overflow-hidden">
      <div className="flex gap-3 items-center py-[24px]">
        <h2 className="text-[24px] font-bold">{title}</h2>
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export const ScheduleUnit = ({ item, level = 0 }) => {
  return (
    <div
      style={{
        borderColor: level === 0 ? "#a0a0a0" : "#dfdfdf",
      }}
      className="border-l-[4px] pl-5"
    >
      <p
        style={{ fontStyle: level === 0 ? "normal" : "italic" }}
        className="font-bold text-neutral-200 text-sm mb-1"
      >
        {item.time}
      </p>
      {item.title && (
        <h3 className="text-lg font-semibold m-0">{item.title}</h3>
      )}
      {typeof item.detail === "string" ? (
        <p className="text-base m-0">{item.detail}</p>
      ) : (
        <div className="flex flex-col gap-4">
          {item.detail.map((subitem, index) => (
            <ScheduleUnit key={index} item={subitem} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Program;
