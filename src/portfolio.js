/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  title: "Hi, I'm Kunwar Raghunandan Singh",
  logo_name: "Kunwar",
  subTitle: "Food Technologist | Blogger | Consultant | FSMS Expert",
  resumeLink: "https://drive.google.com/file/d/1QEicv34yZKnKALG-1RJQ_XeTZ2tNGLih/view",
  portfolio_repository: "https://github.com/kraghunandansingh/kraghunandansingh.github.io",
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kraghunandansingh",
  linkedin: "https://www.linkedin.com/in/your-linkedin", // apna actual daal dena
  gmail: "your.email@gmail.com", // apna email
  facebook: "https://facebook.com/your-facebook", // optional
};

// Skills Section

const skills = {
  data: [
    {
      title: "Food Industry & Quality Systems",
      skills: [
        "⚡ Food Safety, GMP, GHP, HACCP, FSMS Implementation",
        "⚡ Amazon FBA, Compliance & Licensing Support",
        "⚡ BRC, ISO 22000, FSSAI Guidance & Training",
      ],
    },
    {
      title: "Tech Tools & Online Systems",
      skills: [
        "⚡ Basic HTML, GitHub, Domain Linking",
        "⚡ Canva, Google Docs, Google Drive",
        "⚡ Shopify, Amazon Seller, WordPress (beginner)",
      ],
    },
    {
      title: "Entrepreneurship & Business Setup",
      skills: [
        "⚡ FSSAI, FPO Registration Consulting",
        "⚡ Low-cost machinery guidance for food processing",
        "⚡ Setting up mini plants for flour, dehydration, dairy"
      ],
    }
  ],
};

const contactInfo = {
  title: "Contact Me",
  subtitle: "Discuss a project, consultation, or just say hi!",
  email_address: "raghunandansingh17@gmail.com", //
};

// Twitter Section

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
