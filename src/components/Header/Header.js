import React,{useState,useEffect} from 'react'
import "./header.css"
import "../Home/home.css"
import { Link } from 'react-router-dom'
import LoginModal from './LoginModal';
export default function Header() {
    
const[modalShow,setModalShow]=useState(false);
const [isSticky, setIsSticky] = useState(false);
const handleScroll = () => {
    const heightFromTop = window.scrollY;
    console.log("Scroll position:", heightFromTop);
    if (heightFromTop > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return ( 
    <>
    <div className= {`header-area ${isSticky ? "stick" : ""}`}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-7 col-lg-2 col-md-3">
                    <div className="logo">
                        <Link to={"/"}><img src="./assets/home/logo.png" alt="Logo"/></Link>
                    </div>
                </div>

                <div className="col-5 col-lg-10 col-md-9">
                    <nav className="header-menubar">
                        <Link className="popup-btun" onClick={() => setModalShow(true)}>Login/Signup</Link>
                        <div className='toogle-line'>
                            <div className="btn1">
                                <div className="menu-line icon-top"></div>
                                <div className="menu-line icon-center"></div>
                                <div className="menu-line icon-bottom"></div>
                            </div> 
                        </div>
                    </nav>
                </div>

            </div>
        </div>
    </div>

    {modalShow ? 
      <LoginModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />:""    
    }

    </>
  )
}
