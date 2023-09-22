import React from "react";
import carset from "../assets/carset.png";
import "../styles/About.css";

function about() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${carset})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          corrupti vero neque, facilis soluta, totam voluptatem vel vitae optio
          nam ratione iusto aperiam dolore itaque ex voluptate voluptas impedit
          mollitia. Harum voluptate alias reprehenderit dolor consectetur
          nesciunt blanditiis, repellat hic pariatur dolorem tempore id delectus
          nostrum dignissimos obcaecati consequuntur fugit ipsam quas voluptatum
          recusandae quos esse tempora corporis! Corporis labore excepturi
          quidem totam, provident natus at iure rem nisi nihil voluptatum
          quaerat harum illum quae veniam dicta perspiciatis consequuntur
          reprehenderit tempora suscipit quas quisquam. Error quasi accusantium
          nobis dolorum perferendis deserunt vero sed, ducimus tempore. Pariatur
          iste hic molestias itaque saepe fugit expedita voluptatum, ipsum
          dolorum eaque? Dicta ab voluptate perspiciatis quidem consequuntur ad
          similique quaerat ratione. Quibusdam, iusto nisi? Cupiditate vero
          perferendis quibusdam odit libero suscipit assumenda commodi modi
          quisquam porro tenetur rem at ratione saepe esse, debitis minima
          voluptatibus facere obcaecati! Debitis iste quaerat, quis placeat non
          eaque fugit dolorem perferendis velit odit corporis quae facere? Nam
          cum qui vero. Tenetur nemo ullam, quas consectetur doloribus quae
          expedita harum voluptate nobis, veritatis unde dicta ipsum dignissimos
          repellendus aliquid labore placeat. Ipsum similique, sed reiciendis
          explicabo nisi ducimus ratione. Voluptatem illum vitae cupiditate
          totam saepe expedita. Temporibus, incidunt error.
        </p>
      </div>
    </div>
  );
}

export default about;
