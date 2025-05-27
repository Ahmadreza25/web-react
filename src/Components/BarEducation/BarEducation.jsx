import React from 'react'
import img1 from '../../images/img-Education/img-1.png'
import img2 from '../../images/img-Education/img-2.png'
import img3 from '../../images/img-Education/img-3.png'
import img4 from '../../images/img-Education/img-4.png'
import hour from '../../images/img-Education/hour.png'
import './BarEducation.css'
const BarEducation = () => {
  return (
    <div>
        <div className='main'>
            <div className='div___title'>
                <p>
                    تازه های خبری
                </p>
            </div>
            <div>
                <div className='div___items'>
                    <div className='div___img'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='div___titles'>
                        <div className='items-title'>
                            <p>انواع قهوه</p>
                        </div>
                        <div className='div___time'>
                            <img src={hour}/>
                            <p>شنبه 1 دی 1403</p>
                        </div>
                    </div>
                </div>
                <div  className='div___items'>
                    <div className='div___img'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='div___titles'>
                    <div className='items-title'>
                        <p>انواع قهوه ساز و آموزش استفاده از آنها</p>
                    </div>
                        <div className='div___time'>
                            <img src={hour}/>
                            <p>شنبه 1 دی 1403</p>
                        </div>
                    </div>
                </div>
                <div  className='div___items'>
                    <div className='div___img'>
                        <img src={img3} alt="" />
                    </div>
                    <div className='div___titles'>
                    <div className='items-title'>
                        <p>لورم ایپسوم متن ساختگی برای طراحان میباشد که با استفاده از آن متن تستی مینویسند!</p>
                    </div>
                        <div className='div___time'>
                            <img src={hour}/>
                            <p>شنبه 1 دی 1403</p>
                        </div>
                    </div>
                </div>
                <div className='div___items'>
                    <div className='div___img'>
                        <img src={img4} alt="" />
                    </div>
                    <div className='div___titles'>
                    <div className='items-title'>
                        <p>لورم ایپسوم متن ساختگی برای طراحان میباشد که با استفاده از آن متن تستی مینویسند!</p>
                    </div>
                        <div className='div___time'>
                            <img src={hour}/>
                            <p>شنبه 1 دی 1403</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BarEducation