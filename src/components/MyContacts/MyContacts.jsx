export const MyContacts = () => {
  const data = [
    {
      id: 1,
      text: "Telegram",
      link: "https://t.me/karinapelykh",
      target: "_blank ",
      png: "../../images/telegram.png",
    },
    {
      id: 2,
      text: "Linkedin",
      link: "https://www.linkedin.com/in/karyna-pelykh-44064427b",
      target: "_blank ",
      png: "../../images/linkedin.png",
    },
    {
      id: 3,
      text: "GitHub",
      link: "https://github.com/KarinaPelykh",
      target: "_blank ",
      png: "../../images/cat.png",
    },
    {
      id: 4,
      text: " pelihkarina0@gmail.com",
      link: "mailto:pelihkarina0@gmail.com",
      png: "../../images/mail.png",
    },
    {
      id: 5,
      text: "+42(077)66-25-657",
      link: "tel:+42(077)66-25-657",
      png: "../../images/telegram.png",
    },
  ];
  return (
    <>
      <ul>
        {data.map(({ id, text, link, target, png }) => (
          <li key={id}>
            <a target={target} href={link}>
              {text}
            </a>
            <img src={png} width={25} height={25} alt="social network" />
          </li>
        ))}
      </ul>
    </>
  );
};
