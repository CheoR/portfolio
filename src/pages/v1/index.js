import React from "react";

import imgSelf from "../../../assets/images/self.png";
import resume from "../../..//assets/pdf/Cheo_Roman_Resume.pdf";
import imgDjango from "../../../assets/images/icons/django.svg";
import imgHtml5 from "../../../assets/images/icons/icons8-html-5.svg";
import imgSQLite from "../../../assets/images/icons/sqLite.svg";
import imgBabel from "../../../assets/images/icons/icons8-babel.svg";
// import imgBlogger from "../../../assets/images/icons/icons8-blogger.svg";
import imgBootstrap from "../../../assets/images/icons/icons8-bootstrap.svg";
import imgChromeDev from "../../../assets/images/icons/icons8-chrome-dev.svg";
// import imgChrome from "../../../assets/images/icons/icons8-chrome.svg";
import imgCSS from "../../../assets/images/icons/icons8-css3.svg";
import imgFigma from "../../../assets/images/icons/icons8-figma.svg";
// import imgblogger from "../../../assets/images/icons/icons8-blogger.svg";
import imgGit from "../../../assets/images/icons/icons8-git.svg";
import imgGitHub from "../../../assets/images/icons/icons8-github.svg";
import imgGQL from "../../../assets/images/icons/icons8-graphql.svg";
import imgHeroku from "../../../assets/images/icons/icons8-heroku.svg";
import imgJS from "../../../assets/images/icons/icons8-javascript.svg";
import imgMongoDB from "../../../assets/images/icons/icons8-mongodb.svg";
import imgNode from "../../../assets/images/icons/icons8-node-js.svg";
import imgNPM from "../../../assets/images/icons/icons8-npm.svg";
import imgPostgreSQL from "../../../assets/images/icons/icons8-postgresql.svg";
import imgPY from "../../../assets/images/icons/icons8-python.svg";
import imgReactNative from "../../../assets/images/icons/icons8-react-native.svg";
import imgRedux from "../../../assets/images/icons/icons8-redux.svg";
import imgSASS from "../../../assets/images/icons/icons8-sass.svg";
import imgTS from "../../../assets/images/icons/icons8-typescript.svg";
import imgVSCode from "../../../assets/images/icons/icons8-vscode.svg";
import imgWebpack from "../../../assets/images/icons/icons8-webpack.svg";

import "./styles/main.css";
import { Link } from "gatsby";

