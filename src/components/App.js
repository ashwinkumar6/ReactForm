import React, { Component } from 'react';
import { nameChange, ageChange } from "../redux/dispatcher/sampleDispatcher"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ButtonGroup from "./input"
import WrappedNormalLoginForm from "./trial"
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {

  // componentDidMount() {
  //   this.props.nameChange({name:"ashwin", tweet:"send out a name change tweet"});
  //   this.props.ageChange({age:22, tweet:"send out a age change tweet"});
  //   this.props.ageChange({age:25, tweet:"send out a age change tweet, yes again!!"});
  // }

  render() {
    return (
      <div>
        <Layout style={{ height: "100vh" }}>
          <Layout>
            <Sider>Sider</Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    user: store.userReducer,
    tweets: store.tweetsReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    nameChange,
    ageChange
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
