import { dateFormat } from "../../utils/dateFormat";


const StaffAbout = () => {
  return (
    <>
    <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor front-semibold flex items-center gap-2">
            About
            <span className="text-primaryColor font-bold text-[24px] leading-9">Oliver</span>
        </h3>
        <p className="text__para">Oliver is the biggest animal lover in the whole world. He started taking care of neighbor&apos;s pets since he was 10 years old.</p>
    </div>

    {/* Experience */}
    <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor front-semibold">
            Experience
        </h3>

        <ul className="pt-4 md:p-5">
            {/* first experience */}
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                <div>
                    <span className="text-primaryColor text-[15px] leading-6 font-semibold">{dateFormat("08-22-2005")} - {dateFormat("08-22-2010")}</span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">Cat Sitting & Medical Shots</p>
                </div>
                <p className="text-[16px] leading-5 font-medium text-textColor">Neighbors Home, New York</p>
            </li>

            {/* second experience */}
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                <div>
                    <span className="text-primaryColor text-[15px] leading-6 font-semibold">{dateFormat("06-23-2012")} - {dateFormat("06-23-2018")}</span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">Dog Walking</p>
                </div>
                <p className="text-[16px] leading-5 font-medium text-textColor">Wag! App, New York</p>
            </li>

            {/* third experience */}
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                <div>
                    <span className="text-primaryColor text-[15px] leading-6 font-semibold">{dateFormat("06-12-2019")}</span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">Pet Care Store Operation</p>
                </div>
                <p className="text-[16px] leading-5 font-medium text-textColor">Oliver&apos;s Pet Care Co., New York</p>
            </li>


        </ul>
    </div>

    {/*  */}

    </>
  )
}

export default StaffAbout
