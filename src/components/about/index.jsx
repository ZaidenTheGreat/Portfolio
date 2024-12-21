import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

// Skills Component with ProgressBars for different skills
const Skills = () => {
  const skills = [
    { name: "Python", level: "Expert", percentage: 100, color: "bg-blue-500" },
    { name: "HTML/CSS", level: "Intermediate", percentage: 100, color: "bg-red-500" },
    { name: "JavaScript", level: "Intermediate", percentage: 75, color: "bg-yellow-500" },
    { name: "C#", level: "Intermediate", percentage: 75, color: "bg-green-500" },
    { name: "Node.js", level: "Beginner", percentage: 50, color: "bg-teal-500" },
    { name: "Three.js", level: "Beginner", percentage: 50, color: "bg-purple-500" },
  ];

  return (
    <ItemLayout className="col-span-full lg:col-span-7 row-span-1 flex-col items-start text-left mt-1">
      <h2 className="text-xl md:text-2xl w-full capitalize">Skills</h2>
      {skills.map((skill) => (
        <div key={skill.name} className="font-light text-xs sm:text-sm md:text-base mt-4 w-full">
          <p className="font-semibold">{skill.name}</p>
          <div className="relative w-full h-6 bg-gray-300 rounded-full overflow-hidden mt-1">
            <div
              className={`absolute top-0 left-0 h-full ${skill.color} rounded-full flex items-center justify-center`}
              style={{ width: `${skill.percentage}%` }}
            >
              <span className="text-white font-semibold text-sm">{skill.level}</span>
            </div>
          </div>
        </div>
      ))}
    </ItemLayout>
  );
};

const AboutMe = () => (
  <ItemLayout className="col-span-full lg:col-span-4 row-span-1 flex-col items-start text-left mt-8">
    <h2 className="text-xl md:text-2xl w-full capitalize">About Me</h2>
    <p className="font-light text-xs sm:text-sm md:text-base mt-4">
      Hello there! My name is Zaiden Patterson, and I'm excited to share a bit about myself with you. Thank you for taking the time to explore my portfolio!
    </p>
    <p className="font-light text-xs sm:text-sm md:text-base mt-4">
      I’m a laid-back yet determined individual who dreams big and works hard to achieve those dreams. Currently, I’m pursuing my bachelor's degree in computer science at Georgia State University, with the ultimate goal of transferring to my dream school, Georgia Tech. I’m actively working on completing the necessary transfer credits to make this ambition a reality.
    </p>
    <p className="font-light text-xs sm:text-sm md:text-base mt-4">
      Space has always fascinated me, and I aspire to earn a master’s degree in computer science to take one giant leap toward my ultimate dream of becoming an astronaut. I aim to contribute to groundbreaking advancements at NASA or explore the dynamic tech world through innovative roles at companies like Roblox, Sony, Microsoft, or FAANG.
    </p>
    <p className="font-light text-xs sm:text-sm md:text-base mt-4">
      In addition to my professional goals, I love anime—especially Dragon Ball Z—and if you’ve enabled background music on this site, you’re listening to Tapion’s theme right now!
    </p>
    <p className="font-light text-xs sm:text-sm md:text-base mt-4">
      Thank you for stopping by and learning more about me. Let’s reach for the stars together!
    </p>
  </ItemLayout>
);


// Organizations Component
const Organizations = () => (
  <ItemLayout className="col-span-full lg:col-span-4 row-span-1 flex-col items-start text-left mt-8">
    <h2 className="text-xl md:text-2xl w-full capitalize">Organizations</h2>
    <div className="font-light text-xs sm:text-sm md:text-base mt-4">
      <p className="font-semibold">Peach State LSAMP</p>
      <p className="font-light">I'm part of the Louis Stokes Alliances for Minority Participation (LSAMP), a program that brings together colleges to promote diversity in STEM. Each semester, I receive a $500 stipend after completing program requirements like 8 hours of community service, peer mentoring, and applying for internships and research opportunities. This experience not only supports my growth in STEM but also helps me contribute to making the field more inclusive.</p>
      <p className="font-semibold mt-4">NSBE</p>
      <p className="font-semibold mt-4">AfroTech</p>
    </div>
  </ItemLayout>
);

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 lg:gap-y-16 w-full">
        
        {/* Experience Section */}
        <ItemLayout className="col-span-full lg:col-span-5 row-span-2 flex-col items-start text-left">
          <h2 className="text-xl md:text-2xl w-full capitalize">Experience</h2>
          <div className="font-light text-xs sm:text-sm md:text-base mt-4 flex justify-between w-full">
            <div>
              <p className="font-semibold">Apia Insurance</p>
              <p className="font-light">May 2023 – August 2023</p>
              <p className="font-semibold mt-1">Help Desk Intern</p>
            </div>
          </div>
          <ul className="font-light text-xs sm:text-sm md:text-base list-disc ml-5 mt-2">
            <li>Provided technical support to over 100 users, resolving software, hardware, and network issues efficiently.</li>
            <li>Utilized ticketing systems to track and document issues, achieving a 90%+ resolution rate within the first response.</li>
            <li>Assisted in cybersecurity practices by identifying and escalating potential security threats, ensuring data protection.</li>
          </ul>
          <div className="font-light text-xs sm:text-sm md:text-base mt-6">
            <p className="font-semibold">Studio Aspen</p>
            <p className="font-light">2024–2025</p>
            <p className="font-semibold mt-1">Programming Team Member, Combat & Movement Systems Developer</p>
          </div>
          <ul className="font-light text-xs sm:text-sm md:text-base list-disc ml-5 mt-2">
            <li>Contributed to a 65-person team in creating a video game, specializing in the programming team.</li>
            <li>Developed and optimized the combat stacking system and movement mechanics using C#, enhancing gameplay fluidity and responsiveness.</li>
            <li>Collaborated with designers and other programmers to ensure cohesive integration of core game mechanics and alignment with project objectives.</li>
          </ul>
        </ItemLayout>

        {/* Skills Section */}
        <Skills />

        {/* Tech Stack Icons Section */}
        <ItemLayout className="col-span-full mt-8">
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="Tech Stack Icons"
            loading="lazy"
          />
        </ItemLayout>

        {/* Education Section */}
        <ItemLayout className="col-span-full lg:col-span-4 row-span-1 flex-col items-start text-left mt-8">
          <h2 className="text-xl md:text-2xl w-full capitalize">Education</h2>
          <div className="font-light text-xs sm:text-sm md:text-base mt-4">
            <p className="font-semibold">Georgia State University</p>
            <p className="font-light">2023 - 2027</p>
            <p className="font-semibold mt-1">Bachelor's Degree in Computer Science</p>
            <p className="font-semibold mt-1">Relevent Course Work</p>
            <p className="font-light">CSC 1301</p>
          </div>
        </ItemLayout>

        {/* Organizations Section */}
        <Organizations />

        {/* About Me Section */}
        <AboutMe />
      </div>
    </section>
  );
};

export default AboutDetails;
