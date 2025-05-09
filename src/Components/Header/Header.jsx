import React from 'react'
import { useLocation } from 'react-router'
import logo from "../../images/logo/logo.png"
import logoheader from "../../images/logo/logoheader.png"
import DivMain from './StyledHeader/DivMain'
import DivLogo from './StyledHeader/DivLogo'
import DivLogoNumber from './StyledHeader/DivLogoNumber'
import DivItem from './StyledHeader/DivItem'
import DivNumber from './StyledHeader/DivNumber'
import DivShop from './StyledHeader/DivShop'
import H4 from './StyledHeader/H4'
import Img from './StyledHeader/Img'
import Span from './StyledHeader/Span'
import Button from './StyledHeader/Button'
import logoshop from '../../images/logo/logo-shop.png'
import './Header.css'

const Header = () => {

  const location = useLocation()
  const path = location.pathname
  let backgroundColor ;

  const hidelogo = path === '/' || path === '/MessagePage'

  if(path === '/'){
    backgroundColor = 'bisque'
  } else if(path === '/MessagePage'){
    backgroundColor = "bisque"
  }else if(path === '/MainPage'){
    backgroundColor = '#fff'
  }

  return (
    <div>
      <DivMain style={{background:backgroundColor}}>
        {!hidelogo &&
          <DivItem>
              <div>
                  <Button>
                      ثبت نام/ورود
                  </Button>
              </div>
              <DivShop>
                <Img width='20px' src={logoshop} alt='logo' />
              </DivShop>
          </DivItem>
        }
        <DivLogo>
            <DivItem>
                <Img width='70px' src={logo} alt="logo" />
                <h2>
                  قهوه اریک
                </h2>
            </DivItem>
              <H4>
                coffee&equipment
              </H4>
        </DivLogo>
        <DivLogoNumber>
          <DivNumber>
              <h3><Span>021-</Span>1431488</h3>
          </DivNumber>
            <Img width='50px' src={logoheader} alt="logo" />
        </DivLogoNumber>
      </DivMain>
    </div>
  )
}

export default Header