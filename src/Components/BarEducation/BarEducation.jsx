import React from 'react'
import img1 from '../../images/img-Education/img-1.png'
import img2 from '../../images/img-Education/img-2.png'
import img3 from '../../images/img-Education/img-3.png'
import img4 from '../../images/img-Education/img-4.png'
import hour from '../../images/img-Education/hour.png'
import Img from './StyledBarEducation/Img'
import DivMain from './StyledBarEducation/DivMain'
import DivItems from './StyledBarEducation/DivItems'
import DivImg from './StyledBarEducation/DivImg'
import DivTitle from './StyledBarEducation/DivTitle'
import Div from './StyledBarEducation/Div'
import DivItem from './StyledBarEducation/DivItem'
import DivTitles from './StyledBarEducation/DivTitles'
import P from './StyledBarEducation/P'
import './BarEducation.css'
const BarEducation = () => {
  return (
    <div>
        <DivMain>
            <DivTitle>
                <p>
                    تازه های خبری
                </p>
            </DivTitle>
            <div>
                <DivItems>
                    <DivImg>
                        <Img width='100%' height='100%' borderr='50%' src={img1} alt="" />
                    </DivImg>
                    <Div width='280px' marginright='20px'>
                        <DivTitles>
                            <p>انواع قهوه</p>
                        </DivTitles>
                        <DivItem>
                            <Img width='16px' src={hour}/>
                            <P>شنبه 1 دی 1403</P>
                        </DivItem>
                    </Div>
                </DivItems>
                <DivItems>
                    <DivImg>
                        <Img width='100%' height='100%' borderr='50%'  src={img2} alt="" />
                    </DivImg>
                    <Div width='280px' marginright='20px'>
                    <DivTitles>
                        <p>انواع قهوه ساز و آموزش استفاده از آنها</p>
                    </DivTitles>
                        <DivItem>
                            <Img width='16px' src={hour}/>
                            <P>شنبه 1 دی 1403</P>
                        </DivItem>
                    </Div>
                </DivItems>
                <DivItems>
                    <DivImg>
                        <Img width='100%' height='100%' borderr='50%'  src={img3} alt="" />
                    </DivImg>
                    <Div width='280px' marginright='20px'>
                    <DivTitles>
                        <p>لورم ایپسوم متن ساختگی برای طراحان میباشد که با استفاده از آن متن تستی مینویسند!</p>
                    </DivTitles>
                        <DivItem>
                            <Img width='16px' src={hour}/>
                            <P>شنبه 1 دی 1403</P>
                        </DivItem>
                    </Div>
                </DivItems>
                <DivItems>
                    <DivImg>
                        <Img width='100%' height='100%' borderr='50%'  src={img4} alt="" />
                    </DivImg>
                    <Div width='280px' marginright='20px'>
                    <DivTitles>
                        <p>لورم ایپسوم متن ساختگی برای طراحان میباشد که با استفاده از آن متن تستی مینویسند!</p>
                    </DivTitles>
                        <DivItem>
                            <Img width='16px' src={hour}/>
                            <P>شنبه 1 دی 1403</P>
                        </DivItem>
                    </Div>
                </DivItems>
            </div>
        </DivMain>
    </div>
  )
}

export default BarEducation