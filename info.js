let info = {
  name: "Elliot LE GUEN",
  logo_name: "Elliot",
  flat_picture: require("./src/assets/moi.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Bonjour, je m'appelle elliot LE GUEN j'ai 20 ans, je suis passionné par le développement informatique. Actuellement en deuxième années de BTS SIO, je suis constamment à la recherche de nouveaux défis pour améliorer mes compétences en matière de programmation",
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
        "PHP 8 ",
        "Laravel ",
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
          "Création d'un DataGrid en Jquery/php pour améliorer  le backoffice de l'entreprise",
      skills: ["PHP8","Mysql","Jquery"]
    },
  ],
  skills: [
    {
      title: "Back-end",
      info: [
        "JS-Jquery","PHP 8","C#","SQL"],
      icon: "fa fa-code"
    },
    {
      title: "Front-end",
      info: [
        "HTML5","CSS3","JavaScript","Laravel Blade"],
      icon: "fa fa-cubes"
    },
    {
      title: "Framework",
      info: ["Laravel (ORM,API)","Vuejs", "Bootstrap", "Tailwind"],
      icon: "fas fa-laptop-code"
    },
  ],
  portfolio: [
    {
      name: "Uber Bar",
      pictures: [
        {
          img: require("./src/assets/portfolio/diary/5.png")
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
          "Ce projet a été réalisé à 3, il est composé d'une application web, une application mobile ainsi qu'une aplication lourde étant dans la même optique qu'uber eat, mais pour les bars. Une application flutter pour les barman ainsi qu'une application lourde pour les responsables de bar"
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
      technologies: ["HTML", "CSS","PHP8","C#", "MySQL"],
      category: "Hackathon",
      date: "sept, 2022 - nov, 2022",
      github: "https://github.com/Les-coloc-s",
      visit: "https://github.com/Les-coloc-s",
      description:
          "Ce projet a été réalisé à 2, il est composé d'une application Web pour gérer des hackathons ainsi que les équipes qui y participe. Il est composé d'une application lourde permettant au chef d'équipe et aux organisateurs de gérer leur équipe et hackathon"
    },
    {
      name: "DataGrid",
      pictures: [
        {
          img: require("./src/assets/portfolio/myflix.com/1.png")
        },
      ],
      technologies: ["PHP8", "Jquery", "SQL"],
      category: "Application Web",
      date: "Fevrier, 2023 - Mars 2023",
      github:
        "https://github.com/",
      visit: "https://github.com",
      description:
        " Création d'un DataGrid avec l'aide de la bibliothèque DevExpress. Ce DataGrid à pour but d'améliorer le BackOffice de l'entreprise E-TESTING.  "
    },
  ],
};

export default info;