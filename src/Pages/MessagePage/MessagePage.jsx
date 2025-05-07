import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import DivMain from './StyledMessagePage/DivMain'
import DivCenter from './StyledMessagePage/DivCenter'
import DivInput from './StyledMessagePage/DivInput'
import DivTitle from './StyledMessagePage/DivTitle'
import Button from './StyledMessagePage/Button'
import Input from './StyledMessagePage/InputNum'
import Img from './StyledMessagePage/Img'
import P from './StyledMessagePage/P'
import logo from '../../images/logo/logo.png'
import './MessagePage.css'

const MessagePage = () => {
  return (
    <div>
        <Header />
        <DivMain>
            <DivCenter>
                <Img src={logo} alt="logo" />
                <DivTitle>
                    <h2>ثبت نام/ورود</h2>
                    <P color='rgb(116, 109, 109)'>کد ارسال شده به شماره 09187147834 را وارد کنید</P>
                </DivTitle>
                <div>
                    <div>
                        <P color='rgb(89, 90, 90)'>ورود کد</P>
                    </div>
                    <DivInput>
                        <Input />
                        <Input />
                        <Input />
                        <Input />
                        <Input />
                        <Input />
                    </DivInput>
                </div>
                    <P color='rgb(89, 90, 90)'>
                        ارسال مجدد تا ___ ثانیه دیگر
                    </P>
                    <Link to=''>
                        <Button>
                            تایید ثبت نام
                        </Button>
                    </Link>
            </DivCenter>
        </DivMain>
    </div>
  )
}

export default MessagePage