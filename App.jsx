import "./App.css";
import logo from "./assets/cashapp-logo.svg";
import eyebutton from "./assets/eye-button.svg";
import vector from "./assets/vector.svg";
import layer1 from "./assets/layer-1.png";
import intro1 from "./assets/intro-phone-1.png";
import introCube1 from "./assets/intro-cube-1.png";
import introCubes1 from "./assets/intro-cubes-1.png";
import introPillars from "./assets/intro-pillar-1.png";
import introStairs from "./assets/intro-stairs-1.png";
import vector4 from "./assets/vector-4.svg";
import button2 from "./assets/buttons.svg";
import vector3 from "./assets/vector-3.svg";
import payments from "./assets/payments-floor-1.svg";
import paymentsPhone from "./assets/payments-phone-1.png";
import paymentsColumn from "./assets/payments-column-1.png";
import paymentPillar from "./assets/payments-pillar-large.png";
import paymentPillar2 from "./assets/payments-pillar-small.png";
import paymentPillar3 from "./assets/payments-pillar-medium.png";
import paymentPillar4 from "./assets/payments-pillar-medium-1.png";
import paymentPillar5 from "./assets/payments-pillar-medium-1.png";
import paymentPillar6 from "./assets/payments-pillar-medium-1.png";
import paymentsColumn2 from "./assets/payments-column.png";
import paymentColumn3 from "./assets/payments-column-2.png";
import bankingCubes from "./assets/banking-cubes.png";
import bankingtrack from "./assets/banking-track-1.png";
import bankingPhone from "./assets/banking-phone.png";
import bankingRamp1 from "./assets/banking-ramp-1.png";
import bankingRamp2 from "./assets/banking-ramp-2.png";
import bankingTrack2 from "./assets/banking-track-2.png";
import bankingTube from "./assets/banking-tube.png";
import bankingHole from "./assets/banking-hole.png";
import bankingColumn from "./assets/banking-column.png";
import bankingMonster from "./assets/banking-monster.png";
import bankingStairs from "./assets/banking-stairs-1.png";
import bankingStairs2 from "./assets/banking-stairs-2.png";
import bankingHole2 from "./assets/banking-hole-1.png";
import boostStairs1 from './assets/boost-stairs-1.png';
// import boostStairs1 from './assets/boost-stairs-1.png';
import boostStairs2 from './assets/boost-stairs-2.png';
import boostCard from './assets/boost-card.png';
import boostCoffee from './assets/boost-coffee.png';
import boostHand from './assets/boost-hand.png';
import boostPhone from './assets/boost-phone.png';
import boostShoe from './assets/boost-shoe.png';
import boostBurger from './assets/boost-burger.png';
import investingGraph31 from './assets/investing-graph-3-1.png';
import investingRays1 from './assets/investing-rays-1.svg';
import investingRays2 from './assets/investing-graph-2.png';
import investingGraph1 from './assets/investing-graph-1.png';
import investingStocks from './assets/investing-stocks.png';
import investingBitcoin from './assets/investing-bitcoin.png';
// import vector from 'image.svg';
import vector2 from './assets/vector-2.svg';
// import Button2 from './assets/buttons-2.svg';

