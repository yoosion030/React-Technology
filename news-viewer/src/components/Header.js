import styled from 'styled-components';

const Component = styled.header`
  width: 100%;
  background-color: #3f63bf;
  display: flex;
  justify-content: center;
  p {
    width: 768px;
    color: white;
    font-weight: bold;
    font-size: 30px;
  }
`;

const Header = () => {
  return (
    <Component>
      <p>News</p>
    </Component>
  );
};

export default Header;
