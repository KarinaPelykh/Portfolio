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
    description: "",
  },
  {
    id: 3,
    item: vrnas,
    alt: "VRNas",
    title: "VRnas",
    linkProject: "https://v-rnas.vercel.app/",
    linkGithub: "https://github.com/KarinaPelykh/VRnas",
    position: "Developer ",
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
    description:
      "Adaptation to different devices: mobil, tablet ,desktopUser registration and login: created page Login and Register Workspace for authorized users: Implemented the main layout of the page for authorized users, which includes a header, navigation menu, block with user information and a logout button. The menu is adapted for mobile devicesRecommendation Page: A book recommendation page that includes filters for book searches, an app description block, and a list of recommended books. On this page, the user can add a book to his library.Adding books: It is possible to select books and add them to the user's library using a modal windowWhen the user logs out, the data is cleared and the user is redirected to the public welcome pageMyLibraryBooks: This component contains a page header, a selector for filtering books by reading status, and a list of the user's books in the form of a card list. Each card represents a book with a cover image, title, and author. Clicking on the book cover opens a modal window with detailed information about the book and the Start reading button, which allows the user to start reading the book.",
  },
];
