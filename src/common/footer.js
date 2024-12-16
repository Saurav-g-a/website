import React from 'react'
import Logo from "../assets/images/logo.png"

function Footer() {
    return (
        <div className='bg-headerBackground bg-cover bg-no-repeat pt-12'>
            <img src={Logo} className='mx-auto' />
            <p className='text-center text-[#95AAAD] Gilroy text-lg py-8'>Since 2015, CodeWarranty has been a leading web and mobile app development agency, <br /> specializing in creating custom solutions for businesses.</p>
            <div className='grid grid-cols-5 gap-4 text-[#95AAAD] mt-5 px-8'>
                <div className=' col-span-1'>
                    <h1 className='Brockmann text-xl text-white'>Most Popular</h1>
                    <p className='Gilroy text-lg'>Smartphones </p>
                    <p className='Gilroy text-lg'> Laptops </p>
                    <p className='Gilroy text-lg'>  Tablets/iPads</p>
                    <p className='Gilroy text-lg'>  Appliances</p>
                    <p className='Gilroy text-lg'>  Televisions</p>
                    <p className='Gilroy text-lg'>  Game Consoles</p>
                </div>
                <div className=' col-span-1'>
                    <h1 className='Brockmann text-xl text-white'>Electronics</h1>
                    <p className='Gilroy text-lg'>Tablets</p>
                    <p className='Gilroy text-lg'> Camera/Camcorder
                    </p>
                    <p className='Gilroy text-lg'>  Laptops</p>
                    <p className='Gilroy text-lg'>  Desktops
                    </p>
                    <p className='Gilroy text-lg'>  MP3 Player
                    </p>
                    <p className='Gilroy text-lg'>  PC Peripheral
                    </p>
                    <p className='Gilroy text-lg'>  Portable Products
                    </p>
                    <p className='Gilroy text-lg'>  Video Gaming
                    </p>
                </div>
                <div className=' col-span-1'>
                    <h1 className='Brockmann text-xl text-white'>Home/Garden</h1>
                    <p className='Gilroy text-lg'>Floor care </p>
                    <p className='Gilroy text-lg'> Furniture </p>
                    <p className='Gilroy text-lg'>  Home Security</p>
                    <p className='Gilroy text-lg'>  Housewares </p>
                    <p className='Gilroy text-lg'>  Lawn & Garden</p>
                </div>
                <div className=' col-span-1'>
                    <h1 className='Brockmann text-xl text-white'>Misc</h1>
                    <p className='Gilroy text-lg'>Car Mobile
                    </p>
                    <p className='Gilroy text-lg'> GPS & Navigation
                    </p>
                    <p className='Gilroy text-lg'>  Jewelry</p>
                    <p className='Gilroy text-lg'>  Personal Care
                    </p>
                    <p className='Gilroy text-lg'>  Toys</p>
                    <p className='Gilroy text-lg'>  Watches</p>
                </div>
                <div className=' col-span-1'>
                    <h1 className='Brockmann text-xl text-white'>Sports Equipment</h1>
                    <p className='Gilroy text-lg'>Cycling </p>
                    <p className='Gilroy text-lg'> Fitness Equipment
                    </p>
                    <p className='Gilroy text-lg'>  Golf</p>
                    <h1 className='Brockmann text-xl text-white pt-5'>Brand</h1>
                    <p className='Gilroy text-lg'>  Samsung mobile
                    </p>
                    <p className='Gilroy text-lg'>  Iphone mobile</p>
                </div>
            </div>

            <div className=' text-center py-3'>
                <p className='text-center Brockmann text-white'>© 2024 CodeWarranty. All Rights Reserved. </p>
            </div>
        </div>
    )
}

export default Footer