import { faqs } from "../../assets/data/faqs";
import FaqItem from "./FaqItem";

const FaqList = () => {
  return (
    <div>
        <ul className="mt-[38px]">
            {faqs.map((item, index)=><FaqItem key={index} item={item}/>)}
        </ul>
    </div>
  )
}

export default FaqList
