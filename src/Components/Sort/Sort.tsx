import React from 'react';
import "./Sort.sass";

const Sort:React.FC = () => (
  <section className="sort">
    <div className="content">
      <div className="sort-wrapper">
        <div className="sort-catg">
          <ul>
            <li className="active"><a href="#">All</a>
            </li>
            <li>
              <a href="#">Category 1</a>
            </li>
            <li>
              <a href="#">Category 2</a>
            </li>
            <li>
              <a href="#">Category 3</a>
            </li>
          </ul>
        </div>
        <div className="sort-filter"><span>Sort</span>
        </div>
      </div>
    </div>
  </section>
)

export default Sort