import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Status from '../../Components/Status/Status'
import imgLogo from '../../images/img-Education/img-logo.png'
import hour from '../../images/img-Education/hour.png'
import DataEducation from '../../Data/DataEducation'
import './Education.css'

const Education = () => {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div className='div-main'>
            <div>
                <Status />
            </div>
            <div className='div-center'>
                <div className='items'>
                    {DataEducation.map((item) => (
                        <div className='product-item'>
                            <div className='div-img'>
                                <img src={item.img} alt="" />
                            </div>
                            <div className='div-name'>
                                <p>{item.name}</p>
                            </div>
                            <div className='div-title'>
                                <div className='title'>
                                    <p>
                                        {item.title}
                                    </p>
                                </div>
                                <div className='div-time-ohihhih'>
                                    <div className='div-logo-item'>
                                        <img src={imgLogo} alt="" />
                                        <p>قهوه اریک</p>
                                    </div>
                                    <div className='hour'>
                                        <img src={hour}/>
                                        <p>تاریخ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>

                <div>

                </div>
            </div>
        </div>
        <div>
                <Footer />
        </div>
    </div>
  )
}

export default Education