import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Status from '../../Components/Status/Status'
import BarEducation from '../../Components/BarEducation/BarEducation'
import imgLogo from '../../images/img-Education/img-logo.png'
import hour from '../../images/img-Education/hour.png'
import DataEducation from '../../Data/DataEducation'
import DivMain from './StyledEducation/DivMain'
import DivCenter from './StyledEducation/DivCenter'
import DivTitle from './StyledEducation/DivTitle'
import DivItems from './StyledEducation/DivItems'
import DivItem from './StyledEducation/DivItem'
import DivTime from './StyledEducation/DivTime'
import DivDate from './StyledEducation/Divdate'
import Div from './StyledEducation/Div'
import Img from './StyledEducation/Img'
import P from './StyledEducation/P'
import './Education.css'

const Education = () => {
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
                    {DataEducation.map((item) => (
                        <DivItem>
                            <div className='div_item_img'>
                                <img src={item.img} alt="" />
                            </div>
                            <Div width='300px' height='70px' marginright='20px'>
                                <P font='14px'>{item.name}</P>
                            </Div>
                            <DivTitle>
                                <Div height='170px' width='300px'>
                                    <P color='#6a6a6a' font='14px'>
                                        {item.title}
                                    </P>
                                </Div>
                                <DivTime>
                                    <DivDate marginright='20px' width='100px'>
                                        <Img width='30px' src={imgLogo} alt="" />
                                        <P font='14px'>قهوه اریک</P>
                                    </DivDate>
                                    <DivDate width='120px'>
                                        <Img width='16px' src={hour}/>
                                        <P width='300px' color='#6a6a6a' font='13px'>تاریخ</P>
                                    </DivDate>
                                </DivTime>
                            </DivTitle>
                        </DivItem>
                    ))
                    }
                </DivItems>
                <div>
                    <BarEducation />
                </div>
            </DivCenter>
        </DivMain>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Education