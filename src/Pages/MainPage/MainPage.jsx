import React from 'react'
import Header from "../../Components/Header/Header"
import insta from "../../images/logo/logo-insta.png"
import imgtitle from "../../images/img/img-title.png"
import iconflash from "../../images/icon/icon-flash.png"
import logo from "../../images/logo/logo.png"
import DivMain from './StyledMainPage/DivMain'
import DivMargin from './StyledMainPage/DivMargin'
import DivWrapper from './StyledMainPage/DivWrapper'
import DivButton from './StyledMainPage/DivButton'
import DivStatus from './StyledMainPage/DivStatus'
import DivItems from './StyledMainPage/DivItems'
import DivTitle from './StyledMainPage/DivTitle'
import Button from './StyledMainPage/Button'
import Span from './StyledMainPage/Span'
import Img from './StyledMainPage/Img'
import P from './StyledMainPage/P'
import './MainPage.css'

const item = [
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
  {name:'کافه اریک' , img:logo,},
]

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
                  item.map((item) => (
                    <Span>{item.name}<Img src={item.img} width='50px'/></Span>
                  ))
                }
              </div>
            </DivWrapper>
            <div>
                
            </div>
        </DivMain>
    </div>
  )
}

export default MainPage