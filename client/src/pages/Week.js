import dayjs from "dayjs";


export default function Week(){
    const startOfWeek = dayjs().startOf("week");

    const weekdays = new Array(7).fill(startOfWeek).map(
      (day, idx) => day.add(idx, "day").format("dddd, MMMM D YYYY")
    );

    function getCurrentDayClass(day) {
      return dayjs(day).format('ddd') === dayjs().format("ddd")
        ? "bg-blue-600 text-white rounded-full w-7"
        : "";
    }
  
    return (
      <div className="flex-1 grid grid-cols-7 place-content-center h-full">
        {weekdays.map((day) => (
          <div  key={day} className="border border-gray-200 flex flex-col h-48">
            <header className="flex flex-col items-center">
               <p className="text-sm mt-1  h-1/3">{dayjs(day).format('ddd')}</p>
            
                <p className={`text-sm p-1 my-1 text-center h-1/3 ${getCurrentDayClass(day)}`}  >
            {dayjs(day).format('DD')}
            </p>
            <p className="place-content-center "></p>
            </header>
          
          
        </div>
        ))}
      </div>
    );
        }


        