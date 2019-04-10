import React, { Component } from 'react';
import AnalyticalMethodForm from '../pages/AnalyticalMethodForm';
import { Layout } from 'antd';

class App extends Component {

  render() {
    const { Footer, Sider, Content } = Layout;
    return (
      <div>
        <Layout style={{ height: "100vh" }}>
          <Layout>
            <Sider />
            <Content>
              <AnalyticalMethodForm />
            </Content>
          </Layout>
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default App;