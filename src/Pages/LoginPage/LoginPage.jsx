import React from 'react'
import {Link} from "react-router-dom"
import Header from '../../Components/Header/Header'
import DivMain from './StyledLoginPage/DivMain'
import DivBox from './StyledLoginPage/DivBox'
import DivTitle from './StyledLoginPage/DivTitle'
import DivInput from './StyledLoginPage/DivInput'
import Input from './StyledLoginPage/Input'
import Img from './StyledLoginPage/Img'
import Button from './StyledLoginPage/Button'
import P from './StyledLoginPage/p'
import logo from '../../images/logo/logo.png'
import "./LoginPage.css"

const LoginPage = () => {
  return (
    <div>
        <Header />
        <DivMain>
            <DivBox>
                <div>
                    <Img width="100px" src={logo}/>
                </div>
                <DivTitle>
                    <h2>ثبت نام/ورود</h2>
                    <P color='rgb(126, 129, 131)' fontsize='12px' fontweight='700'>برای ورود یا ثبت نام شماره تلفن خود را وارد کنید!</P>
                </DivTitle>
                <DivInput>
                    <p color=' rgb(72, 69, 69)' fontsize='14px' fontweight='700'>شماره تلفن</p>
                    <Input type="text" />
                </DivInput>
                <div>
                    <Link to='/MessagePage'>
                        <Button>
                            ثبت نام / ورود
                        </Button>
                    </Link>
                </div>
            </DivBox>
        </DivMain>
    </div>
  )
}

export default LoginPage