import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from "react-icons/ai";

const socialLinks = [
  {
    path:"https://github.com/erinh816",
    icon:<AiFillGithub className="group-hover:text-white w-4 h-5"/>
  },
  {
    path:"https://www.linkedin.com/",
    icon:<RiLinkedinFill className="group-hover:text-white w-4 h-5"/>
  },
  {
    path:"https://www.instagram.com/",
    icon:<AiOutlineInstagram className="group-hover:text-white w-4 h-5"/>
  },
];

const quickLinks01 = [
  {
    path:"/home",
    display:"Home",
  },
  {
    path:"/",
    display:"About Us",
  },
  {
    path:"/services",
    display:"Services",
  },
  {
    path:"/",
    display:"Blog",
  },
];

const quickLinks02 = [
  {
    path:"/find-a-caretaker",
    display:"Find a Caretaker",
  },
  {
    path:"/",
    display:"Request an Appointment",
  },
  {
    path:"/",
    display:"Find a Location",
  },
  {
    path:"/find-a-caretaker",
    display:"Get an Opinion",
  },
];

const quickLinks03 = [
  {
    path:"/",
    display:"Donate",
  },
  {
    path:"/contact",
    display:"Contact us",
  },
];

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          {/* copy right & social media */}
          <div>
            <img src={logo} alt="" className="w-45 h-20"/>
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">Copyright &#169; {year} developed by Silu Hu. All Rights Reserved</p>
            
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link,index)=>
                <Link to={link.path} key={index} className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  {link.icon}
                </Link>)}
            </div>


          </div>

          {/* quickLinks 1 */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>

            <ul>
              {quickLinks01.map((link, index)=>
                <li key={index} className="mb-4">
                  <Link to={link.path} className="text-[16px] leading-7 font-[400] text-textColor">
                    {link.display}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* quickLinks 2 */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to
            </h2>

            <ul>
              {quickLinks02.map((link, index)=>
                <li key={index} className="mb-4">
                  <Link to={link.path} className="text-[16px] leading-7 font-[400] text-textColor">
                    {link.display}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* quickLinks 3 */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>

            <ul>
              {quickLinks03.map((link, index)=>
                <li key={index} className="mb-4">
                  <Link to={link.path} className="text-[16px] leading-7 font-[400] text-textColor">
                    {link.display}
                  </Link>
                </li>)}
            </ul>
          </div>


        </div>
      </div>
    </footer>
  )
}

export default Footer;


//TODO:clear unnecessary imported icons
//TODO:added instagram account for the business
//TODO:paths need to be updated
