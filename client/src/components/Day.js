import React, {useEffect, useState } from "react"
import dayjs from "dayjs"
import EventDIv from "./Eventdiv";
import { Link } from "react-router-dom"

export default function Day ({day, rowIdx}) {
    function getCurrentDayClass() {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") 
          ? "bg-blue-600 text-white rounded-full w-7"
          : "";
      }
        let [titles, setTitle] = useState('')
        let [dates, setDates] =  useState('')
        let[descryption, setDescryption] = useState('')
    





      async function getuserInfo() {
        const res = await fetch('http://localhost:5000/userinfo', {
          headers: {
            'x-access-token': localStorage.getItem('token'),
          },
        })
      
    
        const data = await res.json()
        if (data.status === 'ok') {
          data.events.map(event =>{ setDates(elem => [...elem, event.EventDate])
         setTitle(elem => [...elem, event.title])
         setDescryption(elem => [...elem, event.descryption])
          })
        } else {
          alert(data.error)
        }
    }
    let [display, displayEvent] = useState([])
 function showEvent(day)
      {
       let divs = new Array
        for(let i = 0; i < titles.length;i++) 
        {

          if(day.format("YYYY-MM-DD") === dates[i])
          {
              const info = {
                title: titles[i],
                descryption: descryption[i]
              }
            divs.push(
              <Link to="/show" state={info}>
            <EventDIv title={titles[i]} />
            </Link>
            )
          }
          else
          {
            continue 
          }
         
        }
        return divs
      }


    useEffect(() => {
      getuserInfo()
     }, [])
     


  
    return (
        <div className="border border-gray-200 flex flex-col">
            <header className="flex flex-col items-center">
               <p className="font-black text-xl">{dayjs(day).format('ddd')}</p>
            
                <p className={`my-1 text-2xl text-center  ${getCurrentDayClass()}`}  >
            {dayjs(day).format('DD')}
            </p>
            </header>
            {showEvent(day)}
        </div>
    )
}

