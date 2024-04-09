import { staff } from "../../assets/data/staff";
import StaffCard from "./StaffCard";

const StaffList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
    {staff.map((staff)=><StaffCard key={staff.id} staff={staff}/>)}
    </div>
  )
}

export default StaffList;
