import React from 'react';
import "../styles/home.scss";
import vg from "../assets/2.webp";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

const Home = () => {
  return (
    <>
      {/* Home Section */}
      <div className="home1" id="home">
        <main>
          <h1>TechMaster</h1>
          <p>Solution for your problem</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Grpahics" />
        <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem culpa excepturi, temporibus tempora ad officia nemo saepe non a nam accusantium repellendus, earum ullam! Architecto velit aut eaque ut distinctio!</p>
        </div>
      </div>


      {/* About Section */}
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum pariatur magni velit possimus facilis, nemo error repellat molestias rem quaerat necessitatibus fugiat ipsa aliquam maxime cum vel aperiam. Id dolorem blanditiis fugiat sint nisi tempore corrupti quidem facilis rerum ex, autem beatae velit et, labore doloremque nostrum sequi quas. Asperiores?</p>
        </div>
      </div>


      {/* Brands Section */}
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{animationDelay:"0.3s"}}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>

            <div style={{animationDelay:"0.5s"}}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>

            <div style={{animationDelay:"0.7s"}}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>

            <div style={{animationDelay:"1s"}}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home
