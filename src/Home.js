import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="Home">
      <div className="home_container">
        <img className="home_image" src="banner.jpg" alt="banner" />
      </div>
      <div className="home_row">
        <Product
          id="957754"
          title={"Rick n Morty Tee"}
          price={19.99}
          image={"one.jpg"}
          rating={5}
        />
        <Product
          id="1234"
          title={"Greek geek tee"}
          price={19.99}
          image={"two.jpg"}
          rating={5}
        />
      </div>
      <div className="home_row">
        <Product
          id="9876"
          title={"Greek monstor tee"}
          price={19.99}
          image={"three.jpg"}
          rating={5}
        />
        <Product
          id="4567"
          title={"Johny bravo tee"}
          price={19.99}
          image={"four.jpg"}
          rating={5}
        />
        <Product
          id="5683"
          title={"Rick n morty tee"}
          price={19.99}
          image={"five.jpg"}
          rating={5}
        />
      </div>
      <div className="home_row">
        <Product
          id="47755"
          title={
            "Banner printing,price is calculated per meter jadgdyugfjyac ajygjdjabfsf afhbfjb"
          }
          price={19.99}
          image={"banner2.jpg"}
          rating={5}
        />
      </div>
      <footer>
        
      </footer>
    </div>
  );
}

export default Home;
