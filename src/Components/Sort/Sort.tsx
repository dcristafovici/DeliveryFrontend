import React from 'react'
import "./Sort.css"
import { useQuery } from '@apollo/client'
import { CATEGORIES } from '../../GraphQL/Queries'
import { CategoryInterface } from '../../Interfaces/CategoryInterface'
const Sort:React.FC = () => {
  const { loading , data = {} } = useQuery(CATEGORIES)
  const { Categories = [] } = data
  return(
    <section className="sort">
      <div className="content">
        <div className="sort-wrapper">
          <div className="sort-catg">
            <ul>
              <li className="active"><a href="#">All</a>
              </li>
              {!loading ? Categories.map((category:CategoryInterface) => {
                return(
                  <li>
                    <a href="#" data-id={category.id} title={category.description}>{category.name}</a>
                  </li>
                )
              }): ""}
            </ul>
          </div>
          <div className="sort-filter"><span>Sort</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sort