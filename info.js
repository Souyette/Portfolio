let info = {
  name: "Elliot LE GUEN",
  logo_name: "Elliot",
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Bonjour, je m'appelle elliot LE GUEN, je suis un passionné de développement avec une passion pour les technologies innovantes et les projets créatifs. Actuellement en deuxième années de BTS SIO, je suis constamment à la recherche de nouveaux défis pour améliorer mes compétences en matière de programmation",
  links: {
    linkedin: "https://www.linkedin.com/in/elliot-le-guen-16b871265/",
    github: "https://github.com/Souyette",
  },
  parcours: [
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
        "PHP 8 ",
        "C#",
        "SQL",
        "JSON",
        "Flutter",
      ]
    },
  ],
  experience: [
    {
      name: "Stage",
      place: "E-TESTING",
      date: "1,avril, 2022 - 14,juin, 2022",
      position: "développeur",
      description:
        "Création d'un Data WareHouse pour permettre à l'entreprise de faire des statistiques d'ensemble sur les clients de l'entreprise",
      skills: ["PowerShell","Mysql"]
    },
    {
      name: "Stage",
      place: "E-TESTING",
      date: "6,février, 2023 - 31,mars, 2023",
      position: "développeur",
      description:
          "Création d'un DataGrid en jquey/php pour améliorer  le backoffice de l'entreprise",
      skills: ["PHP8","Mysql","Jquery"]
    },
  ],
  skills: [
    {
      title: "Language",
      info: [
        "Python","Javascript","Dart","PHP8","C#"],
      icon: "fa fa-code"
    },
    {
      title: "Front-end",
      info: [
        "HTML5","CSS3","Javascript","Laravel Blade"],
      icon: "fa fa-cubes"
    },
    {
      title: "Framework",
      info: ["Laravel","Vuejs", "Bootstrap", "Tailwind"],
      icon: "fas fa-laptop-code"
    },
  ],
  portfolio_design: [
    {
      name: "Hackat'Innov",
      title: "Hackat'Innov",
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
      technologies: ["Php", "C#","Mysql"],
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
      name: "Uber Bar",
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
      technologies: ["Laravel","React", "API", "C#","Flutter"],
      category: "Application Web & Application lourde",
      date: "Décembre, 2022 - 30 days",
      github:
        "https://github.com/Souyette/AP4Bar.git",
      visit: "https://github.com/Souyette/AP4Bar.git",
      description:
        " Une application web style uber eat mais pour les bars, une application flutter pour les barman ainsi qu'une application lourde pour les responsable bar"
    },
    {
      name: "Hackat'Innov",
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
      technologies: ["HTML", "CSS","PHP","C#", "MySQL"],
      category: "Hackathon",
      date: "sept, 2022 - May, 2021",
      github: "https://github.com/Les-coloc-s",
      visit: "https://github.com/Les-coloc-s",
      description:
        "Application pour gérer des hackathon qui est la contraction de hack et marathon"
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