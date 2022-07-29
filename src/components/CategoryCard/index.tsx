import React from 'react'
import { Link } from 'react-router-dom';

type CategoryCardProps = {
  key: string;
  quiz: {
    _id: string;
    name: string;
    categories: string[];
    category: string,
    quotes: string;
    quizImg: string;
    categoryImg: string
    levels: string;
  };
};

export function CategoryCard({
  quiz,
}: CategoryCardProps): JSX.Element {
  const {
    _id: selectedCategoryId,
    categories,
    category,
    categoryImg,
  } = quiz;
  return (
    <div className="padding-small-card shade flex-cl-center translateOne m-l-2">
      <Link to={`/category/${selectedCategoryId}`}>
        <div className="quiz-container padding-small-card shade imgTransition">
          <img
            className="quiz-img"
            src={categoryImg}
            alt="quiz1-Img"
          />
        </div>
        <div className="padding-normal card-selector-text">
          <div className="category-body">
            
            <h5 className="name">{category}</h5>
            
            <div>
              
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}