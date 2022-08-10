import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  { name: 'all', text: '전체보기' },
  { name: 'business', text: '비지니스' },
  { name: 'entertainment', text: '엔터테인먼트' },
  { name: 'health', text: '건강' },
  { name: 'science', text: '과학' },
  { name: 'sports', text: '스포츠' },
  { name: 'technology', text: '기술' },
];

const Components = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  font-weight: bold;
  color: #222;

  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 3px solid #3f63bf;
    color: #3f63bf;
    &:hover {
      color: #3f63bf;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <Components>
      <CategoriesBlock>
        {categories.map((value) => (
          <Category
            key={value.name}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            to={value.name === 'all' ? '/' : `/${value.name}`}
          >
            {value.text}
          </Category>
        ))}
      </CategoriesBlock>
    </Components>
  );
};

export default Categories;
