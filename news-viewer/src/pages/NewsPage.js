import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
const NewsPage = () => {
  const params = useParams();
  const category = params.category || 'all';
  return (
    <>
      <Header />
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
