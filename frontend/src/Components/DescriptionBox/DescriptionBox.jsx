import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        
        <div className="descriptionbox-description">
            <p>E-commerce (electronic commerce) refers to the buying and selling of goods or services over the internet. It enables businesses and consumers to conduct transactions online through websites or apps, offering a wide range of products, 
                digital payments, and delivery options. E-commerce platforms often include features like product catalogs, shopping carts, and secure payment gateways, making it convenient for customers to shop from anywhere, anytime. 
                Examples include Amazon, eBay, and Shopify.</p>
            <p>It allows businesses and consumers to complete transactions via websites or apps, with features like product listings, shopping carts, and secure payments</p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
