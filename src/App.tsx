import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import './styles/antd-theme-custom.less';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`

`;

const App: React.FC = () => {
  return (
    <Container>
      <Content>
        <Button type="primary">Click Me</Button>
      </Content>
    </Container>
  );
}

export default App;
