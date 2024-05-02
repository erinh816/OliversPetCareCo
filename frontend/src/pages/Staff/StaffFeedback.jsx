import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import customerAvatar from "../../assets/images/customer-avatar.png"
import { dateFormat } from "../../utils/dateFormat";
import FeedbackForm from "./FeedbackForm";

const StaffFeedback = () => {

  //control the "leave feedback" button to show/unshow form
  const [showFeedbackForm, setShowFeedbackForm] = useState(false)



  return (
    <>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] front-bold text-headingColor mb-[30px]">All reviews (120)</h4>

        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full"><img className="w-full" src={customerAvatar} alt=""/></figure>

            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">FurryBall334</h5>
              <p className="text-[14px] leading-6 text-textColor">{dateFormat("02-16-2023")}</p>
              <p className="text__para mt-3 font-medium text-[15px]">So friendly and warm to me and my puppy &#128151;&#128151;&#128151; highly recommend!</p>
            </div>
          </div>

          <div className="flex gap-1">
            {[...Array(5).keys()].map((_,index) => <AiFillStar key={index} color="#0067FF"/>)}
          </div>

        </div>

      </div>

      {!showFeedbackForm && <div className="text-center">
        <button className="btn" onClick={()=>setShowFeedbackForm(true)}>Give Feedback</button>
      </div>}

      {showFeedbackForm && <FeedbackForm/>}

    </>
  )
}

export default StaffFeedback
