import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Status from '../../Components/Status/Status'
import img from '../../images/img-AboutUsPage/img.png'
import DivMain from './StyledAboutUsPage/DivMain'
import DivItem from './StyledAboutUsPage/DivItem'
import DivTitle from './StyledAboutUsPage/DivTitle'
import Img from './StyledAboutUsPage/Img'
import H3 from './StyledAboutUsPage/H3'
import './AboutUsPage.css'

const AboutUsPage = () => {
  return (
    <div>
        <div>
            <Header />
        </div>
        <DivMain>
            <div>
                <Status />
            </div>
            <DivItem>
                <DivTitle>
                    <h3>قهوه اِریک ، فروشگاه اینترنتی تجهیزات قهوه و  لوازم کافی شاپ</h3>
                    <H3 color='rgb(121, 120, 120)' font='15px'>فروشگاه اینترنتی قهوه اِریک ،خرید اینترنتی  آسان و مطمئن با بهترین قیمت</H3>
                    <p>
                    فروشگاه اینترنتی قهوه اِریک با عرضه بهترین برند های دستگاه  های قهوه ساز ،  لوازم کافی شاپ و … امکان خرید اینترنتی  از مجموعه کاملی از کالاهای مورد نیاز یک کافه را فراهم آورده است.  و شما در فروشگاه اینترنتی قهوه اِریک به آسانی به مجموعه کاملی از برندها و محصولات مرتبط با کافی شاپ دسترسی خواهید پیدا کرد و هم چنین تنوعی کامل از دستگاه های قهوه ساز خانگی و محصولات مرتبط با آن را مشاهده خواهید کرد . با خرید آنلاین از  فروشگاه اینترنتی قهوه اِریک با ارائه توضیحات کارشناسی شده و دقیق درباره ویژگی های هر کالا در وب سایت، مشاوره و راهنمای خرید، تضمین اصالت کالا و بهترین قیمت در  فروشگاه قهوه اِریک  ، این امکان فراهم آمده است به راحتی و با یک خرید اینترنتی  لذت بخش، مطمئن و آسان کالای مورد نظر خود را تهیه کرده و به سرعت در سراسر ایران دریافت نمایید و با استفاده از بهترین های لوازم کافی شاپ از قهوه  خود لذت ببرید.
                    </p>
                </DivTitle>
                <div>
                    <Img src={img} alt="" />
                </div>
            </DivItem>
        </DivMain>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default AboutUsPage