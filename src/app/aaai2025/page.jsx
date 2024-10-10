"use client";

import About from "./components/about";
import Program from "./components/program";
import Organizers from "./components/organizers";
import Speakers from "./components/speakers";
import StudentOrganizers from "./components/studentOrganizers";
import Nav from "./components/nav";

const Aaai2025 = () => {
  return (
    <>
      <Nav />
      <About />
      <Program />
      <Speakers />
      <Organizers />
      <StudentOrganizers />
    </>
  );
};

export default Aaai2025;
