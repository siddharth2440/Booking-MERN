import React from 'react'
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

const Tables = () => {

    const rows = [
        {
          id: 1143155,
          product: "Acer Nitro 5",
          img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",
          date: "1 March",
          amount: 785,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 2235235,
          product: "Playstation 5",
          img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Michael Doe",
          date: "1 March",
          amount: 900,
          method: "Online Payment",
          status: "Pending",
        },
        {
          id: 2342353,
          product: "Redragon S101", 
          img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",
          date: "1 March",
          amount: 35,
          method: "Cash on Delivery",
          status: "Pending",
        },
        {
          id: 2357741,
          product: "Razer Blade 15",
          img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Jane Smith",
          date: "1 March",
          amount: 920,
          method: "Online",
          status: "Approved",
        },
        {
          id: 2342355,
          product: "ASUS ROG Strix",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Harold Carol",
          date: "1 March",
          amount: 2000,
          method: "Online",
          status: "Pending",
        },
      ];


  return (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                
                <TableRow>

                    <TableCell className='font-[700] opacity-85'>Tracking ID</TableCell>
                    <TableCell className='font-[700] opacity-85'>Product</TableCell>
                    <TableCell className='font-[700] opacity-85'>Customer</TableCell>
                    <TableCell className='font-[700] opacity-85'>Date</TableCell>
                    <TableCell className='font-[700] opacity-85'>Amount</TableCell>
                    <TableCell className='font-[700] opacity-85'>Payment Method</TableCell>
                    <TableCell className='font-[700] opacity-85'>Status</TableCell>

                    
                </TableRow>
            
            </TableHead>

            <TableBody>
              
              {rows.map((el,idx)=>{
                return (
                  <TableRow key={idx}>
                      
                    <TableCell className='font-[700] text-[1rem] opacity-95'>{el.id}</TableCell>
                    <TableCell className='font-[700] opacity-95 flex items-center justify-between gap-2'><img src={el.img} alt="" className='h-[2rem] inline-block rounded-[50%]'/>{el.product}</TableCell>
                    <TableCell className='font-[700] opacity-95'>{el.customer}</TableCell>
                    <TableCell className='font-[700] opacity-95'>{el.date}</TableCell>
                    <TableCell className='font-[700] opacity-95'>{el.amount}</TableCell>
                    <TableCell className='font-[700] opacity-95'>{el.method}</TableCell>
                    <TableCell className='font-[900] opacity-95'>{el.status}</TableCell>
                    
                  </TableRow>
                )
              })}

            </TableBody>

        </Table>
    </TableContainer>
  )
}

export default Tables