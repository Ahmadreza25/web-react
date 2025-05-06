import React from 'react'
import logo from "../../images/logo/logo.png"
import logoheader from "../../images/logo/logoheader.png"
import DivMain from './StyledHeader/DivMain'
import DivLogo from './StyledHeader/DivLogo'
import DivLogoNumber from './StyledHeader/DivLogoNumber'
import DivItem from './StyledHeader/DivItem'
import DivNumber from './StyledHeader/DivNumber'
import H4 from './StyledHeader/H4'
import Img from './StyledHeader/Img'
import Span from './StyledHeader/Span'
import './Header.css'

const Header = () => {
  return (
    <div>
      <DivMain>
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