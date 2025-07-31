
import './App.css';
import frame4 from './assets/Frame_4.png';
import madaniLogo from './assets/image 1.png'
import checkLogo from './assets/check-circle.png'
import bsn from './assets/BSNlogo 1.png'
import arroweast from './assets/east.png'
import mcmc from './assets/MCMC_Logo 1.png'
import mdec from './assets/MDEC_logo 1.png'
import rectangleorange from './assets/Rectangle 1.png'
import grayrectangle from './assets/grayrectangle.png'
import infrontlogo from './assets/infrontlogo.png'
import malaysiamadani from './assets/Malaysia_Madani_logo 1.png'

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="Headericon">
          <div className="Infront-Logo-with-CDB-logo-1-1">
            <img src={infrontlogo} alt="Frame 4"></img>
          </div>
        </div>
      </div>
      {/* Digitize your business */}
      <div className="Frame-7">
        <div className='Frame-5'>
          <div className='Frame-9'>
            <div className='Frame-3'>
              <span className="Digitalise-your-business-with-up-to">
                Digitalise your business
                <span className="text-style-1">with up to</span>
              </span>
              <span className="RM5000-Grant">
                RM5000
                <span className="text-style-1"></span>
                <span className="text-style-2">Grant</span>
              </span>

            </div>
            <div className="Frame-22">
              <div className="Frame-13">
                <span className="Go-Digital-Now">
                  Go Digital Now
                </span>
              </div>
              <div className="Frame-14">
                <span className="Browse-Product">
                  Browse Product
                </span>
              </div>
            </div>
            <div className="Frame-51">
              <span className="An-Initiative-Under">
                An Initiative Under
              </span>
              <div className="Frame-mdec">
                <div><img src={malaysiamadani} alt="Frame 4"></img></div>
                <div><img src={bsn} alt="Frame 4"></img></div>
                <div><img src={mcmc} alt="Frame 4"></img></div>
                <div><img src={mdec} alt="Frame 4"></img></div>
              </div>
            </div>
          </div>
          <div className='Frame-4'><img src={frame4} alt="Frame 4"></img></div>
        </div>
      </div>

      {/* madani section */}
      <div className="Madani">
        <div className="Frame-madani">
          {/* Crash Naming */}
          <div className="Frame-madaniimg">
            {/* madani picture */}
            <div className="image-1">
              <img src={madaniLogo} alt="Madini Logo"></img>
            </div></div>

            {/* Side content */}
          <div className="Frame-madanicontent">
            <span className="Madani-PMKS-Digital-Grant">
              Madani PMKS Digital Grant
            </span>
            <span className="The-Madani-PMKS-Digital-Grant-is-a-government-grant-to-help-Malaysian-micro-small-and-medium-enter">
              The Madani PMKS Digital Grant is a government grant to help Malaysian micro, small, and medium enterprises (PMKS) use digital solutions to improve their business.
            </span>
            <div className='Frame-checklogo'>
              <div className='Frame-checklogoncontent'>
                <span className="-matching-grant-or-up-to-RM5000-per-company">
                  <img src={checkLogo} alt="Madini Logo"></img>
                  50% matching grant or up to RM5,000 per company.
                </span>
              </div>
                <span className="Managed-by-Ministry-of-Finance-BSN-MDEC-MCMC">
                    <img src={checkLogo} alt="Madini Logo"></img>
                    Managed by: Ministry of Finance, BSN, MDEC & MCMC.
                </span>
            </div>
          </div>
        </div>
      </div>

      {/* Solution section */}
      <div className="Oursolution">
        <div className="Oursolutioncontent">
          <div className="kickstart">
            <span className="Kickstarts-your-Digital-Journey">
              Kickstarts your Digital Journey
            </span>
            <span className="with-Our-Solutions">
            <span className="text-style-1">with</span>Our Solutions
          </span>
        </div>
        <div className="RM8">
            <span className="Starting-from-just-RM8month">
            Starting from just
            <span className="text-style-1">RM8</span><span className="text-style-2">/month</span>
          </span>
        </div>
        <div className="parentbox">
        <div className="althrnemis360">
          <div className="SolutionBox">
            <div className="Solutions">
              <div className="solutioncontent">
                <span className="-OFF">
                  50% OFF
                </span>
                <span className="EMIS-360">
                  EMIS 360
                </span>
                <span className="Simplified-e-Invoicing-solution-for-your-business">
                  Simplified e-Invoicing solution for your business.
                </span>
                <div className="buttonforcards">
                  <div className="moredetailsbutton">
                    <span className="More-Details">
                      More Details
                    </span>
                  </div>
                  <div className="getofferbutton">
                    <span className="Get-Offer">
                      Get Offer <img src={arroweast} alt="Madini Logo"></img>
                    </span>
                  </div>
              </div>
              </div>
            </div>
          </div>
          <div className="SolutionBox">
            <div className="Solutions">
              <div className="solutioncontent">
                <span className="-OFF">
                  50% OFF
                </span>
                <span className="EMIS-360">
                  EMIS 360
                </span>
                <span className="Simplified-e-Invoicing-solution-for-your-business">
                  Simplified e-Invoicing solution for your business.
                </span>
                <div className="buttonforcards">
                  <div className="moredetailsbutton">
                    <span className="More-Details">
                      More Details
                    </span>
                  </div>
                  <div className="getofferbutton">
                    <span className="Get-Offer">
                      Get Offer <img src={arroweast} alt="Madini Logo"></img>
                    </span>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="althrnemis360">
          <div className="SolutionBox">
            <div className="Solutions">
              <div className="solutioncontent">
                <span className="-OFF">
                  50% OFF
                </span>
                <span className="EMIS-360">
                  EMIS 360
                </span>
                <span className="Simplified-e-Invoicing-solution-for-your-business">
                  Simplified e-Invoicing solution for your business.
                </span>
                <div className="buttonforcards">
                  <div className="moredetailsbutton">
                    <span className="More-Details">
                      More Details
                    </span>
                  </div>
                  <div className="getofferbutton">
                    <span className="Get-Offer">
                      Get Offer <img src={arroweast} alt="Madini Logo"></img>
                    </span>
                  </div>
              </div>
              </div>
            </div>
          </div>
          <div className="SolutionBox">
            <div className="Solutions">
              <div className="solutioncontent">
                <span className="-OFF">
                  50% OFF
                </span>
                <span className="EMIS-360">
                  EMIS 360
                </span>
                <span className="Simplified-e-Invoicing-solution-for-your-business">
                  Simplified e-Invoicing solution for your business.
                </span>
                <div className="buttonforcards">
                  <div className="moredetailsbutton">
                    <span className="More-Details">
                      More Details
                    </span>
                  </div>
                  <div className="getofferbutton">
                    <span className="Get-Offer">
                      Get Offer <img src={arroweast} alt="Madini Logo"></img>
                    </span>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      <div className="solutiondetails">
        <div className="leftrightbanner">
          <div className="tabs">
            <div className="tabstext">
              <span className="tabs-solutions">
                Solutions
              </span>
              <div className="tabs">
                <div className="item1">
                  <span className="EMIS-360">
                    <img src={rectangleorange} alt="Madini Logo"></img>
                    EMIS 360
                  </span>
                </div>
                <div className="item1">
                  <span className="otherssolution">
                    <img src={grayrectangle} alt="Madini Logo"></img>
                    EMIS 360
                  </span>
                </div>
                <div className="item1">
                  <span className="otherssolution">
                    <img src={grayrectangle} alt="Madini Logo"></img>
                    EMIS 360
                  </span>
                </div>
                <div className="item1">
                  <span className="otherssolution">
                    <img src={grayrectangle} alt="Madini Logo"></img>
                    EMIS 360
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
