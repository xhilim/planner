import React, { useState,useContext,useEffect } from "react";
import {getMonth} from "../utility/getMonth"
import Month from "../components/Month"
import CalendarHeader from "../components/CalendarHeader"
import GlobalContext from "../context/GlobalContext";

export default function Calendar(){
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);


  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

    return (
      
        <>
             <CalendarHeader/>
            <div className="h-5/6 flex flex-columns">
              <Month month={currenMonth}/>
            </div>
        </>
           )

}

