"use client";

import { PeopleCard } from "./organizers";

const Speakers = () => {
  const speakers = [
    {
      name: "Payel Das",
      school: "Trusted AI, IBM Thomas J Watson Research",

      profile: "/aaai2025/images/profile-das.webp",
      link: "https://research.ibm.com/people/payel-das",
    },
    {
      name: "Jian Tang",
      school: "Montreal Institute for Learning Alogorithms (MILA)",

      profile: "/aaai2025/images/profile-tang.jpg",
      link: "https://jian-tang.com/",
    },
    {
      name: "Allison Heath",
      school: "Center for Data Driven Discovery in Biomedicine",

      profile: "/aaai2025/images/profile-heath.webp",
      link: "https://d3b.center/team-members/allison-heath/",
    },
    {
      name: "Yoseph Barash",
      school: "University of Pennsylvania",

      profile: "/aaai2025/images/profile-barash.jpg",
      link: "https://nam11.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.med.upenn.edu%2Fapps%2Ffaculty%2Findex.php%2Fg275%2Fp8507519&data=05%7C02%7Cethan.lee%40emory.edu%7C2f03a3debed841799cc508dd32927bd3%7Ce004fb9cb0a4424fbcd0322606d5df38%7C0%7C0%7C638722326924501936%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=mrHsyRPeonWRMtXtFKgGBMA%2BSUoWFvx7NBwP3NQzJzw%3D&reserved=0",
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
