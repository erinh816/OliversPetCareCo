import heroImage01 from "../assets/images/heroimg01.jpg";
import heroImage02 from "../assets/images/heroimg02.jpg";
import heroImage03 from "../assets/images/heroimg03.jpg";
import icon01 from "../assets/images/icon1.webp";
import icon02 from "../assets/images/icon2.webp";
// import icon02 from "../assets/images/heroend/map-location.png";
import icon03 from "../assets/images/icon3.png";
// import icon03 from "../assets/images/heroend/pet-grooming.png";
// import icon01 from "../assets/images/heroend/petcare.png";
import featureImg from "../assets/images/featureImg.jpg";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/gamer.png";
import faqImg from "../assets/images/faqimg.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList"
//TODO:icon 1~3 need to be replaced
import StaffList from "../components/Staff/StaffList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
    {/* hero section */}
    
    <section className="hero__section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

          {/* hero content */}
          <div>
            <div className="lg:w-[570px]">
              <h1 className="text=[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                We help pets <br/> have a happier <br/>and healthier life
              </h1>
              <p className="text__para"> At Oliver&apos;s Pet Care Co., we&apos;re dedicated to providing top-quality care for your beloved pets. With a team of passionate professionals and personalized services tailored to meet your pet&apos;s needs, we strive to ensure their happiness, health, and safety.
              </p>

              <button className="btn">Request an Appointment</button>
            </div>
              {/* hero counter */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-cente gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    20+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]">
                  </span>
                  <p className="text__para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    3~
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]">
                  </span>
                  <p className="text__para">Locations</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]">
                  </span>
                  <p className="text__para">Customer Satisfaction</p>
                </div>


              </div>

          </div>


          <div className="flex gap-[30px] justify-end">
            <div>
              <img className="w-full rounded-[20px]"src={heroImage01} alt=""/>
            </div>

            <div className="mt-[30px]">
              <img className="w-full mb-[30px] rounded-[20px]" src={heroImage02} alt=""/>
              <img className="w-full rounded-[20px]" src={heroImage03} alt=""/>
            </div>
          </div>

        </div>
      </div>
      
    </section>
    

    {/* hero section end */}
    <section>
      <div className="container">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="heading text-center">Providing the best pet care</h2>
          <p className="text_para text-center">
          Discover unparalleled pet care services tailored to your pets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {/* first */}
          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon01} alt=""/>
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Care Taker</h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">World class care for every pet.</p>
              <Link to="/staff" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5"/>
              </Link>
            </div>
          </div>

          {/* second */}
          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon02} alt=""/>
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Location</h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">We have 3 locations in Manhattan, Brookly and Westchester.</p>
              <Link to="/staff" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5"/>
              </Link>
            </div>
          </div>

          {/* third */}
          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon03} alt=""/>
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Book Appointment</h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Check out available time slots!</p>
              <Link to="/staff" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5"/>
              </Link>
            </div>
          </div>



        </div>

      </div>
    </section>

    {/* ============= about section start =============== */}
    <About/>
    {/* ============= about section end ================= */}

    {/* ============= services section start =============== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Services</h2>
            <p className="text-para text-center">Best local pet care for the community</p>
          </div>
          <ServiceList/>
        </div>
      
      </section>
    {/* ============= services section end ================= */}

    {/* ============= feature section start================= */}
    <section>
      <div className="container">
        <div className="flex items-center justify-between flex-col lg:flex-row">
        {/* feature content */}
          <div className="xl:w-[670px]">
            <h2 className="heading">Get an appointment <br/> anytime.
            </h2>
            <ul className="pl-4">
              <li className="text__para">
                1. Schedule the appointment directly.
              </li>
              <li className="text__para">
                2. Seach for your preferred care giver here, and contact the correct location
              </li>
              <li className="text__para">
                3. View our staff, use the online scheduling tool to select an appointment time.
              </li>
            </ul>
            <Link to="/"><button className="btn">Learn More</button></Link>
          </div>

          {/* feature image */}
          <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <img src={featureImg} className="w-3/4"/>
            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] border border-solid border-gray-400">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px] lg:gap-3">
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">Tue, 24</p>
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">10:00AM</p>
                </div>
                <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                  <img src={videoIcon} alt=""/>
                </span>
              </div>

              <div className="w-[65px] lg:w-[96px] bg-primaryColor py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-white font-[500] mt-2 lg:mt-4 rounded-full">
                Grooming
              </div>

              <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                <img src={avatarIcon} alt="" className="w-[40px]"/>
                <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">Tommy </h4>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
    {/* ============= feature section end ================= */}

    {/* Staff section start*/}
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Caretakers</h2>
            <p className="text-para text-center">Our mission is to make your pets happy</p>
        </div>
        <StaffList/>
      </div>
    </section>
    {/* Staff section end */}

    {/* FAQ section start */}
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-0">
          <div className="w-1/2 hidden md:block">
            <img src={faqImg} alt="" className="rounded-[30px] w-3/4"/>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="heading">Most questions by our beloved pet owners</h2>
            <FaqList/>
          </div>

        </div>

      </div>
    </section>
    {/* FAQ section end */}

    {/* Testimonial section start */}
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our customers say</h2>
            <p className="text-para text-center">Our mission is to make your pets happy</p>
        </div>
        <Testimonial/>
      </div>
    </section>
    {/* Testimonial section end */}
    </>
  )
}

export default Home;

//I added border to the feature section appointment card because the image I use has too light background color
//TODO:appointment card position is a bit off when having the smallest screen. It's supposed to be overlapped with the image but it's set aside
//TODO:added witdth for avatar, might cause problem
