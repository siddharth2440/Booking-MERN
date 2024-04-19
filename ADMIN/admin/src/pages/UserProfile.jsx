import React from 'react'
import Layout from '../layout/Layout.jsx'
import Chart from '../components/Chart.jsx'
import Tables from '../components/Tables.jsx'

const UserProfile = () => {
  return (
    <Layout>

        <div className='px-3 py-1 '>

            <div className='grid grid-cols-[40%,55%] gap-7'>
                <div className='flex items-start justify-start px-5 py-10 gap-2 shadow-[0rem_0rem_1rem_rgba(0,0,0,0.5)] rounded'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT134M2tHzW7w2mSCTqT_668fGkHPcgq9rkbA&s" 
                    alt="" 
                    className='rounded-[40%]'
                    />

                    <div className='flex flex-col items-start justify-start gap-1'>
                        <h1>Jane Doe</h1>
                        <p>Email : janedoe@gmail.com</p>
                        <p>Phone : +1 2345 67 89</p>
                        <span>Elton St. 234 Garden Yd. NewYork</span>
                        <p>Country : USA</p>
                    </div>
                </div>

            <div className='shadow-[0rem_0rem_1rem_rgba(0,0,0,0.5)] py-5'>
                <Chart/>
                
            </div>
            </div>

            
            <div className='py-2 mt-5'>
                <h2 className='text-[1.4rem]  font-[500]  opacity-85 mb-3'>Last Transactions</h2>
                <Tables/>
            </div>



        </div>

    </Layout>
  )
}

export default UserProfile