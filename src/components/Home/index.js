import React, { useState } from 'react'
import {FaRupeeSign} from 'react-icons/fa'
import {BsCheckLg} from 'react-icons/bs'
import './index.css'

const Home = () => {


    const [activeTab,changeTab]=useState('basic')

    const renderSmall=()=>{
        switch(activeTab){
            case 'basic':
                return (
                    <div className='sm-card'>
            <h1 className='sm-card-price'><FaRupeeSign/>1,994<span className='price-span'> INR/mo</span></h1>
            <div className='sm-card-blue-cont'>
                <p className='sm-card-blue-text'>Get your 3 months for 20/mo</p>
            </div>
            <div className='list-cont'>
                <h5 className='sm-list-title'>What's included on Basic</h5>
                <p className='sm-list'><BsCheckLg className='check'/>Basic reports</p>
                <p className='sm-list'><BsCheckLg className='check'/>Upto 1000 inventory locations</p>
                <p className='sm-list'><BsCheckLg className='check'/>2 staff accounts</p>
            </div>
            <button className='sm-card-btn'>Try for free</button>
        </div>
                )
            case 'shopify':
                return (
                    <div className='sm-card'>
            <h1 className='sm-card-price'><FaRupeeSign/>7,447<span className='price-span'> INR/mo</span></h1>
            <div className='sm-card-blue-cont'>
                <p className='sm-card-blue-text'>Get your 3 months for 20/mo</p>
            </div>
            <div className='list-cont'>
                <h5 className='sm-list-title'>What's included on Shopify</h5>
                <p className='sm-list'><BsCheckLg className='check'/>Professional reports</p>
                <p className='sm-list'><BsCheckLg className='check'/>Upto 1000 inventory locations</p>
                <p className='sm-list'><BsCheckLg className='check'/>5 staff accounts</p>
            </div>
            <button className='sm-card-btn'>Try for free</button>
        </div>
                )
            case 'advanced':
                return (
                    <div className='sm-card'>
            <h1 className='sm-card-price'><FaRupeeSign/>30,164<span className='price-span'> INR/mo</span></h1>
            <div className='sm-card-blue-cont'>
                <p className='sm-card-blue-text'>Get your 3 months for 20/mo</p>
            </div>
            <div className='list-cont'>
                <h5 className='sm-list-title'>What's included on Advanced</h5>
                <p className='sm-list'><BsCheckLg className='check'/>Custom report builder</p>
                <p className='sm-list'><BsCheckLg className='check'/>Upto 1000 inventory locations</p>
                <p className='sm-list'><BsCheckLg className='check'/>15 staff accounts</p>
            </div>
            <button className='sm-card-btn'>Try for free</button>
        </div>
                )
            default:
                return (
                    <div className='sm-card'>
            <h1 className='sm-card-price'><FaRupeeSign/>30,164<span className='price-span'> INR/mo</span></h1>
            <div className='sm-card-blue-cont'>
                <p className='sm-card-blue-text'>Get your 3 months for 20/mo</p>
            </div>
            <div className='list-cont'>
                <h5 className='sm-list-title'>What's included on Advanced</h5>
                <p className='sm-list'><BsCheckLg className='check'/>Custom report builder</p>
                <p className='sm-list'><BsCheckLg className='check'/>Upto 1000 inventory locations</p>
                <p className='sm-list'><BsCheckLg className='check'/>15 staff accounts</p>
            </div>
            <button className='sm-card-btn'>Try for free</button>
        </div>
                )
        }
    }

  return (
    <div>
    <div className='home-lg'>
      <div className='lg-pay-cont'>
        <button className='pay-btn'>Pay Monthly</button>
        <p className='pay-text'>Pay Yearly (save 25%)</p>
      </div>
      <div className='card-cont'>
        <div className='card'>
            <div className='title-cont'>
                <h4 className='card-title'>Basic</h4>
                <p className='card-disc'>FOR INDIVIDUAL AND SMALL BUSINESSES</p>
                <p className='card-para'>Everything you need to create your store,ship products,and process payments</p>
            </div>
            <h1 className='card-price'><FaRupeeSign/>1994<span className='price-span'> INR/mo</span></h1>
            <div className='card-blue-cont'>
                <p className='card-blue-text'>Get your 3 months for 20/mo</p>
            </div>
            <div className='list-cont'>
                <h5 className='list-title'>What's included on Basic</h5>
                <p className='list'><BsCheckLg className='check'/>Basic reports</p>
                <p className='list'><BsCheckLg className='check'/>Upto 1000 inventory locations</p>
                <p className='list'><BsCheckLg className='check'/>2 staff accounts</p>
            </div>
            <button className='card-btn'>Try for free</button>
        </div>
        <div className='card'>
            <div className='title-cont'>
                <h4 className='card-title'>Shopify</h4>
                <p className='card-disc'>FOR SMALL BUSINESSES</p>
                <p className='card-para'>Level up your business with professional reporting and more staff accounts</p>
            </div>
            <h1 className='card-price'><FaRupeeSign/>7,447<span className='price-span'> INR/mo</span></h1>
            <div className='card-blue-cont'>
                <p className='card-blue-text'>Get your 3 months for 20/mo</p>
            </div>
            <div className='list-cont'>
                <h5 className='list-title'>What's included on Shopify</h5>
                <p className='list'><BsCheckLg className='check'/>Professional reports</p>
                <p className='list'><BsCheckLg className='check'/>Upto 1000 inventory locations</p>
                <p className='list'><BsCheckLg className='check'/>5 staff accounts</p>
            </div>
            <button className='card-btn'>Try for free</button>
        </div>
        <div className='card'>
            <div className='title-cont'>
                <h4 className='card-title'>Advanced</h4>
                <p className='card-disc'>FOR MEDIUM AND LARGE BUSINESSES</p>
                <p className='card-para'>Get the best of shopify with custom reporting and our lower transaction fees</p>
            </div>
            <h1 className='card-price'><FaRupeeSign/>30,164<span className='price-span'> INR/mo</span></h1>
            <div className='card-blue-cont'>
                <p className='card-blue-text'>Get your 3 months for 20/mo</p>
            </div>
            <div className='list-cont'>
                <h5 className='list-title'>What's included on Advanced</h5>
                <p className='list'><BsCheckLg className='check'/>Custom report builder</p>
                <p className='list'><BsCheckLg className='check'/>Upto 1000 inventory locations</p>
                <p className='list'><BsCheckLg className='check'/>15 staff accounts</p>
            </div>
            <button className='card-btn'>Try for free</button>
        </div>
      </div>
    </div>
    <div className='small-home'>
        
        <div className='sm-btn-cont'>
            <button onClick={()=>changeTab('basic')} className='sm-btn' type='button'>Basic</button>
            <button onClick={()=>changeTab('shopify')} className='sm-btn' type='button'>Shopify</button>
            <button onClick={()=>changeTab('advanced')} className='sm-btn' type='button'>Advanced</button>
        </div>
        {renderSmall()}
        
    </div>
    </div>
  )
}

export default Home
