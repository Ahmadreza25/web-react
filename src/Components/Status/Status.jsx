import React , {useState} from 'react'
import ListButton from '../ListButton/ListButton'
import DivStatus from './StyledStatus/DivStatus'
import DivButton from './StyledStatus/DivButton'
import Button from './StyledStatus/Button'
import DivItems from './StyledStatus/DivItems'
import Img from './StyledStatus/Img'
import insta from "../../images/logo/logo-insta.png"
import P from './StyledStatus/P'
import { Link } from 'react-router'
import './Status.css'

const Status = () => {
    const [shoeMenu , setShoeMenu] = useState(false)
  return (
    <div>
        <DivStatus>
                <DivButton>
                  <Link to='/MainPage'>
                    <Button color='#fff' bachground='#000' marginright='20px'>  
                        <P>
                          صفحه اصلی
                        </P>
                    </Button>
                  </Link>
                  <div
                  onMouseEnter={() => setShoeMenu(true)}
                  onMouseLeave={() => setShoeMenu(false)}
                  className="menu-container"
                  >
                    <Button color='#fff' bachground='#000' marginright='20px'>
                        <P>
                          لیست محصولات  
                        </P>  
                    </Button>
                    {shoeMenu && <ListButton />}
                  </div>
                  <Link to='/Education'>
                    <Button color='#fff' bachground='#000' marginright='20px'>
                        <P>
                            اموزش ها
                        </P>
                    </Button>
                  </Link>
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
    </div>
  )
}

export default Status