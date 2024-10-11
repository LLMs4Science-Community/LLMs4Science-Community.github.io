"use client";

import { PeopleCard } from "./organizers";

const StudentOrganizers = () => {
  const studentOrganizers = [
    {
      name: "Weisen Zhao",
      school: "George Mason University",
      email: "wzhao9@gmu.edu",
      profile: "/aaai2025/images/profile-weisen_zhao.png",
    },
    {
      name: "Yifei Zhang",
      school: "Emory University",
      email: "yifei.zhang2@emory.edu",
      profile: "",
    },
    {
      name: "Ethan Lee",
      school: "Emory University",
      email: "ethan.lee@emory.edu",
      profile: "/aaai2025/images/profile-lee.jpg",
    },
  ];

  return (
    <section
      id="student-organizers"
      className="w-[70vw] mx-auto py-[100px] flex flex-col gap-10"
    >
      <h1 className="text-[40px] font-bold text-neutral-200">
        STUDENT CO-ORGANIZERS
      </h1>

      <div className="flex flex-col gap-10">
        {/* <h2 className="text-[24px] font-bold mb-6">WORKSHOP ORGANIZERS</h2> */}
        <div className="flex flex-wrap gap-6">
          {studentOrganizers.map((person, i) => (
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

export default StudentOrganizers;
