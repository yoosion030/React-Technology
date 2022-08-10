import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

import LoadingPage from './LoadingPage';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b38f81ce8bf94467a88e4c47740c0aad`,
    );
  }, [category]);

  if (loading) return <LoadingPage />;
  if (!response) return null;
  if (error) return <NewsListBlock>에러 발생!</NewsListBlock>;
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles?.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
