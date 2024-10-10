"use client";

const Program = () => {
  const details = [
    {
      title: "FORMAT",
      content: `
        <p>The workshop is planned for a <strong>full day</strong>.</p>
        <p>
          We will structure it into sessions aligned with distinct research themes. 
          Each session will open with a featured invited talk, with the rest focusing on presentations by authors of accepted papers.
          These will vary in length depending on the submission type and reviewer feedback.
          A final session will contain a panel discussion by senior and up-and-coming researchers, focusing on next steps for the community.
        </p>
      `,
    },
    {
      title: "ATTENDANCE",
      content: `
        <p>Invited speakers and other attendees will fall into three groups:</p>
        <ul>
          <li>Foundational AI researchers</li>
          <li>Biological researchers that have started to utilize FMs</li>
          <li>Biological researchers with a track record in ML but not FMs</li>
        </ul>
        <p>
          Based on our first offering at AAAI 2024, which focused on LLMs, successful workshop at AAAI 2024, we expect to attract at least 75 attendees.
          We do not expect to exceed 100 attendees.
        </p>
      `,
    },
    {
      title: "SUBMISSION",
      content: `
        <p>To reflect the disciplinary diversity, we will encourage submissions of varying length:</p>
        <ul>
          <li>1-page position papers</li>
          <li>4-page papers with focus on breaking results, datasets, benchmarks</li>
          <li>6-8-page papers for more detailed investigations</li>
        </ul>
        <p>For author submission inquiries, please contact us at <strong>llms4science@gmail.com.</strong></p>
      `,
    },
  ];

  return (
    <section
      id="program"
      className="w-[70vw] mx-auto py-[100px] flex flex-col gap-10"
    >
      <h1 className="text-[40px] font-bold text-neutral-100">PROGRAM</h1>
      <div className="flex flex-col">
        {details.map((detail, i) => (
          <Detail key={i} title={detail.title} content={detail.content} />
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

export default Program;
