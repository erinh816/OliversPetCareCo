import heroImage01 from "../assets/images/heroimg01.jpg";
import heroImage02 from "../assets/images/heroimg02.jpg";
import heroImage03 from "../assets/images/heroimg03.jpg";

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
                We help pets to heve a happier and healthier life
              </h1>
              <p className="text__para"> At Oliver's Pet Care Co., we're dedicated to providing top-quality care for your beloved pets. With a team of passionate professionals and personalized services tailored to meet your pet's needs, we strive to ensure their happiness, health, and safety.
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
                    3
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
      </div>
    </section>

    </>
  )
}

export default Home;
