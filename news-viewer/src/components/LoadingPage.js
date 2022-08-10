import styled from 'styled-components';

const Page = styled.div`
  height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 300px;
  }
`;

const LoadingPage = () => {
  return (
    <Page>
      <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!c1024wm0" />
    </Page>
  );
};

export default LoadingPage;
