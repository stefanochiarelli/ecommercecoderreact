import React, {useState, useEffect, useContext} from 'react'
import './Navbar.scss'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import CartModal from "../CartModal/CartModal";
import { CartContext } from '../../Context/Cart/CartContext';
import {
    Link
  } from "react-router-dom";
import UserModal from '../UserModal/UserModal';



function Navbar() {


  const value = useContext(CartContext)
 
  const { setUserLocal} = value

  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  

  

  
  useEffect(() => {
   
      function checkUserData() {
        const user = JSON.parse(localStorage.getItem('User'))
    
        if (user) {
          setUserLocal(user)
        }
      }
    
      window.addEventListener('storage', checkUserData)
    
      return () => {
        window.removeEventListener('storage', checkUserData)
      }
      // eslint-disable-next-line
  }, [localStorage.getItem('User') ])
  

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light coffee__Navbar">
        <div className="container-fluid coffee__Navbar--container">
          <Link
            to="/"
            className="navbar-brand coffee__Navbar--a"
            
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="50"
              viewBox="0 0 220 60"
            >
              <path
                id="Chiarelli"
                className="cls-1"
                d="M85.888,30.961a6.952,6.952,0,0,0,5.564-2.674L89.4,25.839a4.326,4.326,0,0,1-3.37,1.565c-2.518,0-4.166-2.177-4.166-5.922,0-3.653,1.866-5.856,4.228-5.856a4.092,4.092,0,0,1,3.041,1.312l2.053-2.5A6.929,6.929,0,0,0,86,12.069c-4.354,0-8.133,3.506-8.133,9.551C77.87,27.758,81.518,30.961,85.888,30.961Zm7.853-.335h3.886V21.269a3.276,3.276,0,0,1,2.428-1.348c1.122,0,1.629.625,1.629,2.621v8.084h3.886V22.015c0-3.467-1.216-5.595-4.068-5.595a5.782,5.782,0,0,0-4.049,1.917l0.174-2.513V11.04H93.741V30.626Zm15.09,0h3.885V16.756H108.83v13.87Zm1.947-15.9a2.058,2.058,0,0,0,2.2-2.158,2.2,2.2,0,0,0-4.392,0A2.059,2.059,0,0,0,110.777,14.727Zm8.652,16.234a5.521,5.521,0,0,0,3.787-1.751h0.106l0.294,1.416h3.189V22.694c0-4.253-1.876-6.283-5.219-6.283a10.319,10.319,0,0,0-5.606,1.82l1.376,2.682a6.923,6.923,0,0,1,3.471-1.192,1.838,1.838,0,0,1,2.059,1.946c-5.191.584-7.376,2.156-7.376,5.113A3.9,3.9,0,0,0,119.429,30.961Zm1.307-3.223a1.241,1.241,0,0,1-1.472-1.277c0-1.053.85-1.83,3.622-2.214v2.344A2.819,2.819,0,0,1,120.736,27.739Zm9.313,2.887h3.886V22.588c0.7-1.891,1.9-2.565,2.888-2.565a4.708,4.708,0,0,1,1.319.168l0.744-3.491a3.472,3.472,0,0,0-1.565-.28c-1.337,0-2.771.908-3.726,2.759h-0.1l-0.28-2.424h-3.17v13.87Zm16.116,0.335a7.977,7.977,0,0,0,4.671-1.548l-1.264-2.507a5.311,5.311,0,0,1-2.866.888,3.187,3.187,0,0,1-3.369-2.852h7.825a9.318,9.318,0,0,0,.173-1.865c0-3.8-1.873-6.667-5.611-6.667-3.144,0-6.193,2.771-6.193,7.276C139.531,28.3,142.422,30.961,146.165,30.961Zm-2.857-8.855c0.264-1.693,1.3-2.53,2.51-2.53,1.514,0,2.146,1.049,2.146,2.53h-4.656Zm14.26,8.855a4.624,4.624,0,0,0,1.95-.352l-0.463-3.021a1.523,1.523,0,0,1-.467.056c-0.326,0-.712-0.27-0.712-1.161V11.04H153.99V26.316C153.99,29.122,154.9,30.961,157.568,30.961Zm7.558,0a4.624,4.624,0,0,0,1.95-.352l-0.464-3.021a1.517,1.517,0,0,1-.466.056c-0.327,0-.712-0.27-0.712-1.161V11.04h-3.886V26.316C161.548,29.122,162.459,30.961,165.126,30.961Zm3.98-.335h3.885V16.756h-3.885v13.87Zm1.947-15.9a2.058,2.058,0,0,0,2.2-2.158,2.2,2.2,0,0,0-4.392,0A2.059,2.059,0,0,0,171.053,14.727Z"
              />
              <path
                id="Coffee"
                className="cls-1"
                d="M155.2,49.821a4.842,4.842,0,0,0,3.789-1.722l-1.4-1.577a3.017,3.017,0,0,1-2.3,1.008c-1.715,0-2.838-1.4-2.838-3.814,0-2.353,1.271-3.772,2.88-3.772a2.865,2.865,0,0,1,2.072.845l1.4-1.613a4.833,4.833,0,0,0-3.529-1.523c-2.966,0-5.54,2.258-5.54,6.151C149.74,47.758,152.225,49.821,155.2,49.821Zm9.181,0a4.38,4.38,0,0,0,4.351-4.679,4.363,4.363,0,1,0-8.7,0A4.38,4.38,0,0,0,164.383,49.821Zm0-2.136c-1.095,0-1.639-1-1.639-2.543s0.544-2.55,1.639-2.55,1.639,1,1.639,2.55S165.478,47.685,164.383,47.685Zm6.525,1.92h2.647v-9.35a1.047,1.047,0,0,1,1.057-1.224,2.365,2.365,0,0,1,1.053.2l0.476-1.952a5.082,5.082,0,0,0-1.849-.324,3.045,3.045,0,0,0-3.384,3.318v9.333Zm5.691,0h2.646V40.133c0-.925.373-1.281,1.019-1.281a2.575,2.575,0,0,1,.926.193l0.476-1.952a5.157,5.157,0,0,0-1.781-.318c-2.412,0-3.286,1.549-3.286,3.434v9.4Zm-6.879-6.856h11.133V40.672h-9.8l-1.337.1v1.975Zm16.37,7.072a5.646,5.646,0,0,0,3.182-1l-0.861-1.615a3.769,3.769,0,0,1-1.952.572,2.14,2.14,0,0,1-2.3-1.837h5.33a5.682,5.682,0,0,0,.118-1.2c0-2.444-1.276-4.294-3.822-4.294a4.395,4.395,0,0,0-4.219,4.686A4.35,4.35,0,0,0,186.09,49.821Zm-1.946-5.7a1.727,1.727,0,0,1,1.71-1.629,1.4,1.4,0,0,1,1.462,1.629h-3.172Zm11.27,5.7a5.646,5.646,0,0,0,3.182-1l-0.862-1.615a3.763,3.763,0,0,1-1.951.572,2.14,2.14,0,0,1-2.295-1.837h5.33a5.682,5.682,0,0,0,.118-1.2c0-2.444-1.276-4.294-3.822-4.294a4.394,4.394,0,0,0-4.219,4.686A4.349,4.349,0,0,0,195.414,49.821Zm-1.946-5.7a1.727,1.727,0,0,1,1.71-1.629,1.4,1.4,0,0,1,1.462,1.629h-3.172Z"
              />
              <image
                id="coffee-cup"
                x="18"
                y="4"
                width="38"
                height="52"
                href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAA0CAYAAADmI0o+AAAHfElEQVRYhcWZe2wcRx3Hv7N7ew+f0ziNfbHPjpuHExo31FEDSWkDlVLRBxKigioRhfKOIEGiaiXEPwikIipAorQ8RKhIEVWj/oGKRAsCorZCVE0aQpAVJybEdvy4h+1zznuvvdc+Bs3cw3s7e742tpOvZHu8M/vbz/1+v/nN7ByBKC+AH0iS/ClCsF7oXYEopRaloEsW6FVK6dMA3nBadQN7FsCTHZ0htK9bVS4uwzJgmSaDRGohQfVyyQQwBGDUPs4jkBJyeEPXJjx46AuC0dXSonqNg2XVRXLmr39iDI8CeNpuX3I8LEApDW8M9awZFJMsy/xve8cGEIkjDDjH2D3WDeCTrKHrZUSvjtU7fIEAunr6eJt90rnIFEzDEB74XlUo5mFU71cUL/Ry+UOUWh8FcBZAGbYce5wQ8iKlVAhtTZ/43Fe1QLCdzs1Myu/87bWAMGAVRCRpjFrWAQAJDkYIiQZvWd879JH7IEnO6AJenw+h3v6KxywLs5EpnsArFfO+pmX5NNUyKYwNn2cWvwvgh8xDbZTS3vCW7egf+EDLR7GcCN+2Tbh+vUpn1GpY+zFxYRiWZQ6imvw80/2B4FpEp6UkshQhb8APQqTuGlhXBWxN0qaliC11fP4AS6u+GtgmDhZsvylg9pxWfH5Q0M5GsECbcNMNAbOF0hdoY5NrA+eth7Lt5uSYPZRenx/VEtbJZmWY/ffGqyehKLJw41rKsiirGbAs3kK5VCJVsC4GdgrAjnwue097sC24d8/gjSMz8hwsly9K5y9OsisTAIYBxO27i7cHtm4+MPafvwj3r40o6LVL3PKbpy/i4198hjU/D+AkHIt4NBKbv0FQLI5La208odYZag072EypXEZyMSXYWBOZet1qdG6x1oy5gfGL0fgN8pq1BBaJJ2vNusfsuwkOdmV8GrdtDgt2Vl1FFVTLc6szs9egeOS0bphFt8fs5xl5k358PqXp1nqG/+7vA3ZsFahXXYbJClnF6ulz0A1zphlYAoRY6OuRyKFH1pyLagWA7enYz9vvwgKm7P325DcJIfNQ04KRtSGreiudqV2JNANjC+g01BWUi0wWyBeEy66yqBMsZh/m3ONHoKbvdrPTVDkN9M+nQM6eB61CSRvWw7p3P8hD9wOKy2sEtb3zpt4bWAylEnuNAQJ+wZ6g+BzI878BTWUwcOst2BJaj7xu4IqaxQKDHb4I+tRRIOjYUtWSHs1D6QSrFLhUujXYQhLkZ8chaxqe2HcH9vZs5JfVfB5n4wt4+dI0rGgc0omToN864gCzeawJmPOVqALWallKZ0CeOw6Sy+HJfYN1KKa4VsIrozPo8CkYCnXAunQZuDrdeL89lOk0ZI/MCqvWGiy1DBh7o/nlCdCkimN33Y47Q7c2dP/83H8RUGQcGdqOB7Z0VzhGGmonf21bAstC9ioJ52PcQ7lcyfjHadCZKB67Yxv293YJ3V/bsxMdPg8C9j1nymHPnmOpNEzdGHfacXoszj+Q05Bdp/+FUNCPh7f31S8mCyW8NTXL15YPhzvRGfDy65pe3doEHdv2Wo4xwGyOgU22AtOJJCWXyzEam8WujR0g1S1mqljGM+9cwO9HxvmMZCpWzyXOz1X2WWSn4wW5FspsrtaOwSHhPIBa1lTTIss+oUTqUAzkR2dGkMgXcPSu2xFUPMiWSjAtC5FMHqem5iGHu4EPDop20FDDonBIAGODyNIUdoyWQDaFMHothaJh4sdnRhDNaPjynTtwd28XCrqOdKGAea2I312cgqUosI48jvongTgjq4oIjxIeDsT4PknXhQ6ue/YhoRXxnbf+jQk1i8ODW3FwSw9KhoFFTUOyUMaJkUmwNYDXr3C3w1utq34zsGotU4UOroMHQDaHecL3rWvDff3dHCqRy+HCQhrHhyeQ1U3gG18CBly2T9Q2I9naan+mTS4LWdWtagbYFBI64fEAT3wd5IWXEL0ygW/+/V20ez08tLppQWLLz7GvALt2CrdyNXgsDUmWdcs0BS+4gS0tS820rh146ijIpcugF0aRZd71+0F2bAPdvxfw+5rc6CyuaciKJ+F21uYGFue/m83MmlhC794FsnuX0LWsGhbwbKUKuMgNjIeSLqZcz9pXrJrH2N9MFoZpTriZdEv+oiTLKdtUXl3VciynVbbVLjMSTb6AAD8/kKQh+LxCx0pV9wQ7TCmWWOsYgF87zbqFkn8KRZaGHnvkAaFjZaJAqRKJyUgC/zx3GW6lYjmwiK4beOG578PrVYTO65ZZBFUrG4lfvXxqWTC3HENtAsRmhW3SCsGWDlKis/VjgbgwbhkwPnjVzzGsxoMUSSKM1PUhzcC4e1fbY9QGFptXoXg8c8KgFmA8lJFo0/uuTw0eS7JVwDW/WoHR/427FuXrl8m/v2JHm5iJJ1F22VLX1KyOsS8C3mR7iYMf24d253thC332Mw/j8Kcf4qO+/b1nMTYxDVhm5cwVFKPjMYxN8WgcAvCH9wVWPc3+qc+r3EsIeV81Y8/ugT+eef0Xr7B299CjP0lntK2G0bBSq4Zp/hbA864GAPwfwXxMbbmaRg4AAAAASUVORK5CYII="
              />
            </svg>
          </Link>
          <button
            className="navbar-toggler coffee__Navbar--toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse coffee__Navbar--li4 "
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link to="/" className="nav-link active  coffee__Navbar--a">
                  Home{" "}
                </Link>
              </li>
              <li className="nav-item ">
                <span className="nav-link active coffee__Navbar--a2 ">
                  <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret color="warning">
                      Catalogo de Cafes
                    </DropdownToggle>
                    <DropdownMenu>
                      <Link
                        to="/Catalogo/Suave?name=Suave"
                        style={{ textDecoration: "none" }}
                      >
                        <DropdownItem>Suave</DropdownItem>
                      </Link>
                      <DropdownItem divider />
                      <Link
                        to="/Catalogo/Medio?name=Medio"
                        style={{ textDecoration: "none" }}
                      >
                        <DropdownItem>Medio</DropdownItem>
                      </Link>
                      <DropdownItem divider />
                      <Link
                        to="/Catalogo/Fuerte?name=Fuerte"
                        style={{ textDecoration: "none" }}
                      >
                        <DropdownItem>Fuerte</DropdownItem>
                      </Link>
                    </DropdownMenu>
                  </ButtonDropdown>
                </span>
              </li>
              { localStorage.getItem('User') ?<li className="nav-item ">
                <UserModal buttonLabel="Tu Cuenta" />
              </li>: null}
            </ul>
          </div>
          <CartModal />
          
          
        </div>
      </nav>
    );
}

export default Navbar
