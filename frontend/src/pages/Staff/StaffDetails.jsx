import staffImg01 from "../../assets/images/staff-img01.jpg";
import starIcon from "../../assets/images/Star.png";
import { useState } from "react";
import StaffAbout from "./StaffAbout";
import StaffFeedback from "./StaffFeedback";
import StaffSidePanel from "./StaffSidePanel";

const StaffDetails = () => {

  const [tab, setTab] = useState('about')
  return (
    <>
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">

          {/* this div takes the span of 2 columns of the 3 columns parent div */}
          <div className="md:col-span-2">
            {/* a staff's card */}
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={staffImg01} alt="" />
              </figure>
              <div>
                <span 
                  className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                    CEO/Caretaker
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">Oliver</h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold txt-headingColor">
                    <img src={starIcon} alt=""/> 4.9
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-textColor">
                    (120)
                  </span>
                </div>
                <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                  Oliver is an experienced pet caretaker
                </p>
              </div>


            </div>
            {/* about the staff and feedback button  */}
            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button 
                onClick = {()=>setTab("about")}
                className={`${tab==="about" && "border-b border-solid border-primaryColor"} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                  About
              </button>
              <button 
                onClick = {()=>setTab("feedback")}
                className={`${tab==="feedback" && "border-b border-solid border-primaryColor"} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                  Feedback
              </button>
            </div>

            {/* about the staff and feedback section */}
            <div className="mt-[50px]">
              {tab==="about" && <StaffAbout/>}
              {tab==="feedback" && <StaffFeedback/>}
            </div>



          </div>

          {/* last div takes 2 so this will automatically takes the remaining 1 column */}
          <div>
            <StaffSidePanel />
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default StaffDetails;

//TODO: title part's color needs to be updated to green themed
