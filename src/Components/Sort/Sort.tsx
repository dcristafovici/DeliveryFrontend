import React from 'react'
import "./Sort.css"
const Sort:React.FC = () => {
  return(
    <section className="sort">
      <div className="content">
        <div className="sort-wrapper">
          <div className="sort-catg">
            <ul>
              <li className="active"><a href="#">Всё</a>
              </li>
              <li><a href="#">Суши</a>
              </li>
              <li><a href="#">Бургеры</a>
              </li>
              <li><a href="#">Пицца</a>
              </li>
              <li><a href="#">Грузинская</a>
              </li>
              <li><a href="#">Шашлык</a>
              </li>
              <li><a href="#">Десерты</a>
              </li>
              <li><a href="#">Здоровая еда</a>
              </li>
            </ul>
          </div>
          <div className="sort-filter"><span>Сортировка</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sort