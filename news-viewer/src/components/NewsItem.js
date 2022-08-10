import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  width: 100%;
  height: 100px;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 6%);
  border-radius: 10px;
  box-sizing: content-box;
  &:hover {
    transform: scale(0.95);
    transition: 0.5s;
  }

  .thumbnail {
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
      border-radius: 5px;
    }
  }

  .content {
    width: 75%;
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }

    p {
      margin: 0;
      width: 100%;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #767678;
    }
  }
  // 엘리먼트 사이사이에 간격 추가
  & + & {
    margin-top: 2rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="content">
        <h2>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
