import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Status from '../../Components/Status/Status'
import DivMain from './StyledContactUsPage/DivMain'
import DivCenter from './StyledContactUsPage/DivCenter'
import DivItems from './StyledContactUsPage/DivItems'
import DivItem from './StyledContactUsPage/DivItem'
import DivBox from './StyledContactUsPage/DivBox'
import DiVDisPlay from './StyledContactUsPage/DivDisplay'
import Img from './StyledContactUsPage/Img'
import Input from './StyledContactUsPage/Input'
import Textarea from './StyledContactUsPage/Textarea'
import Button from './StyledContactUsPage/Button'
import P from './StyledContactUsPage/P'
import Span from './StyledContactUsPage/Span'
import img from '../../images/img-ContactUsPage/img1.png'
import icon1 from '../../images/img-ContactUsPage/icon1.png'
import icon2 from '../../images/img-ContactUsPage/icon2.png'
import icon3 from '../../images/img-ContactUsPage/icon3.png'
import './ContactUsPage.css'
const ContactUsPage = () => {
  return (
    <div>
        <div>
            <Header />
        </div>
        <DivMain>
            <div>
                <Status />
            </div>
            <DivCenter>
                <DivItems>
                    <div>
                        <h1>تماس با<Span>قهوه اریک</Span></h1>
                    </div>
                    <DivItem>
                        <p>کاربر گرامی قهوه اریک؛ باعث افتخار ماست تا نظرات خود را با ما از طریق این فرم به اشتراک بگذارید.
                        جهت اعلام شکایت، نظر، انتقاد و پیشنهاد در مورد سرویس‌دهی
                        وب‌سایت می‌توانید با شماره تلفن 09394785984 تماس بگیرید یا از
                        طریق فرم زیر موضوع موردنظر را با ما در میان بگذارید.
                        </p>
                    </DivItem>
                    <div>
                        <h2>
                        تماس با قهوه اریک
                        </h2>
                        <div>
                            <P color='rgb(107, 107, 106)'>نام و نام خانوادگی</P>
                            <Input width='300px' type='text' />
                        </div>
                        <div>
                            <P color='rgb(107, 107, 106)'>موضوع</P>
                            <Input width='300px' type='text' />
                        </div>
                        <div>
                            <P color='rgb(107, 107, 106)'>ایمیل</P>
                            <Input width='250px' type='text' />
                        </div>
                        <div>
                            <P color='rgb(107, 107, 106)'>تلفن تماس</P>
                            <Input width='380px' type='text' placeholder='09187147834'/>
                        </div>
                        <div>
                            <P color='rgb(107, 107, 106)'>توضیحات</P>
                            <Textarea placeholder='توضیحات خود را اینجا وارد کنید.'/>
                        </div>
                        <div>
                            <Button>
                                ارسال فرم
                            </Button>
                        </div>
                    </div>
                </DivItems>
                <DivItems>
                    <div>
                        <Img src={img}/>
                    </div>
                    <DivBox>
                        <p>راه های ارتباطی</p>
                        <div>
                            <DiVDisPlay>
                                <Img src={icon2}/>
                                <P marginright='10px'>تلفن پشتیبانی:</P>
                            </DiVDisPlay>
                            <div>
                                <p>021-55811242</p>
                                <p>09394785984</p>
                                <p>09909296412</p>
                            </div>
                        </div>
                        <div>
                            <DiVDisPlay>
                                <Img src={icon1}/>
                                <P marginright='10px'>ایمیل:</P>
                            </DiVDisPlay>
                            <div>
                                <P marginright='10px'>info@erick.cafe</P>
                            </div>
                        </div>
                        <div>
                            <DiVDisPlay>
                                <Img src={icon3}/>
                                <P marginright='10px'>دفتر مرکزی تهران:</P>
                            </DiVDisPlay>
                            <div>
                                <p>بازار تهران،چهارراه سیروس ابتدای پانزده خرداد غربی،کوچه غفاری سرپولک پلاک 148</p>
                            </div>
                        </div>
                    </DivBox>
                </DivItems>
            </DivCenter>
        </DivMain>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default ContactUsPage