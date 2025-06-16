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
  username: "Anmol Kumar",
  title: "Hi all, I'm Anmol",
  subTitle: emoji(
    "iOS Developer with 1+ year of experience crafting robust and user-friendly applications using Swift, UIKit, and modern development practices. Focused on delivering high-quality, scalable mobile solutions."
  ),
  resumeLink: "https://drive.google.com/file/d/1binbi0eknd7jCudrXGfhGt4r-EiQkrsN/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anmolkumar2003",
  linkedin: "https://www.linkedin.com/in/anmol-kumar-81a3b7216/",
  gmail: "anmol.ios58@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "iOS Developer with 1+ year of experience delivering smooth, scalable mobile apps with a user-first approach.",
  skills: [
    emoji("⚡ Build high-performance iOS applications using Swift and UIKit"),
    emoji("⚡ Apply design patterns like MVC and MVVM for scalable and maintainable architecture"),
    emoji("⚡ Integrate REST APIs, CoreData, and custom hardware workflows (e.g., instant printers)"),
    emoji("⚡ Implement push notifications and local notifications for user engagement"),
    emoji("⚡ Work with Firebase for backend integration and analytics tracking"),
    emoji("⚡ Contribute to App Store apps like Kodak STEP Prints, Zip Printer, Mint Printer, and Snaptouch Camera"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Swift",
    fontAwesomeClassname: "fab fa-swift", // ✅ correct
  },
  {
    skillName: "UIKit",
    fontAwesomeClassname: "fas fa-mobile-alt", // 📱 UIKit = mobile UI
  },
  {
    skillName: "Xcode",
    fontAwesomeClassname: "fas fa-code", // 👨‍💻 closest match for IDE
  },
  {
    skillName: "CocoaPods",
    fontAwesomeClassname: "fas fa-cube", // 📦 package manager
  },
  {
    skillName: "CoreData",
    fontAwesomeClassname: "fas fa-database", // 🗄️ persistent storage
  },
  {
    skillName: "Firebase",
    fontAwesomeClassname: "fas fa-fire", // 🔥 flame for Firebase
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt", // ✅ proper Git icon
  },
  {
    skillName: "Sourcetree",
    fontAwesomeClassname: "fas fa-code-branch", // 🔀 git client
  },
  {
  skillName: "Asana",
  fontAwesomeClassname: "fas fa-tasks"
  },
  {
    skillName: "BLE",
    fontAwesomeClassname: "fab fa-bluetooth",
  }, 
],
display: true
};
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Swami Vivekanand Institute of Engineering & Technology",
      logo: require("./assets/images/svietLogo.png"),
      subHeader: "Bachelor of Computer Applications (BCA)",
      duration: "July 2021 - May 2024",
      desc: "Completed Bachelor of Computer Applications from Swami Vivekanand Institute of Engineering & Technology.",
      descBullets: [
        "Gained foundational knowledge in computer applications and software development.",
        "Developed skills in programming, database management, and networking."
      ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "iOS Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Swift Programming",
      progressPercentage: "85%"
    },
    // {
    //   Stack: "Architecture (MVC/MVVM)",
    //   progressPercentage: "80%"
    // },
    // {
    //   Stack: "User Interface Design",
    //   progressPercentage: "80%"
    // },
    {
      Stack: "Backend Integration (APIs, Firebase)",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
  {
    role: "iOS Developer",
    company: "CAPLUS TECH",
    companylogo: require("./assets/images/caLogo.png"),
    date: "April 2024 – Present",
    desc: "Working on multiple live iOS applications for Kodak and Polaroid, focusing on seamless hardware integration, user interface enhancements, and performance optimization. Contributed to features like print preview, photo editing tools, Bluetooth flows, Firebase notifications, and analytics integration. Used GitLab and Sourcetree for code collaboration, following MVC and MVVM architecture."
  },
  {
    role: "iOS Developer Intern",
    company: "CAPLUS TECH",
    companylogo: require("./assets/images/caLogo.png"),
    date: "January 2024 – March 2024",
    desc: "Contributed to live projects such as Kodak STEP Print, Kodak Smile, Kodak Classic, Polaroid Snaptouch, Mint Printer, and Polaroid Zip. Learned to work with hardware communication, UI development, and meeting project deadlines efficiently in a fast-paced team environment. Gained hands-on experience with version control using GitLab and Sourcetree for code collaboration and management."
  },
  {
    role: "iOS Developer Trainee",
    company: "CS Soft Solutions",
    companylogo: require("./assets/images/csLogo.png"),
    date: "July 2023 – Dec 2023",
    desc: "Built a strong foundation in iOS development by learning Swift and the Xcode IDE. Gained practical experience with UIKit components like buttons, labels, and views, and implemented REST APIs to display dynamic data in simple user interfaces."
  }
]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
subtitle: "Key iOS applications I’ve contributed to with a focus on hardware integration, UI design, and performance optimization",
  projects: [
    {
      image: require("./assets/images/kodak-Step.png"),
      projectName: "Kodak STEP Prints",
  projectDesc: "Redesigned the entire app UI, enhanced print quality, and integrated new hardware and offline features to support the Barbie printer and event-specific builds.",
      footerLink: [
        {
          name: "View on App Store",
          url: "https://apps.apple.com/in/app/kodak-step-prints/id1494704742"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/kodak-Smile.webp"),
      projectName: "Kodak Smile",
      projectDesc: "Improved photo editing and camera capture. Implemented analytics and fixed memory leaks, crashes, and compliance issues.",
      footerLink: [
        {
          name: "View on App Store",
          url:  "https://apps.apple.com/in/app/kodak-step-prints/id1447241173"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 8054205658",
  email_address: "anmol.ios58@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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

