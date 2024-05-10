/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Venkata Merapureddy's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Venkata Merapureddy Portfolio",
    type: "website",
    url: "http://VenkataMerapureddy.com/",
  },
};

//Home Page
const greeting = {
  title: "Front End Developer",
  logo_name: "VenkataMerapureddy",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  portfolio_repository: "https://github.com/vardhan-venkata?tab=repositories",
  githubProfile: "https://github.com/vardhan-venkata/",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "VenkataMerapureddy98@gmail.com",
  // gitlab: "https://gitlab.com/VenkataMerapureddy98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/vardhan-venkata",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vardhan-venkat/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:vardhanmerapureddy@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/vardhanvenkata6/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Front End Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          style: {
            color: "#E34F26",
            marginBottom: 0,
          },
        },
        {
          skillName: "CSS3",
          style: {
            color: "#1572B6",
            marginBottom: 0,
          },
        },
        {
          skillName: "Sass",
          style: {
            color: "#CC6699",
            marginBottom: 0,
          },
        },
        {
          skillName: "JavaScript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
            marginBottom: 0,
          },
        },
        {
          skillName: "ReactJS",
          style: {
            color: "#61DAFB",
            marginBottom: 0,
          },
        },
        {
          skillName: "NodeJS",
          style: {
            color: "#339933",
            marginBottom: 0,
          },
        },
        {
          skillName: "NPM",
          style: {
            color: "#CB3837",
            marginBottom: 0,
          },
        },
        {
          skillName: "Yarn",
          style: {
            color: "#2C8EBB",
            marginBottom: 0,
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          style: {
            color: "#4285F4",
            marginBottom: 0,
          },
        },
        {
          skillName: "AWS",
          style: {
            color: "#FF9900",
            marginBottom: 0,
          },
        },
        {
          skillName: "Azure",
          style: {
            color: "#0089D6",
            marginBottom: 0,
          },
        },
        {
          skillName: "Firebase",
          style: {
            color: "#FFCA28",
            marginBottom: 0,
          },
        },
        {
          skillName: "Netlify",
          style: {
            color: "#336791",
            marginBottom: 0,
          },
        },
        {
          skillName: "Vercel",
          style: {
            color: "#47A248",
            marginBottom: 0,
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sri Vasavi Engineering College, Tadepalligudem",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "svec_logo.png",
      alt_name: "SVEC Tadepalligudem",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI, AR & VR etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ Apart from this, I have been part of coding and innovative club, where we used to implement projects and teach other peers.",
      ],
      website_link: "http://srivasaviengg.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Fundaments of Digital Marketing",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.linkedin.com/in/vardhan-venkat/details/certifications/",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Google Ads Display Certification",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.linkedin.com/in/vardhan-venkat/overlay/1590852055896/single-media-viewer/?profileId=ACoAACv_K2IBmoN-3AbruEjJh_W0LGLh6QGONMY",
      color_code: "#FF9900",
    },
    {
      title: "Google Ads Search Certification ",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.linkedin.com/in/vardhan-venkat/overlay/1590851824816/single-media-viewer/?profileId=ACoAACv_K2IBmoN-3AbruEjJh_W0LGLh6QGONMY",
      color_code: "#276cdb",
    },
    {
      title: "AWS Training & Certification(Route53) ",
      subtitle: "- Amazon",
      logo_path: "amazon_logo.png",
      certificate_link:
        "https://www.linkedin.com/in/vardhan-venkat/overlay/1590852372166/single-media-viewer/?profileId=ACoAACv_K2IBmoN-3AbruEjJh_W0LGLh6QGONMY",
      color_code: "#ab21eb",
    },
    {
      title: "Azure 900",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.credly.com/badges/4fa856b0-d902-42d0-ab8a-4c2eb8fcc0bc/linked_in_profile",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience",
  description:
    "I have worked as a Associate Software Engineer, front end developer. Worked on the various modules.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Associate Software Engineer",
          company: "Torry Harris Integration Solutions",
          company_url: "https://www.torryharris.com/",
          logo_path: "torry_harris_logo.png",
          duration: "Sep 2021 - Present",
          location: "Bangalore, Karnataka",
          description:
            "I am working on Digital Ecosystem products. The projects involve various portals responsible for the e-commerce project.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create websites and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "venkata_merapureddy.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, and Cloud.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://blogs.VenkataMerapureddy.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle:
      "14-41-3, Road No.5, Teachers Colony,TadePalligudem, West Godavari",
    locality: "Kanodar",
    country: "IN",
    region: "Andhra Pradesh",
    postalCode: "534101",
    streetAddress: "Teachers Colony",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Contact Number",
    subtitle: "+91 - 9989661794",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
