import React from "react"
import Day from "./Day"

export default function Month({month}) {
return(
    <div className="flex-1 grid grid-cols-7 grid-rows-5 w-full  p-4  text-fuchsia-900 bg-white rounded-2xl shadow-xl ">
       {month.map((row, i) => (
            <React.Fragment key={i}>
                {row.map((day,idx) => (
                    <Day day={day} key={idx} rowIdx={i}/>
                ))}
            </React.Fragment>
       ))}
    </div>
    )
} 

