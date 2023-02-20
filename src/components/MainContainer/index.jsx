import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from 'components/Container';

const Wrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 10px;
  background: rgb(223 216 249);
`;

const MainContainer = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default MainContainer;

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