function App() {
  return (
    <div className="cash-app">
      <div className="div">
        <div className="overlap">
          <div className="hero-section">
            <div className="overlap-group">
              <img classsName="eye-button" alt="Eye button" src={eyebutton} />
              <div className="navbar">
                <div className="text-wrapper">SIGN IN</div>
                <div className="text-wrapper">LEGAL</div>
                <div className="licenses">LICENSES</div>
                <div className="text-wrapper">SECURITY</div>
                <div className="text-wrapper">CAREERS</div>
                <div classdsName="text-wrapper">PRESS</div>
                <div className="text-wrapper">SUPPORT</div>
                <div className="text-wrapper">STATUS</div>
                <div className="text-wrapper">CODEBLOG</div>
              </div>
              <img className="cashapp-logo" alt="Cashapp logo" src={logo} />
              <div className="rays">
                <div className="hero">
                  <div className="overlap-group-2">
                    <img className="layer" alt="Layer" src={layer1} />
                    <div className="text-wrapper-2">CASH</div>
                    <img
                      className="intro-phone"
                      alt="Intro phone"
                      src={intro1}
                    />
                    <div className="APP">
                      <br />
                      APP
                    </div>
                    <img
                      className="intro-cube"
                      alt="Intro cube"
                      src={introCube1}
                    />
                    <img
                      className="intro-cubes"
                      alt="Intro cubes"
                      src={introCubes1}
                    />
                    <img
                      className="intro-pillar"
                      alt="Intro pillar"
                      src={introPillars}
                    />
                    <img
                      className="intro-stairs"
                      alt="Intro stairs"
                      src={introStairs}
                    />
                  </div>
                </div>
              </div>
              <div className="fixed-footer">
                <div className="download-icons">
                  <div className="buttons">
                    <div className="app-store">
                      <img className="vector" alt="Vector" src={vector4} />
                      <div className="label">APP STORE</div>
                    </div>
                    <div className="google-play">
                      <img className="img" alt="Vector" src={vector} />
                      <div className="label-2">GOOGLE PLAY</div>
                    </div>
                  </div>
                </div>
                <div className="policy-text">
                  <p className="brokerage-services">
                    Brokerage services by Cash App Investing LLC, member FINRA /
                    SIPC. <br />
                    See our BrokerCheck. Investing involves risk; you may lose
                    money. Bitcoin trading offered by Cash App. Cash App
                    Investing does not trade bitcoin and Cash App is not a
                    member of FINRA or SIPC. Cash App facilitates banking
                    services through Sutton Bank and Lincoln Savings Bank,
                    Members FDIC.
                  </p>
                </div>
                <img className="buttons-2" alt="Buttons" src={button2} />
                <img className="vector-2" alt="Vector" src={vector3} />
              </div>
            </div>
          </div>
          <div className="section-payments">
            <div className="overlap-2">
              <img
                className="payments-floor"
                alt="Payments floor"
                src={payments}
              />
              <div className="section-text">
                <div className="text-wrapper-3">Payments</div>
                <p className="send-and-receive">
                  Send and receive money with anyone, donate&nbsp;&nbsp;to an
                  important cause, or tip professionals. <br />
                  Just enter a $cashtag, phone number, or <br />
                  scan their&nbsp;&nbsp;QR code to pay.
                </p>
              </div>
              <img
                className="payments-phone"
                alt="Payments phone"
                src={paymentsPhone}
              />
              <img
                className="payments-column"
                alt="Payments column"
                src={paymentsColumn2}
              />
              <img
                className="payments-pillar"
                alt="Payments pillar"
                src={paymentPillar}
              />
              <img
                className="payments-pillar-2"
                alt="Payments pillar"
                src={paymentPillar2}
              />
              <img
                className="payments-pillar-3"
                alt="Payments pillar"
                src={paymentPillar3}
              />
              <img
                className="payments-pillar-4"
                alt="Payments pillar"
                src={paymentPillar4}
              />
              <img
                className="payments-pillar-5"
                alt="Payments pillar"
                src={paymentPillar5}
              />
              <img
                className="payments-pillar-6"
                alt="Payments pillar"
                src={paymentPillar6}
              />
              <img
                className="payments-column-2"
                alt="Payments column"
                src={paymentsColumn}
              />
              <img
                className="payments-column-3"
                alt="Payments column"
                src={paymentColumn3}
              />
            </div>
          </div>
        </div>
        <div className="section-banking">
          <div className="overlap-3">
            <div className="overlap-4">
              <div className="overlap-5">
                <img
                  className="banking-cubes"
                  alt="Banking cubes"
                  src={bankingCubes}
                />
                <img
                  className="banking-track"
                  alt="Banking track"
                  src={bankingtrack}
                />
                <img
                  className="banking-phone"
                  alt="Banking phone"
                  src={bankingPhone}
                />
                <img
                  className="banking-ramp"
                  alt="Banking ramp"
                  src={bankingRamp1}
                />
                <div className="section-text-2">
                  <div className="text-wrapper-4">Banking</div>
                  <p className="receive-your">
                    Receive your paycheck, tax returns, and other direct
                    deposits up to two days early using your Cash App routing{" "}
                    <br />
                    and account number.
                  </p>
                </div>
              </div>
              <img
                className="banking-ramp-2"
                alt="Banking ramp"
                src={bankingRamp2}
              />
              <img
                className="banking-track-2"
                alt="Banking track"
                src={bankingTrack2}
              />
              <img
                className="banking-tube"
                alt="Banking tube"
                src={bankingTube}
              />
              <div className="overlap-6">
                <img
                  className="banking-hole"
                  alt="Banking hole"
                  src={bankingHole}
                />
                <img
                  className="banking-column"
                  alt="Banking column"
                  src={bankingColumn}
                />
              </div>
            </div>
            <img
              className="banking-monster"
              alt="Banking monster"
              src={bankingMonster}
            />
            <img
              className="banking-stairs"
              alt="Banking stairs"
              src={bankingStairs}
            />
            <img
              className="banking-stairs-2"
              alt="Banking stairs"
              src={bankingStairs2}
            />
            <img
              className="banking-hole-2"
              alt="Banking hole"
              src={bankingHole2}
            />
          </div>
        </div>
        <div className="section-cash-card">
          <div className="overlap-7">
            <img
              className="boost-stairs"
              alt="Boost stairs"
              src={boostStairs1}
            />
            <img
              className={boostStairs2}
              alt="Boost stairs"
              src="boost-stairs-2.png"
            />
            <img className="boost-card" alt="Boost card" src={boostCard} />
            <img
              className={boostCoffee}
              alt="Boost coffee"
              src="boost-coffee.png"
            />
            <img className="boost-hand" alt="Boost hand" src={boostHand} />
            <img
              className="boost-phone"
              alt="Boost phone"
              src={boostPhone}
            />
            <img className="boost-shoe" alt="Boost shoe" src={boostShoe} />
            <img
              className="boost-burger"
              alt="Boost burger"
              src={boostBurger}
            />
            <div className="section-text-3">
              <div className="cash-card-boost">
                Cash Card
                <br />
                &amp; Boost
              </div>
              <p className="p">
                The Cash Card is a free, customizable debit card that lets you
                pay online and in stores. It’s the only way to get
                Boosts—instant discounts that work at places where you want to
                spend.
              </p>
            </div>
          </div>
        </div>
        <div className="section-investing">
          <div className="overlap-8">
            <div className="investing-floor">
              <div className="investing-graph-wrapper">
                <img
                  className="investing-graph"
                  alt="Investing graph"
                  src={investingGraph31}
                />
              </div>
            </div>
            <img
              className="investing-rays"
              alt="Investing rays"
              src={investingRays1}
            />
            <img
              className="investing-graph-2"
              alt="Investing graph"
              src={investingRays2}
            />
            <img
              className="investing-graph-3"
              alt="Investing graph"
              src={investingGraph1}
            />
            <div className="section-text-4">
              <div className="text-wrapper-5">Stocks</div>
              <p className="text-wrapper-6">
                Whether you’re an expert or just getting started, Cash App is
                the fastest and most accessible way to invest in stocks. Start
                now with as little as $1.
              </p>
            </div>
            <div className="section-text-5">
              <div className="text-wrapper-5">Bitcoin</div>
              <p className="text-wrapper-7">
                Cash App is the fastest way to convert dollars to bitcoin. From
                your home screen, six taps are all it takes to stack sats, buy
                an entire bitcoin, or just see what it’s all about.
              </p>
            </div>
            <div className="text-wrapper-8">Investing</div>
            <img
              className="investing-stocks"
              alt="Investing stocks"
              src={investingStocks}
            />
            <img
              className="investing-bitcoin"
              alt="Investing bitcoin"
              src={investingBitcoin}
            />
            <div className="fixed-footer-2">
              <div className="download-icons">
                <div className="buttons">
                  <div className="app-store-2">
                    <img className="vector" alt="Vector" src={vector} />
                    <div className="label-3">APP STORE</div>
                  </div>
                  <div className="google-play-2">
                    <img className="img" alt="Vector" src={vector2} />
                    <div className="label-4">GOOGLE PLAY</div>
                  </div>
                </div>
              </div>
              <div className="policy-text">
                <p className="brokerage-services-2">
                  Brokerage services by Cash App Investing LLC, member FINRA /
                  SIPC. <br />
                  See our BrokerCheck. Investing involves risk; you may lose
                  money. Bitcoin trading offered by Cash App. Cash App Investing
                  does not trade bitcoin and Cash App is not a member of FINRA
                  or SIPC. Cash App facilitates banking services through Sutton
                  Bank and Lincoln Savings Bank, Members FDIC.
                </p>
              </div>
              <img className="buttons-2" alt="Buttons" src="buttons2.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
