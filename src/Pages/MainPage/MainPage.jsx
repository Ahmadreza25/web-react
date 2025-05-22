import React from 'react'
import Header from "../../Components/Header/Header"
import Slider from '../../Components/Slider/Slider'
import DataProduct from '../../Data/DataProduct'
import DataMarquee from '../../Data/DataMarquee'
import DataItems from '../../Data/DataItems'
import DataItem from '../../Data/DataItem'
import insta from "../../images/logo/logo-insta.png"
import imgtitle from "../../images/img/img-title.png"
import imgTime from '../../images/img/img-time.png'
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
import DivItem from './StyledMainPage/DivItem'

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
              <DivMargin margintop='50px'>
                <DivBox width='100%' height='300px'justify='space-between'>
                    {DataItems.map((item) => (
                      <Button width='300px' margin='10px' bachground='#fff'>
                          <Img src={item.img} width='300px'/>
                      </Button>
                    ))
                    }
                </DivBox>
              </DivMargin>
              <DivItem>
                  <DivMargin marginright='-800px'>
                      <DivItems justify='right'>
                            <div>
                              <Img src={iconcoffee} width='40px' />
                            </div>
                            <DivMargin marginright='20px'>
                                <H2>دسته بندی محصولات</H2>
                                <P color='#0f0f0f' margintop='-10px'>پرفروش ترین محصولات اریک کافه </P>
                            </DivMargin>
                      </DivItems>
                  </DivMargin>
                    <DivBox width='100%' height='100px'>
                      <DivItems justify='space-around'>
                        <Button width='150px' height='55px' border='20px'><P>جدیدترین محصولات</P></Button>
                        <Button width='150px' height='55px' border='20px'><P>اسپرسوسازصنعتی</P></Button>
                        <Button width='120px' height='55px' border='20px'><P>آسیاب قهوه</P></Button>
                        <Button width='120px' height='55px' border='20px'><P>قهوه ساز خانگی</P></Button>
                        <Button width='120px' height='55px' border='20px'><P>ابزار باریستا</P></Button>
                        <Button width='120px' height='55px' border='20px'><P>لوازم کافی شاپ</P></Button>
                        <Button width='120px' height='55px' border='20px'><P>دم آوری قهوه</P></Button>
                      </DivItems>
                    </DivBox>
                    <DivBox width='100%' height='400px'>
                      <DivItems justify='space-around'>
                        {DataItem.map((item) => (
                          <div className='box'>
                              <DivItems justify='center'>
                                <Img src={item.img} width='250px' height='200px'/>
                              </DivItems>
                                <P marginright='10px' font='14px'>{item.name}</P>
                                <P
                                  marginright='10px'
                                  margintop='-10px' 
                                  font='12px' 
                                  color='#a4a4a4'
                                  >
                                  {item.title}
                                </P>
                                <DivItems justify='left'>
                                    <P marginleft='10px' color='rgb(171, 96, 43)' margintop='40px'>{item.price}</P>
                                </DivItems>
                          </div>
                        ))
                        }
                      </DivItems>
                    </DivBox>
                    <Button width='190px' height='60px' bachground='rgb(171, 96, 43)' border='50px'>
                      <DivItems>
                        <P color='#fff' font='18px' marginright='20px'>مشاهده بیشتر</P>
                        <Img src={iconflash} width='30px' marginrighet='30px'/>
                      </DivItems>
                    </Button>
              </DivItem>
                <div className='div-time'> 
                    <Img src={imgTime} width='400px'/>
                    <DivDisplay>
                          <H2>فروش ویژه اسپرسو ساز Wega Pegaso</H2>
                          <DivItems justify='center'>
                             <div className='div-box-time'>
                                <DivDisplay>
                                    <P>00</P>
                                    <P margintop='-10px' color='#a0a0a0'>ثانیه ها</P>
                                </DivDisplay>
                             </div>
                             <div className='div-box-time'>
                                <DivDisplay>
                                    <P>00</P>
                                    <P margintop='-10px' color='#a0a0a0'>دقیقه</P>
                                </DivDisplay>
                             </div>
                             <div className='div-box-time'>
                                <DivDisplay>
                                    <P>00</P>
                                    <P margintop='-10px' color='#a0a0a0'>ساعت</P>
                                </DivDisplay>
                             </div>
                             <div className='div-box-time'>
                                <DivDisplay>
                                    <P>00</P>
                                    <P margintop='-10px' color='#a0a0a0'>روز</P>
                                </DivDisplay>
                             </div>
                          </DivItems>
                          <H2 color='rgb(171, 96, 43)'>
                          205,000,000تومان
                          </H2>
                          <Button bachground='rgb(171, 96, 43)' width='100px' border='20px'>
                              <DivItems>
                                <P marginright='20px' color='#fff' font='18px'>خرید</P>
                                <Img src={iconflash} width='20px' marginrighet='10px' />
                              </DivItems>
                          </Button>
                    </DivDisplay>
                </div>
        </DivMain>
    </div>
  )
}

export default MainPage