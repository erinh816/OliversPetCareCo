import StaffCard from "../../components/Staff/StaffCard";
import { staff } from "../../assets/data/staff";
import Testimonial from "../../components/Testimonial/Testimonial";

const Staff = () => {
  return (
    <>
      {/* search input section */}
      <section className="bg-[#fff9ea]">
        
        <div className="container text-center">
          <h2 className="heading">Find a Caretaker</h2>

          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">

            <input 
              type="search" 
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search a Caretaker"
            />
            <button className="btn mt-0 rouded-[0px] rounded-r-md">Search</button>

          </div>

        </div>
      </section>

      {/* staff cards section */}
      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {staff.map((staff)=><StaffCard key={staff.id} staff={staff}/>)}
          </div>
        </div>
      </section>

      {/* testimonial section */}
      <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our customers say</h2>
            <p className="text-para text-center">Our mission is to make your pets happy</p>
        </div>
        <Testimonial/>
      </div>
    </section>
    </>
  )
}

export default Staff;


//TODO: search button's class doesn't work because rounded-[0px] can't overwrite btn in index.css
//TODO: maybe add one more doctor because of the lg:grid-cols-4 added, 3 staff don't take the whole width anymore
