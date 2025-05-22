import React from 'react'
import icon1 from '../../images/icon-footer/img-1.png'
import icon2 from '../../images/icon-footer/img-2.png'
import icon3 from '../../images/icon-footer/img-3.png'
import icon4 from '../../images/icon-footer/img-4.png'
import img from '../../images/img-footer/img.png'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <div className='div-footer'>
            <footer>
                <div className='main-box'>
                    <div className='box-footer'>
                        <h1>قهوه اریک</h1>
                        <div className='line'></div>
                        <p>
                        فروشگاه اینترنتی قهوه اِریک با عرضه بهترین برند های دستگاه  های قهوه ساز ،  لوازم کافی شاپ و … امکان خرید اینترنتی  از مجموعه کاملی از کالاهای مورد نیاز یک کافه را فراهم آورده است.  و شما در فروشگاه اینترنتی قهوه اِریک به آسانی به مجموعه کاملی از برندها و محصولات مرتبط با کافی شاپ دسترسی خواهید پیدا کرد و هم چنین تنوعی کامل از دستگاه های قهوه ساز خانگی و محصولات مرتبط با آن را مشاهده خواهید کرد . با خرید آنلاین از  فروشگاه اینترنتی قهوه اِریک با ارائه توضیحات کارشناسی شده و دقیق درباره ویژگی های هر کالا در وب سایت، مشاوره و راهنمای خرید، تضمین اصالت کالا و بهترین قیمت در  فروشگاه قهوه اِریک  ، این امکان فراهم آمده است به راحتی و با یک خرید اینترنتی  لذت بخش، مطمئن و آسان کالای مورد نظر خود را تهیه کرده و به سرعت در سراسر ایران دریافت نمایید و با استفاده از بهترین های لوازم کافی شاپ از قهوه  خود لذت ببرید.
                        </p>
                    </div>
                    <div className='box-input'>
                        <input type='text'placeholder='آدرس ایمیل یا شماره تلفن همراه'/>
                        <button>
                            عضویت در خبرنامه
                        </button>
                    </div>
                </div>
                <div className='div-box-footer'>
                    <div className='list-1'>
                        <h2>دسترسی سریع</h2>
                        <p>پرسش های متداول</p>
                        <p>حریم خصوصی</p>
                        <p>راهنمای خرید</p>
                        <p>روش های ارسال</p>
                        <p>درباره قهوه اِریک</p>
                        <p>تماس با ما</p>
                    </div>
                    <div className='list-2'>
                        <h2>
                            راه های ارتباط
                        </h2>
                        <div className='div-btns'>
                            <img src={icon1}/>
                            <p>
                                بازار تهران . چهار راه سیروس ابتدای پانزده خرداد غربی. کوچه سرپولک غفاری پلاک                         
                            </p>
                        </div>
                        <div className='div-btns'>
                            <img src={icon2}/>
                            <p>
                            خرید حضوری فقط با هماهنگی قبلی قابل انجام است.
                            </p>
                        </div>
                        <div className='div-btns'>
                            <img src={icon3}/>
                            <p>021-5544533</p>
                        </div>
                        <div className='div-btns'>
                            <img src={icon3}/>
                            <p>091871487835</p>
                        </div>
                        <div className='div-btns'>
                            <img src={icon4}/>
                            <p>info@erick.cafe</p>
                        </div> 
                        <div>
                            <img src={img} className='img-footer'/>
                        </div>  
                        <div className='title-footer'>
                            <p>
                            تمامی حقوق این وبسایت متعلق به قهوه اِریک است.
                            </p>
                        </div>
                   </div>
                </div>
            </footer>
        </div>
    </div>
  )
}

export default Footer