const Index = () => {
  return (
    <>
      <header id="home" className="header">
        <div className="img__container">
          <img
            className="image"
            src={imgSelf}
            height={300}
            width={250}
            loading="lazy"
            placeholder="blurred"
            layout="fixed"
            alt="Self"
          />
        </div>
        <h1>let's build great products together</h1>
      </header>
      <main className="main">
        <section className="main__content">
          <p>
            <b>Hi</b>
            My name is Cheo. I'm a Nashville-based developer.
          </p>
          <p>
            I have been programming as a hobby on/off for years. I started with
            C++ in highschool and dabbled with a bit of other languages since
            then. In college, I used Prolog for a computational linguistics
            course where we
            <a
              href="https://news.ucsc.edu/2008/06/2278.html"
              aria-label="University of California - Santa Cruz Computational Linguistics Speech-Operated Roboic Cars"
            >
              drove robotic cars using our voice.
            </a>
          </p>
          <p>
            Due to health reasons after graduating, I could no longer do Peace
            Corp on medical grounds, so I continued learning at a local
            community college and state school. Doing so taught me to plan,
            build, and automate tools which eased my workload in the
            transportation/logistics/freight shipping industries.
          </p>
          <p>
            When I was laid off in December 2020, I decided to enrolled at the{" "}
            <a
              href="https://nashvillesoftwareschool.com/"
              aria-label="Nashville Software School"
            >
              Nashville Software School
            </a>
            . NSS reinforced my skillset and taught me to use the latest
            technologies.
          </p>
          <p>
            In my free time I like to catch up on (computational) linguistics,
            explore, and volunteer.
          </p>
          <p>I look forward to collaborating with you on future endeavors.</p>
        </section>
        <section className="projects">
          <h2>projects</h2>
          <ul className="gallery">
            <li id="project--1" className="gallery__project">
              <a
                className="gallery__project--link"
                href="https://shipitout.herokuapp.com/"
                aria-label="GitHub Project: Ship It Out"
                rel="noopener"
                target="_blank"
              >
                ShipItOut
              </a>
            </li>
            <li id="project--2" className="gallery__project">
              <a
                className="gallery__project--link"
                href="https://github.com/CheoR/pack-it-up"
                aria-label="GitHub Project: Pack It Up"
                rel="noopener"
                target="_blank"
              >
                PackItUp
              </a>
            </li>
            <li id="project--3" className="gallery__project">
              <a
                className="gallery__project--link"
                href="https://github.com/CheoR/BeerMe"
                aria-label="GitHub Project: Beer Me"
                rel="noopener"
                target="_blank"
              >
                BeerMe
              </a>
            </li>
            <li id="project--4" className="gallery__project">
              <a
                className="gallery__project--link"
                href="https://github.com/CheoR/recommend_wine"
                aria-label="GitHub Project: Wine Recommender"
                rel="noopener"
                target="_blank"
              >
                Wine Recommender
              </a>
            </li>
            <li id="project--5" className="gallery__project">
              <a
                className="gallery__project--link"
                href="https://github.com/CheoR/FreeCodeCampProjects"
                aria-label="GitHub Project: Free Code Camp Projects"
                rel="noopener"
                target="_blank"
              >
                FCC Projects
              </a>
            </li>
            <li id="project--6" className="gallery__project">
              <a
                className="gallery__project--link"
                href="https://codepen.io/CheoR/full/QzPJbQ"
                aria-label="GitHub Project: Code Pen Projects"
                rel="noopener"
                target="_blank"
              >
                CodePen
              </a>
            </li>
            <li id="project--7" className="gallery__project">
              <a
                className="gallery__project--link"
                href="https://github.com/CheoR/portfolio"
                aria-label="Personal Portfolio"
                rel="noopener"
                target="_blank"
              >
                Personal Portfolio
              </a>
            </li>
            <li id="project--8" className="gallery__project">
              <a
                className="gallery__project--link"
                href={resume}
                aria-label="Download Resume"
                rel="noopener"
                target="_blank"
                download=""
              >
                Resume
              </a>
            </li>
          </ul>
          {/* <!--<h2>get in touch</h2>
        <form className="main__form" id="fs-frm" name="simple-contact-form" accept-charset="utf-8"
          action="https://formspree.io/f/mzbyerkv" method="POST">
          <fieldset className="main__form__fieldset">
            <label for="inputName">name</label>
            <input name="inputName" id="inputName" type="text" />
            <label for="inputEmail">email</label>
              <input name="inputEmail" id="inputEmail" type="email" />
            <label for="inputeEmail">
              email
              <input id="inputeEmail" type="email" name="_replyto">
            </label>
            <label for="inputMsg">message</label>
            <textarea name="inputMsg" id="inputMsg" required=""></textarea>
            <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
            <input type="text" name="_gotcha" className="moocow" />
          </fieldset>
          <input className="submit" type="submit" value="Send" />
        </form> --> */}
        </section>
      </main>
      <footer className="info">
        <section className="info__section">
          <h2>technology</h2>
          <ul className="technologies">
            {/* <!-- PROGRAMMING LANGUAGES --> */}
            <li className="technology__item">
              <img
                src={imgPY}
                height={40}
                width={40}
                loading="lazy"
                alt="python icon"
                className="technology__img"
              />
            </li>
            <li className="technology__item">
              <img
                src={imgTS}
                height={40}
                width={40}
                loading="lazy"
                alt="typescript icon"
                className="technology__img"
              />
            </li>
            <li className="technology__item">
              <img
                src={imgJS}
                height={40}
                width={40}
                loading="lazy"
                alt="javascript icon"
                className="technology__img"
              />
            </li>

            {/* <!-- FRONT END --> */}
            <li className="technology__item">
              <img
                src={imgReactNative}
                height={40}
                width={40}
                loading="lazy"
                alt="react icon"
                className="technology__img"
              />
            </li>
            <li className="technology__item">
              <img
                src={imgChromeDev}
                height={40}
                width={40}
                loading="lazy"
                alt="chrome dev icon"
                className="technology__img"
              />
            </li>
            <li className="technology__item">
              <img
                src={imgBootstrap}
                height={40}
                width={40}
                loading="lazy"
                alt="bootstrap icon"
                className="technology__img"
              />
            </li>
            <li className="technology__item">
              <img
                src={imgSASS}
                height={40}
                width={40}
                loading="lazy"
                alt="sass icon"
                className="technology__img"
              />
            </li>
            <li className="technology__item">
              <img
                src={imgCSS}
                height={40}
                width={40}
                loading="lazy"
                alt="css icon"
                className="technology__img"
              />
            </li>
            <li className="technology__item">
              <img
                src={imgHtml5}
                height={40}
                width={40}
                loading="lazy"
                alt="html5 icon"
                className="technology__img"
              />
            </li>

            {/* <!-- BACK END --> */}
            <li className="technology__item">
              <img
                src={imgDjango}
                height={40}
                width={40}
                loading="lazy"
                alt="django icon"
                className="technology__img"
              />
            </li>
            <li className="technology__item">
              <img
                src={imgPostgreSQL}
                height={40}
                width={40}
                loading="lazy"
                alt="postgresql icon"
                className="technology__img"
              />
            </li>
            <li className="technology__item">
              <img
                src={imgNode}
                height={40}
                width={40}
                loading="lazy"
                alt="node icon"
                className="technology__img"
              />
            </li>
            <li className="technology__item">
              <img
                src={imgNPM}
                height={40}
                width={40}
                loading="lazy"
                alt="npm icon"
                className="technology__img"
              />
            </li>
            <li className="technology__item">
              <img
                src={imgMongoDB}
                height={40}
                width={40}
                loading="lazy"
                alt="mongo icon"
                className="technology__img"
              />
            </li>
            <li className="technology__item">
              <img
                src={imgGQL}
                height={40}
                width={40}
                loading="lazy"
                alt="graphql icon"
                className="technology__img"
              />
            </li>
            <li className="technology__item">
              <img
                src={imgHeroku}
                height={40}
                width={40}
                loading="lazy"
                alt="heroku icon"
                className="technology__img"
              />
            </li>

            {/* <!-- OTHER --> */}
            <li className="technology__item">
              <img
                src={imgWebpack}
                height={40}
                width={40}
                loading="lazy"
                alt="webpack icon"
                className="technology__img"
              />
            </li>
            <li className="technology__item">
              <img
                src={imgGit}
                height={40}
                width={40}
                loading="lazy"
                alt="git icon"
                className="technology__img"
              />
            </li>
            <li className="technology__item">
              <img
                src={imgGitHub}
                height={40}
                width={40}
                loading="lazy"
                alt="github icon"
                className="technology__img"
              />
            </li>
            <li className="technology__item">
              <img
                src={imgSQLite}
                height={40}
                width={40}
                loading="lazy"
                alt="SQLite icon"
                className="technology__img"
              />
            </li>
            <li className="technology__item">
              <img
                src={imgVSCode}
                height={40}
                width={40}
                loading="lazy"
                alt="vscode icon"
                className="technology__img"
              />
            </li>
            <li className="technology__item">
              <img
                src={imgBabel}
                height={40}
                width={40}
                loading="lazy"
                alt="babel icon"
                className="technology__img"
              />
            </li>
            <li className="technology__item">
              <img
                src={imgFigma}
                height={40}
                width={40}
                loading="lazy"
                alt="figma icon"
                className="technology__img"
              />
            </li>
            <li className="technology__item">
              <img
                src={imgRedux}
                height={40}
                width={40}
                loading="lazy"
                alt="redux icon"
                className="technology__img"
              />
            </li>
          </ul>
        </section>
        <section className="info__section">
          <h2>Connect</h2>
          <ul className="socials">
            <li className="socials__item">
              <a
                className="socials__item--link"
                href="https://www.linkedin.com/in/cheo-roman/"
                aria-label="LinkIn"
                target="_blank"
                rel="noopener"
              >
                <i
                  className="fa fa-linkedin-square fa-1x"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li className="socials__item">
              <a
                className="socials__item--link"
                href="https://github.com/CheoR"
                aria-label="GitHub"
                target="_blank"
                rel="noopener"
              >
                <i className="fa fa-github-square fa-1x" aria-hidden="true"></i>
              </a>
            </li>
            <li className="socials__item">
              <a
                className="socials__item--link"
                href="https://www.freecodecamp.org/cheor"
                aria-label="Free Code Camp"
                target="_blank"
                rel="noopener"
              >
                <i
                  className="fa fa-free-code-camp fa-1x"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li className="socials__item">
              <a
                className="socials__item--link"
                href="http://codepen.io/CheoR/"
                aria-label="Code Pen"
                target="_blank"
                rel="noopener"
              >
                <i className="fa fa-codepen fa-1x" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </section>
        <section className="info__section">
          <p className="info__copy">
            &copy; CheoR {new Date().getFullYear().toString()}
          </p>
          <p>
            <a href="#home" aria-label="Back To Top">
              Back To Top
            </a>
          </p>
          <p>
            <Link to="/">Home</Link>
          </p>
        </section>
      </footer>
      <script type="module" src="./scripts/main.js"></script>
    </>
  );
};

export default Index;
