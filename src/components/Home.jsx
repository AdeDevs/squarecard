import ArsenalBio from "../assets/arsenalbio.png";
import Mit from "../assets/mit.png";
import Precision from "../assets/precision.png";
import Stretch from "../assets/stretch.png";
import Center from "../assets/center.png";
import Circles from "../assets/circles.png";
import Ticks from "../assets/ticks.png";
import Bottom from "../assets/shield.png";
import Types from "../assets/types.png";
import Open from "../assets/opening.png";
import Analysis from "../assets/analysis.png";
import Logo from "../assets/logo.png"
import { useState } from "react";

function HomeScreen() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeButton, setActiveButton] = useState(null)

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
      <main>
        <div className="banking-services">
          <div className="services-info">
            <div>
              <h1>We tried to provide you with all global banking services</h1>
            </div>
            <div>
              <p>
                We made every effort to ensure that you have access to a comprehensive range of global banking services. Our aim was to provide you with a seamless banking experience that caters to your financial needs regardles of your location.
              </p>
              <section className="btn">
              <p>Explore More</p>
              <ion-icon name="return-up-forward-outline"></ion-icon>
              </section>
            </div>
          </div>
          <div className="services-illst">
            <section onClick={() => setActiveIndex(0)} className={activeIndex === 0 ? 'active' : ''}>
              <h1>Simultaneous and Fast Operations</h1>
              <img id="upsize" src={Circles} alt="" />
            </section>
            <section onClick={() => setActiveIndex(1)} className={activeIndex === 1 ? 'active' : ''}>
              <h1>Can be connected to all accounts</h1>
              <img id="upsize" src={Ticks} alt="" />
            </section>
            <section onClick={() => setActiveIndex(2)} className={activeIndex === 2 ? 'active' : ''}>
              <h1>Strong and advanced encryption</h1>
              <img src={Bottom} alt="" />
            </section>
            <section onClick={() => setActiveIndex(3)} className={activeIndex === 3 ? 'active' : ''}>
              <h1>Comprehensive electronic banking services</h1>
              <img src={Center} alt="" />
            </section>
          </div>
        </div>
        <div className="fast-banking">
          <header>
            <h1> up-to-date and fast banking services in one place </h1>
            <section className="nav-btn">
              <button onClick={() => setActiveButton(0)} className={activeButton === 0 ? 'active' : ''}> <ion-icon name="return-up-back-outline"></ion-icon> </button>
              <button onClick={() => setActiveButton(1)} className={activeButton === 1 ? 'active' : ''}> <ion-icon name="return-up-forward-outline"></ion-icon> </button>
            </section>
          </header>
          <div className="services-box">
            <section onClick={() => setActiveIndex(4)} className={activeIndex === 4 ? 'active' : ''}>
              <h1>Types Of Business and personal account</h1>
              <p>
                you can easily open any type of account including personal and business, and use all the services you need easily and online. we will update and add global services for you.
              </p>
              <img src={Types} alt="image" />
            </section>
            <section onClick={() => setActiveIndex(5)} className={activeIndex === 5 ? 'active' : ''}>
              <h1>opening of essential bank account</h1>
              <p>
                it is not impossible to open an account in an online and simple way with just two clicks... you can save your time and create a fast and safe bank account for yourself and your loved ones.
              </p>
              <img id="upscale" src={Open} alt="image" />
            </section>
            <section onClick={() => setActiveIndex(6)} className={activeIndex === 6 ? 'active' : ''}>
              <h1>Information And Detailed Analysis of Your Accounts</h1>
              <p>
                See the most detailed information of your account without deducting money. You can manage account information and even have access to tools to manage your account balance effectively.
              </p>
              <img src={Analysis} alt="image" />
            </section>
          </div>
        </div>
      </main>
      <div className="features">
        <section className="one">
          <h1>
            what feautures make our <button>from 2022</button> bank card <span>distinctive</span> and <span> popular</span> ?
          </h1>
          <p>
            according to the needs of users and different strata, we have provided a new bank card that can be the answer to all your needs.
          </p>
        </section>
        <section className="two"></section>
        <section className="three">
          <ul>
            <li> <span>1</span> personalization feature</li>
            <li> <span>2</span> ease of use</li>
            <li> <span>3</span> user friendly cards</li>
            <li> <span>4</span> low fee</li>
            <li> <span>5</span> broad acceptance</li>
          </ul>
        </section>
      </div>
      <footer>
        <div className="footer-one">
          <section>
            <h1><img src={Logo} alt="logo" /></h1>
            <p>
              a modern card for a modern world and advanced and up-to-date services for your convenience
            </p>
          </section>
          <section>
            <h2>Quick Access</h2>
            <ul>
              <li>About us</li>
              <li>Services</li>
              <li>careers</li>
              <li>learn</li>
              <li>branches</li>
              <li>faq</li>
              <li>blog</li>
            </ul>
          </section>
        </div>
        <div className="footer-two">
          <p>to know the latest news and update, enter your email so we can contact you</p>
          <form>
            <input type="email" placeholder="Enter Email Address" required/>
            <button>Subscribe <span> <ion-icon name="return-up-forward-outline"></ion-icon> </span></button>
          </form>
          <section className="contact">
            <h3>contact us:</h3>
            <ul>
            <li>
                <ion-icon name="logo-facebook"></ion-icon>
              </li>
              <li>
                <ion-icon name="logo-instagram"></ion-icon>
              </li>
              <li>
                <ion-icon name="logo-youtube"></ion-icon>
              </li>
              <li>
                <ion-icon name="logo-twitter"></ion-icon>
              </li>
              <li>
                <ion-icon name="logo-instagram"></ion-icon>
              </li>
            </ul>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default HomeScreen;
