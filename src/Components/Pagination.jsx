import { useRef, useState } from "react";

export const Pagination = ({ total, selected, onPageChange }) => {
  const [btn] = useState(new Array(total).fill(0));
  const pageref = useRef();
  console.log(pageref.current);
  return <div className="pageContainer">
    <button>prev</button>
    {btn.map((item,index)=> {
      return <button ref={()=> {
        pageref.current = index;
      }}>{index+1}</button>
    })
    }
    <button>next</button>
  </div>;
};
