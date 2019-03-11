import React, { Component } from 'react';
import './App.css';
import './Component/Tabs.css';
import '../node_modules/antd/dist/antd.css';
import '../node_modules/leaflet/dist/leaflet.css';
import './Component/Map.css';
import {Map} from './Component/Map';
import {TrajectoriesForm} from './Component/TrajectoriesForm'
import {Tabs} from './Component/Tabs'
import {Layout} from 'antd';
const  {Header, Content, Sider} = Layout;

class App extends  Component {
  render() {
    return (
      <div>
          <Layout>
            <Header></Header>
            <Layout id="layout">
                <Sider width="410px" id="left-sidebar">
                    <div>
                        <Tabs>
                            <div label="Query Trajectories">
                                <TrajectoriesForm />
                            </div>
                            <div label="Pre-Processing">
                                After 'while, <em>Crocodile</em>!
                            </div>
                            <div label="Prediction">
                                Nothing to see here, this tab is <em>extinct</em>!
                            </div>
                        </Tabs>
                    </div>
                </Sider>

                <Content id="right-content">
                    <div id="map">
                        <Map />
                    </div>
                </Content>

            </Layout>

          </Layout>
      </div>
    );
  }
}

export default App;