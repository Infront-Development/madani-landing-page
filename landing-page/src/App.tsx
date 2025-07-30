
import './App.css';
import frame4 from './assets/Frame_4.png';
import madaniLogo from './assets/image 1.png'
import checkLogo from './assets/check-circle.png'

function App() {
  return (
    <div className="App">
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
          </div>
          <div className='Frame-4'><img src={frame4} alt="Frame 4"></img></div>
        </div>
      </div>

      {/* madani section */}
      <div className="Frame-71">
        <div className="Frame-5">
          {/* Crash Naming */}
          <div className="Frame-72">
            {/* madani picture */}
            <div className="image-1">
              <img src={madaniLogo} alt="Madini Logo"></img>
            </div>

            {/* Side content */}
            <span className="Madani-PMKS-Digital-Grant">
              Madani PMKS Digital Grant
            </span>
            <span className="The-Madani-PMKS-Digital-Grant-is-a-government-grant-to-help-Malaysian-micro-small-and-medium-enter">
              The Madani PMKS Digital Grant is a government grant to help Malaysian micro, small, and medium enterprises (PMKS) use digital solutions to improve their business.
            </span>
            {/* <img className="check_circle Vector" src={checkLogo}></img> */}
            <span className="-matching-grant-or-up-to-RM5000-per-company">
              50% matching grant or up to RM5,000 per company.
            </span>
            <span className="Managed-by-Ministry-of-Finance-BSN-MDEC-MCMC">
              Managed by: Ministry of Finance, BSN, MDEC & MCMC.
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
