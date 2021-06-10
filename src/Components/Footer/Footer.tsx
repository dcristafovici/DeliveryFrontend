import React from 'react'
import './Footer.css'
const Footer:React.FC = () => {
  return(
    <section className="footer">
      <div className="content">
        <div className="footer-wrapper">
          <div className="footer-left">
            <div className="footer-left__info">
              <a href="index.html" className="logo">
               <img src="/images/header/logo.svg" alt="Logo" />
              </a><span>© Moscow City Guide</span>
            </div>
            <div className="footer-menu">
              <nav className="menu">
                <ul>
                  <li><a href="#">О москва сити </a>
                  </li>
                  <li><a href="#">Еда и развлечения </a>
                  </li>
                  <li><a href="#">Недвижимость</a>
                  </li>
                  <li><a href="#">Как добраться? </a>
                  </li>
                  <li><a href="#">Башни</a>
                  </li>
                  <li><a href="#">Новости и афиша </a>
                  </li>
                  <li><a href="#"> Компании</a>
                  </li>
                  <li><a href="#">Контакты</a>
                  </li>
                  <li><a href="#">Получить услугу </a>
                  </li>
                  <li><a href="#">По вопросам рекламы</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer-jobs">
              <strong>Хотите с нами сотрудничать?</strong>
              <p>Мы будем рады видеть вас в
                <br/>числе наших партнеров.
              </p>
              <a href="#" className="button"><span>Стать партнером </span></a>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-phone"><a href="tel:8 495 974-55-36">8 495 <span>974-55-36 </span></a>
            </div>
            <div className="footer-mail"><a href="mailto:welcome@moscow-city.guide">welcome@moscow-city.guide</a>
            </div>
            <div className="footer-policy"><a href="#">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Footer