import ArsenalBio from "../assets/arsenalbio.svg";
import Mit from "../assets/mit.svg";
import Precision from "../assets/precision.svg";
import Stretch from "../assets/stretch.svg";

function HomeScreen() {
  return (
    <div className="home-box">
      <header className="landing">
        <div className="text">
          <h1>A Modern Bank Card For A Modern World</h1>
          <p>
            The mordern bank card embraces the era of contactless payments.
            enabling swift and effortless transactions with just a tap or a
            wave. no more fumbling for cash or struggling with outdated payment
            methods
          </p>
          <section className="btn">
            <p>Explore More</p>
            <ion-icon name="return-up-forward-outline"></ion-icon>
          </section>
          <ul className="sponsors">
            <li>
              <img src={Precision} alt="logo" />
            </li>
            <li>
              <img src={Mit} alt="logo" />
            </li>
            <li>
              <img src={ArsenalBio} alt="logo" />
            </li>
            <li>
              <img src={Stretch} alt="logo" />
            </li>
            <li>
              <img src={Stretch} alt="logo" />
            </li>
          </ul>
        </div>
        <div className="bg"></div>
        <div className="sponsors-container">
          <ul className="sponsors">
            <li>
              <img src={Precision} alt="logo" />
            </li>
            <li>
              <img src={Mit} alt="logo" />
            </li>
            <li>
              <img src={ArsenalBio} alt="logo" />
            </li>
            <li>
              <img src={Stretch} alt="logo" />
            </li>
            <li>
              <img src={Stretch} alt="logo" />
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default HomeScreen;
