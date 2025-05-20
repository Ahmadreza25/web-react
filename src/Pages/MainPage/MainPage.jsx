import React from 'react'
import Header from "../../Components/Header/Header"
import Slider from '../Slider/Slider'
import DataProduct from '../../Data/DataProduct'
import DataMarquee from '../../Data/DataMarquee'
import insta from "../../images/logo/logo-insta.png"
import imgtitle from "../../images/img/img-title.png"
import iconflash from "../../images/icon/icon-flash.png"
import iconcoffee from "../../images/icon/icon-coffee.png"
import DivMain from './StyledMainPage/DivMain'
import DivBox from './StyledMainPage/DivBox'
import DivMargin from './StyledMainPage/DivMargin'
import DivWrapper from './StyledMainPage/DivWrapper'
import DivButton from './StyledMainPage/DivButton'
import DivStatus from './StyledMainPage/DivStatus'
import DivItems from './StyledMainPage/DivItems'
import DivTitle from './StyledMainPage/DivTitle'
import DivimgProduct from './StyledMainPage/DivimgProduct'
import DivDisplay from './StyledMainPage/DivDisplay'
import Button from './StyledMainPage/Button'
import Span from './StyledMainPage/Span'
import Img from './StyledMainPage/Img'
import P from './StyledMainPage/P'
import H2 from './StyledMainPage/H2'
import H4 from './StyledMainPage/H4'
import './MainPage.css'

const MainPage = () => {
  return (
    <div>
        <Header />
        <DivMain>
            <DivStatus>
                <DivButton>
                  <Button color='#fff' bachground='#000' marginright='20px'>  
                      <P>
                        صفحه اصلی
                      </P>
                  </Button>
                  <Button color='#fff' bachground='#000' marginright='20px'>
                      <P>
                        لیست محصولات  
                      </P>  
                  </Button>
                  <Button color='#fff' bachground='#000' marginright='20px'>
                      <P>
                          خدمات
                      </P>
                  </Button>
                  <Button color='#fff' bachground='#000' marginright='20px'>
                      <P>
                          اموزش ها
                      </P>
                  </Button>
                  <Button color='#fff' bachground='#000' marginright='20px'>
                      <P>
                          درباره ما
                      </P>
                  </Button>
                  <Button color='#fff' bachground='#000' marginright='20px'>
                      <P>
                         تماس با ما
                      </P>
                  </Button>
                </DivButton>
                <DivItems marginleft='30px'>
                  <P color='#fff' marginleft='10px'>Ahmadrezaa.83</P>
                  <Img width='30px' src={insta} alt="logo" />
                </DivItems>
            </DivStatus>
            <div className='div-items'>
                <DivTitle>
                    <DivMargin marginright='60px' margintop='60px'>
                        <h4>Eric's Coffee</h4>
                        <h1>کافه اریک</h1>
                        <h3>کامل ترین تجهیزات کافه ورستوان درایران.</h3>
                        <Button
                        width='140px'
                        height='40px'
                        border='50px'
                        color='#fff'
                        bachground='#535050'
                        >
                          <DivItems>
                              مشاهده محصولات
                            <Img width='20px'marginrighet='10px' src={iconflash} alt="" />
                          </DivItems>
                        </Button>
                    </DivMargin>
                </DivTitle>
                <div className='div-img'>
                    <img src={imgtitle} alt="" />
                </div>
            </div>
            <DivWrapper>
              <div className="marquee">
                {
                  DataMarquee.map((item) => (
                    <Span>{item.name}<Img src={item.img} width='50px'/></Span>
                  ))
                }
              </div>
            </DivWrapper>
            <DivBox width='100%' height='400px'>
                <div>
                  <DivMargin marginright='50px' margintop='50px'>
                      <DivItems>
                            <div>
                              <Img src={iconcoffee} width='40px' />
                            </div>
                            <DivMargin marginright='20px'>
                                <H2>دسته بندی محصولات</H2>
                                <H4 margintop='-20px' font='12px'>از میان بهترین ها بهترین هارا برای شما فراهم کردیم.</H4>
                            </DivMargin>
                      </DivItems>
                  </DivMargin>
                  <DivItems justify='center'>
                    <DivBox width='90%' height='200px'>
                      <DivItems justify='center'>
                        {
                          DataProduct.map((item) => (
                            <DivDisplay>
                                <DivimgProduct> 
                                    <Img src={item.img} width='40px'/>
                                </DivimgProduct>
                                <DivMargin margintop='-20px'>
                                    <P>
                                      {item.name}
                                    </P>
                                </DivMargin>
                            </DivDisplay>
                          ))
                        }
                      </DivItems>
                    </DivBox>
                  </DivItems>
                </div>
            </DivBox>
              <DivBox width='100%' height='600px'>
                <DivDisplay>
                    <div className='div-background'>
                      <DivMargin margintop='50px'>
                        <H2 color='#fff'>تخفیفات ویژه</H2>
                      </DivMargin>
                    </div>
                    <div className='product'> 
                        <DivDisplay>
                            <div className='div-listbtn'>
                              <H4>دسته بندی ها</H4>
                              <Button bachground='#fff' className='bth-hover'><P>دانه قهوه</P></Button>
                              <Button bachground='#fff' className='bth-hover'><P>آسیاب قهوه</P></Button>
                              <Button bachground='#fff' className='bth-hover'><P>ابزار باریستا</P></Button>
                              <Button bachground='#fff' className='bth-hover'><P>تجهیزات کافه و رستوران</P></Button>
                            </div>
                            <div>
                                <Slider />
                            </div>
                        </DivDisplay>
                    </div>
                </DivDisplay>
              </DivBox>
        </DivMain>
    </div>
  )
}

export default MainPage