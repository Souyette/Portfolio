let info = {
  name: "Elliot LE GUEN",
  logo_name: "Elliot",
  flat_picture: require("./src/assets/me.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Bonjour, je suis elliot LE GUEN je suis dev",
  links: {
    linkedin: "https://www.linkedin.com/in/elliot-le-guen-16b871265/",
    github: "https://github.com/Souyette",
  },
  education: [
    {
      name: "Lycée Public Pro. LÉONARD DE VINCI",
      place: "Montaigu",
      date: "2019 - 2021",
      degree: "BAC STI2D Option SIN",
      description:
        "",
      skills: [
        "Arduino",
      ]
    },
    {
      name: "Lycée Public Polyvalent CHEVROLLIER",
      place: "Angers",
      date: "2021 - 2023",
      degree: "BTS SIO Option SLAM",
      description:
          "",
      skills: [
        "HTML5",
        "CSS",
        "Javascript",
        "VueJs",
        "PHP",
        "C#",
        "SQL",
        "JSON",
        "Flutter",
      ]
    },
  ],
  experience: [
    {
      name: "Internship",
      place: "E-TESTING",
      date: "1,sep, 2021 - 28,sep, 2021",
      position: "développeur",
      description:
        "",
      skills: ["HTML5", "CSS3", "Bootstrap", "JQuery", "Json", "JavaSript", "TypeSript", "es6", "VueJS"]
    },
  ],
  skills: [
    {
      title: "UX/UI Design",
      info: ["Figma", "Illustrator", "XD", "Photoshop", "Gimp"],
      icon: "fa fa-pencil-square-o"
    },
    {
      title: "Language",
      info: [
        "Python","Javascript","TypeScript","Java","C#"],
      icon: "fa fa-code"
    },
    {
      title: "Front-end",
      info: [
        "HTML5","CSS3","Bootstrap3","Es6"],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["Vue", "React", "Node"],
      icon: "fas fa-laptop-code"
    },
  ],
  portfolio_design: [
    {
      name: "Keep it Green",
      title: "UI/UX Design",
      pictures: [
        {
          img: require("./src/assets/designs/Keep it green/cover.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/Keep it green/show.png"),
          title: "show"
        },
      ],
      technologies: ["Figma", "Photoshop"],
      category: "Visual Design",
      github: "",
      date: "Jan, 2022",
      visit: "",
      description:
        ""
    },
    {
      name: "Digital agency website",
      title: "UI/UX Design",
      pictures: [
        {
          img: require("./src/assets/designs/digital agency/behance cover.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/digital agency/1. start.png"),
          title: "App Elements"
        },
        {
          img: require("./src/assets/designs/digital agency/2. about.png"),
          title: "App Elements"
        },
        {
          img: require("./src/assets/designs/digital agency/3. Our services.png"),
          title: "App Elements"
        },
        {
          img: require("./src/assets/designs/digital agency/4. latest project.png"),
          title: "App Elements"
        },
        {
          img: require("./src/assets/designs/digital agency/5. Contact us.png"),
          title: "App Elements"
        },
      ],
      technologies: ["Figma", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "Dec, 2021",
      visit: "",
      description:
        ""
    },
    {
      name: "Credit card design",
      title: "Illustration",
      pictures: [
        {
          img: require("./src/assets/designs/credit/behance cover.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/credit/degisning.png"),
          title: "Degisning"
        },
        {
          img: require("./src/assets/designs/credit/Dual tune.png"),
          title: "Dual tune"
        },
        {
          img: require("./src/assets/designs/credit/Glassmorphism.png"),
          title: "Glassmorphism"
        },
        {
          img: require("./src/assets/designs/credit/Gradiant.png"),
          title: "Gradiant"
        },
        {
          img: require("./src/assets/designs/credit/Monochrome.png"),
          title: "Monochrome"
        },
        {
          img: require("./src/assets/designs/credit/Neumorphism.png"),
          title: "Neumorphism"
        },
      ],
      technologies: ["Figma", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "Dec, 2021",
      visit: "",
      description:
        ""
    },
    {
      name: "BOOKSI",
      title: "E-Book library - UI/UX Design",
      pictures: [
        {
          img: require("./src/assets/designs/booksi/behance cover.png"),
          title: "Cover"
        },
        {
          img: require("./src/assets/designs/booksi/behance board.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/booksi/login.png"),
          title: "login"
        },
        {
          img: require("./src/assets/designs/booksi/register.png"),
          title: "register"
        },
        {
          img: require("./src/assets/designs/booksi/home page.png"),
          title: "homepage"
        },
        {
          img: require("./src/assets/designs/booksi/For you.png"),
          title: "just for you"
        }
      ],
      technologies: ["Figma", "Photoshop"],
      category: "Visual Design",
      github: "",
      date: "Nov, 2021",
      visit: "",
      description:
        " BOOKSI is Ebook android app for easy read books."
    },
    {
      name: "Quiet Weather",
      title: "UI/UX Design",
      pictures: [
        {
          img: require("./src/assets/designs/weather/Wooden Hand iPhone 12 Pro.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/weather/artboard.png"),
          title: "show"
        },
        {
          img: require("./src/assets/designs/weather/weather app react native.png"),
          title: "components"
        },
      ],
      technologies: ["Figma", "Illustration"],
      category: "Visual Design",
      github: "",
      date: "Nov, 2021",
      visit: "",
      description:
        "Quiet Weather is a react native app by openweathermap api, i designed the ui/ux and coding it in react native, enjoy it!"
    },
    {
      name: "Pill Reminder",
      title: "Pill Reminder - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/pill reminder/Web 1.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/pill reminder/1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/pill reminder/2.png"),
          title: "Mockups 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "Apr, 2021",
      visit: "",
      description:
        "pill reminder app for nessecary drugs for the day."
    },
  ],
  portfolio: [
    {
      name: "Diary App",
      pictures: [
        {
          img: require("./src/assets/portfolio/diary/1.png")
        },
        {
          img: require("./src/assets/portfolio/diary/2.png")
        },
        {
          img: require("./src/assets/portfolio/diary/3.png")
        },
      ],
      technologies: ["react", "scss", "local storage"],
      category: "Web App",
      date: "Aug, 2021 - 20 days",
      github:
        "https://github.com/mahy209/notes-react-app.git",
      visit: "https://github.com/mahy209/notes-react-app.git",
      description:
        " Diary react app with some new features: Dark mode, upload images, tags, filter search with title/content/tag "
    },
    {
      name: "Online Examination",
      pictures: [
        {
          img: require("./src/assets/portfolio/online examination/exam (1).png")
        },
        {
          img: require("./src/assets/portfolio/online examination/exam (2).png")
        },
        {
          img: require("./src/assets/portfolio/online examination/exam (3).png")
        },
        {
          img: require("./src/assets/portfolio/online examination/exam (4).png")
        },
        {
          img: require("./src/assets/portfolio/online examination/exam (5).png")
        }
      ],
      technologies: ["HTML", "CSS","JavaSript","JQuery", "PHP", "MySQL"],
      category: "Web App",
      date: "Apr, 2021 - May, 2021",
      github: "https://github.com/mahy209/online-examination.git",
      visit: "https://github.com/mahy209/online-examination.git",
      description:
        "Online Examination System Today Online Examination System has become a fast growing examination method because of its speed and accuracy. It is also needed less manpower to execute the examination. Almost all organizations now-a-days, are conducting their objective exams by online examination system, it saves students time in examinations. Organizations can also easily check the performance of the student that they give in an examination. As a result of this, organizations are releasing results in less time. It also helps the environment by saving paper. According to today’s requirement, online examination project in php is very useful to learn it. What is an online examination system? In an online examination system examine get their user id and password with his/her admit card. This id is already saved in the examination server. When examine login to the server he/she get his/her profile already register. On the certain time examine gets the message to start the examination. All answers given by examine are saved into the server with his/her profile information. Online examination system also allows to correct the answer if the examine needed to change any answer in the examination time duration, however, after the time duration any change will not allow. This also makes c checking the answer easy and error proof as computers are more accurate than man and provide fast results too. Php is a web base language so we can create an online examination system in PHP. Administrator of Online Examination has multiple features such as Add, Delete, Update Topics and Question. To Login as Admin put inside your browser."
    },
    {
      name: "MyFlix.com",
      pictures: [
        {
          img: require("./src/assets/portfolio/myflix.com/1.png")
        },
        {
          img: require("./src/assets/portfolio/myflix.com/2.png")
        },
        {
          img: require("./src/assets/portfolio/myflix.com/3.png")
        },
        {
          img: require("./src/assets/portfolio/myflix.com/4.png")
        },
      ],
      technologies: ["react", "css", "TMDB"],
      category: "Web App",
      date: "Aug, 2021 - 10 days",
      github:
        "https://github.com/mahy209/MyFlix-react-app.git",
      visit: "https://github.com/mahy209/MyFlix-react-app.git",
      description:
        " flix.com is a netflix clone using React JS and TMDB with courusal and search engine. "
    },
  ],
};

export default info;
