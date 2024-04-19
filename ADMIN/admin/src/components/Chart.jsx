import React from 'react'
import {AreaChart,Area, ResponsiveContainer, XAxis, YAxis, Tooltip, BarChart, Bar} from "recharts"

const Chart = () => {

  const data = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
    { name: "July", Total: 1200 },
  ]

  return (
    <div className='flex h-[100%] w-[100%] px-3'>


      {/* <BarChart></Barchart> */}
      {/* AreaChart */}
      <ResponsiveContainer className="w-[100%]" >

        <AreaChart
          data={data}
        > 

          <XAxis dataKey="name" /> //label the graph X-Axis
          <YAxis dataKey="Total" />   //label the graph Y-Axis
          <Tooltip/>
          <Area      //Bar 
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="#8884d8"
            animateNewValues={true}
            activeDot={true}
          />
        </AreaChart>

      </ResponsiveContainer>

    </div>
  )
}

export default Chart