"use client";

import Image from "next/image";

const Organizers = () => {
  const workshopCommittee = [
    {
      name: "Amarda Shehu",
      school: "George Mason University",
      email: "amarda@gmu.edu",
      profile: "/aaai2025/images/profile-shehu.png"
    },
    {
      name: "Yana Bromberg",
      school: "Emory University",
      email: "yana@bromberglab.org",
      profile: "/aaai2025/images/profile-bromberg.png"
    },
    {
      name: "Liang Zhao",
      school: "Emory University",
      email: "liang.zhao@emory.edu",
      profile: "/aaai2025/images/profile-zhao.png"
    },
  ];

  return (
    <section
      id="organizers"
      className="w-[70vw] mx-auto py-[100px] flex flex-col gap-10"
    >
      <h1 className="text-[40px] font-bold text-neutral-200">GENERAL CO-CHAIRS</h1>

      <div className="flex flex-col gap-10">
        {/* <h2 className="text-[24px] font-bold mb-6">WORKSHOP ORGANIZERS</h2> */}
        <div className="flex flex-wrap gap-6">
          {workshopCommittee.map((person, i) => (
            <PeopleCard
              key={i}
              name={person.name}
              school={person.school}
              email={person.email}
              profile={person.profile}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const PeopleCard = ({ name, school, email, profile }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative bg-neutral-100 size-[160px] rounded-xl overflow-hidden">
        <Image src={profile} alt="" fill className="w-full h-full object-cover" />
      </div>
      <div className="">
        <h3 className="text-[18px] font-semibold mb-1">{name}</h3>
        <p className="text-[14px] m-0 text-neutral-200">{school}</p>
        <p className="text-[14px] m-0 text-neutral-200">{email}</p>
      </div>
    </div>
  );
};

export default Organizers;
