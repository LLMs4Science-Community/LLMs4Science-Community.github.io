"use client";

import { PeopleCard } from "./organizers";

const Speakers = () => {
  const speakers = [
    {
      name: "Allison Heath",
      school: "Center for Data Driven Discovery in Biomedicine",

      profile: "/aaai2025/images/profile-heath.webp",
      link: "https://d3b.center/team-members/allison-heath/",
    },
    {
      name: "Jian Tang",
      school: "Montreal Institute for Learning Alogorithms (MILA)",

      profile: "/aaai2025/images/profile-tang.jpg",
      link: "https://jian-tang.com/",
    },
    {
      name: "Payel Das",
      school: "Trusted AI, IBM Thomas J Watson Research",

      profile: "/aaai2025/images/profile-das.webp",
      link: "https://research.ibm.com/people/payel-das",
    },
  ];

  return (
    <section
      id="speakers"
      className="w-[70vw] mx-auto py-[100px] flex flex-col gap-10"
    >
      <h1 className="text-[40px] font-bold text-neutral-200">
        KEYNOTE SPEAKERS
      </h1>

      <div className="flex flex-wrap gap-6">
        {speakers.map((person, i) => (
          <PeopleCard
            key={i}
            name={person.name}
            school={person.school}
            profile={person.profile}
            link={person.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Speakers;
