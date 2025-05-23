import React from 'react'
import icon1 from '../../images/icon-list/img-1.png'
import icon2 from '../../images/icon-list/img-2.png'
import icon3 from '../../images/icon-list/img-3.png'
import './ListButton.css'

const ListButton = () => {
  return (
    <div>
        <div className="dropdown">
            <div className='div-button'>
                <button>
                    <div>
                        <img src={icon1} alt="" />
                    </div>
                    <h4>تجهیزات قهوه</h4>
                </button>
                <button>
                    <div>
                        <img src={icon2} alt="" />
                    </div>
                    <h4>قهوه</h4>
                </button>
                <button>
                    <div>
                        <img src={icon3} alt="" />
                    </div>
                    <h4>تجهیزات رستوران</h4>
                </button>
            </div>
            <div className='list-btns'>
                <h4>قهوه ساز</h4>
                <button>اسپرسوسازخانگی</button>
                <button>اسپرسو ساز صنعتی</button>
                <button>اسپرسوساز اتومات</button>
                <button>قهوه سازدستی</button>
                <button>قهوه سازدمی</button>
                <button>قهوه ساز کپسول</button>
                <button>قهوه ساز همراه</button>
                <button>قهوه ساز وندینگ</button>
            </div>
            <div className='list-btns'>
                <h4>آسیاب قهوه</h4>
                <button>آسیاب قهوه اسپرسو</button>
                <button>آسیاب قهوه دمی</button>
                <button>آسیاب قهوه دوز</button>
                <button>آسیاب قهوه دستی</button>
                <button>آسیاب قهوه ترک</button>
                <button>فروشگاهی</button>
            </div>
            <div  className='list-btns'>
                <h4>ابزار باریستا</h4>
                <button>اسکیل</button>
                <button>پیچر</button>
                <button>پیچرشور</button>
                <button>تمپر</button>
                <button>فانل</button>
                <button>لولر</button>
                <button>ناک باکس</button>
                <button>نیدل</button>
            </div>
            <div className='list-btns'>
                <h4>تجهیزات دم آوری قهوه</h4>
                <button>اسکیل</button>
                <button>دم افزارها</button>
                <button>دوزدینگ کاپ</button>
                <button>سرور</button>
                <button>فیلتر قهوه</button>
                <button>کتل</button>
            </div>
        </div>
    </div>
  )
}

export default ListButton