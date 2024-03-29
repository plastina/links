import React from "react";
import photo from "../../assets/foto.jpg";
import github from "../../assets/github.gif";
import instagram from "../../assets/instagram.gif";
// import tiktok from "../../assets/tiktok.gif";
import linkedin from "../../assets/linkedin.gif";
// import twitter from "../../assets/twitter.gif";
import gmail from "../../assets/gmail.gif";
import { Card } from "../../components/Card";
import "../../App.css";

export function Home() {
  const link = [
    {
      img: linkedin,
      title: "Linkedin",
      description: "/plastina",
      url: "http://www.linkedin.com/in/plastina",
    },
    {
      img: github,
      title: "Github",
      description: "/plastina",
      url: "https://github.com/plastina",
    },
    {
      img: instagram,
      title: "Instagram",
      description: "@plastinab",
      url: "https://www.instagram.com/plastinab/",
    },
    // {
    //   img: tiktok,
    //   title: "TikTok",
    //   description: "@dev_plastina",
    //   url: "https://www.tiktok.com/@dev_plastina",
    // },
    // {
    //   img: twitter,
    //   title: "Twitter",
    //   description: "@plastina",
    //   url: "https://www.twitter.com/plastina/",
    // },
    {
      img: gmail,
      title: "Gmail",
      description: "Deseja falar comigo?",
      url: "mailto:plastina.bp@gmail.com",
    },
  ];
  return (
    <>
      <div className="container1 p-4 align-items-center text-center ">
        <img src={photo} alt="" width={"250px"} className="px-2" style={{ borderRadius: "50%"}}/>
        <div >
          <h5>Bruno Plastina</h5>
          <p>@dev_plastina</p>
        </div>
      </div>
      <div className="container2 p-4 col-8 row m-auto align-items-center text-center">
        {link.map((link) => {
          return <Card links={link} />;
        })}
      </div>
        <footer className="footer">
          <p>Created by Bruno Plastina</p>
        </footer>
    </>
  );
}
