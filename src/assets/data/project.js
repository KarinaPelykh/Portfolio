import vrnas from "../../images/vrnas.png";
import readJourney from "../../images/read-journey.png";
import vocabBuilder from "../../images/vocabbulider.png";
import psychologist from "../../images/psychologist.png";

export const data = [
  {
    id: 1,
    item: psychologist,
    alt: "psychologist",
    title: "Psychologist",
    linkProject: "https://psychologists.vercel.app/",
    linkGithub: "https://github.com/KarinaPelykh/Psychologists",
    position: "Developer ",
    technologies: "React ,Vite ,Tailwind ,Redux-Toolkit ,Firebase ,Type Script",
    description:
      "An application for a company offering the services of psychologists. The application consists of 3 pages:The Home page with the website title, the company slogan, and a link that encourages starting work with the application and redirects to the Psychologists page. The Psychologists page containing a list of psychologists that users can sort alphabetically in ascending order (from A to Z) or descending order (from Z to A), by price (from lowest to highest or vice versa), and by popularity (from lowest to highest rating or vice versa). The private Favorites page with psychologists added by the user to their favorites.",
  },
  {
    id: 2,
    item: vocabBuilder,
    alt: "vocabBuilder",
    title: "Vocab Builder",
    linkProject: "https://vocab-builder-dun.vercel.app/",
    linkGithub: "https://github.com/KarinaPelykh/VocabBuilder",
    position: "Developer ",
    technologies: "Next.js,Vite,Tailwind,Redux-Toolkit,Yup",
    description:
      "The VocabBuilder app is designed to help users learn new words by providing a convenient interface for adding, saving, and practicing vocabulary. It features a responsive layout for various screen sizes. The app includes three main pages and supports registration and login functionality..Dictionary — the main page where you can add words for learning and edit them using a modal window.Recommend — a page where you can add unknown words to your dictionary.Training — a page with a progress bar to display training progress and a TrainingRoom component for completing exercises, entering translations, and saving results.",
  },
  {
    id: 3,
    item: vrnas,
    alt: "VRNas",
    title: "VRnas",
    linkProject: "https://v-rnas.vercel.app/",
    linkGithub: "https://github.com/KarinaPelykh/VRnas",
    position: "Developer ",
    technologies: "Vite,Css,HTML,Webpack",
    description:
      "This project about team which will to help you immerse yourself in the world of virtual reality.You can read information about team.Also you can familiarize yourself with service.You can see how virtual reality works in our video.And if we interesting you, we have for you our blog",
  },
  {
    id: 4,
    item: readJourney,
    alt: "readjouraney",
    title: " Read Journey",
    linkProject: "https://read-journey-weld.vercel.app/",
    linkGithub: "https://github.com/KarinaPelykh/read-journey",
    position: "Developer ",
    technologies: "React,Vite,Styled componet,Redux-Toolkit,Type Script",
    description:
      "  The app features a responsive design for mobile, tablet, and desktop. It supports user registration and login, leading to a workspace with a header, navigation menu, user info, and logout button, all optimized for mobile devices. The Recommendation page allows users to search for and add books to their library via a modal window. Upon logout, user data is cleared, and they are redirected to the welcome page. The MyLibraryBooks component displays a list of the user's books with options to filter by reading status and view details in a modal, including a Start Reading button. ",
  },
];
