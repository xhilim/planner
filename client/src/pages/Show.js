
import React, {useEffect, useState, } from "react"
import { useLocation } from "react-router-dom"
import dayjs from "dayjs"






export default function ShowE(){

const location = useLocation()

const title = location.state.title
const descryption = location.state.descryption

return (
    <>
          <h1>{title}</h1>


          <p>{descryption}</p>
    </>
)








}