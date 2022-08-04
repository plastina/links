import React from "react";
import photo from "../../assets/foto.png";
import github from "../../assets/github.gif";
import instagram from "../../assets/instagram.gif";
import tiktok from "../../assets/tiktok.gif";
import linkedin from "../../assets/linkedin.gif";
import twitter from "../../assets/twitter.gif";
import { Card } from "../../components/Card";

export function Home() {
  const link = [
    {
      img: github,
      title: "Github",
      description: "Link do meu perfil no Github. @plastina",
      url: "https://github.com/plastina",
    },
    {
      img: instagram,
      title: "Instagram",
      description: "Link do meu perfil do Insta. @dev_plastina",
      url: "https://www.instagram.com/dev_plastina/",
    },
    {
      img: tiktok,
      title: "TikTok",
      description: "Link do meu perfil do TikTok. @dev_plastina",
      url: "https://www.tiktok.com/@dev_plastina",
    },
    {
      img: linkedin,
      title: "Linkedin",
      description: "Link do meu perfil do Linkedin. @plastina",
      url: "http://www.linkedin.com/in/plastina",
    },
    {
      img: twitter,
      title: "Twitter",
      description: "Link do meu perfil do Twitter. @plastina",
      url: "https://www.twitter.com/plastina/",
    },
  ];
  return (
    <>
      <div className="container p-4 align-items-center text-center ">
        <img src={photo} alt="" width={"250px"} className="px-2" />
        <div >
          <h5>Bruno Plastina</h5>
          <p>@dev_plastina</p>
        </div>
      </div>
      <div className="container p-4 text-center">
        {link.map((link) => {
          return <Card links={link} />;
        })}
      </div>
      <div className="text-center mt-4">
        <p2>Created by Bruno Plastina</p2>
      </div>
    </>
  );
}
