import React, { Component } from 'react';
import './AppSingle.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Menu, Button } from 'semantic-ui-react'
import MenuExampleVertical from './VerticalMenu';

class AppSingle extends Component {

  state = {
    activePagination: '1'
  }

  constructor(props) {
    super(props);
    this.handleBtnNew = this.handleBtnNew.bind(this);
  }

  paginationClick = (e, { name }) => this.setState({ activePagination: name })

  handleBtnNew() {
    this.props.history.push('/post-single');
  }

  render() {

    const { activePagination } = this.state

    return(
      <div>
        <div className="wrapper">

          <MenuExampleVertical />

          <div className="dash-right">
            <div className="dash-right-in">

              <div className="wrapper">
                <ul className="as-appname">
                  <li>App</li>
                  <li>App_Name_lorem</li>
                </ul>
                <button onClick={this.handleBtnNew} className="button-newPost">New</button>
              </div>

              <div className="asTabs-wrp">
                <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
                  <TabList>
                    <Tab>Posts(0)</Tab>
                    <Tab>Draft(0)</Tab>
                  </TabList>
                  <TabPanel>

                    <div className="asPost-wrp">

                      <div className="asPost-row">
                        <div className="asPost-left"></div>
                        <div className="asPost-right">
                          <h2>Modernipsum dolor sit amet futurism realism</h2>
                          <p>Modernipsum dolor sit amet futurism realism divisionism, lettrism lyrical abstraction neo-expressionism luminism realism. Nonconformism scuola romana neo-impressionism neoclassicism neo-expressionism neo-classicism installation art, illusionism stuckism neoclassicism nouveau realisme fluxus stuckism outsider art, rococo historicism video game art multiculturalism post-structuralism</p>
                        </div>
                      </div>
                      <div className="asPost-row">
                        <div className="asPost-left"></div>
                        <div className="asPost-right">
                          <h2>Modernipsum dolor sit amet futurism realism</h2>
                          <p>Modernipsum dolor sit amet futurism realism divisionism, lettrism lyrical abstraction neo-expressionism luminism realism. Nonconformism scuola romana neo-impressionism neoclassicism neo-expressionism neo-classicism installation art, illusionism stuckism neoclassicism nouveau realisme fluxus stuckism outsider art, rococo historicism video game art multiculturalism post-structuralism</p>
                        </div>
                      </div>
                      <div className="asPost-row">
                        <div className="asPost-left"></div>
                        <div className="asPost-right">
                          <h2>Modernipsum dolor sit amet futurism realism</h2>
                          <p>Modernipsum dolor sit amet futurism realism divisionism, lettrism lyrical abstraction neo-expressionism luminism realism. Nonconformism scuola romana neo-impressionism neoclassicism neo-expressionism neo-classicism installation art, illusionism stuckism neoclassicism nouveau realisme fluxus stuckism outsider art, rococo historicism video game art multiculturalism post-structuralism</p>
                        </div>
                      </div>
                      <div className="asPost-row">
                        <div className="asPost-left"></div>
                        <div className="asPost-right">
                          <h2>Modernipsum dolor sit amet futurism realism</h2>
                          <p>Modernipsum dolor sit amet futurism realism divisionism, lettrism lyrical abstraction neo-expressionism luminism realism. Nonconformism scuola romana neo-impressionism neoclassicism neo-expressionism neo-classicism installation art, illusionism stuckism neoclassicism nouveau realisme fluxus stuckism outsider art, rococo historicism video game art multiculturalism post-structuralism</p>
                        </div>
                      </div>
                      <div className="asPost-row">
                        <div className="asPost-left"></div>
                        <div className="asPost-right">
                          <h2>Modernipsum dolor sit amet futurism realism</h2>
                          <p>Modernipsum dolor sit amet futurism realism divisionism, lettrism lyrical abstraction neo-expressionism luminism realism. Nonconformism scuola romana neo-impressionism neoclassicism neo-expressionism neo-classicism installation art, illusionism stuckism neoclassicism nouveau realisme fluxus stuckism outsider art, rococo historicism video game art multiculturalism post-structuralism</p>
                        </div>
                      </div>

                    </div>

                  </TabPanel>
                  <TabPanel>

                      <div className="asPost-wrp">

                        <div className="asPost-row">
                          <div className="asPost-left"></div>
                          <div className="asPost-right">
                            <h2>Modernipsum dolor sit amet futurism realism</h2>
                            <p>Modernipsum dolor sit amet futurism realism divisionism, lettrism lyrical abstraction neo-expressionism luminism realism. Nonconformism scuola romana neo-impressionism neoclassicism neo-expressionism neo-classicism installation art, illusionism stuckism neoclassicism nouveau realisme fluxus stuckism outsider art, rococo historicism video game art multiculturalism post-structuralism</p>
                          </div>
                        </div>
                        <div className="asPost-row">
                          <div className="asPost-left"></div>
                          <div className="asPost-right">
                            <h2>Modernipsum dolor sit amet futurism realism</h2>
                            <p>Modernipsum dolor sit amet futurism realism divisionism, lettrism lyrical abstraction neo-expressionism luminism realism. Nonconformism scuola romana neo-impressionism neoclassicism neo-expressionism neo-classicism installation art, illusionism stuckism neoclassicism nouveau realisme fluxus stuckism outsider art, rococo historicism video game art multiculturalism post-structuralism</p>
                          </div>
                        </div>
                        <div className="asPost-row">
                          <div className="asPost-left"></div>
                          <div className="asPost-right">
                            <h2>Modernipsum dolor sit amet futurism realism</h2>
                            <p>Modernipsum dolor sit amet futurism realism divisionism, lettrism lyrical abstraction neo-expressionism luminism realism. Nonconformism scuola romana neo-impressionism neoclassicism neo-expressionism neo-classicism installation art, illusionism stuckism neoclassicism nouveau realisme fluxus stuckism outsider art, rococo historicism video game art multiculturalism post-structuralism</p>
                          </div>
                        </div>


                      </div>

                  </TabPanel>
                </Tabs>

                <Menu pagination className="AppSingle_Pagination">
                  <Menu.Item name='1' active={activePagination === '1'} onClick={this.paginationClick} />
                  <Menu.Item name='2' active={activePagination === '2'} onClick={this.paginationClick} />
                  <Menu.Item name='3' active={activePagination === '3'} onClick={this.paginationClick} />
                  <Menu.Item name='4' active={activePagination === '4'} onClick={this.paginationClick} />
                  <Menu.Item name='5' active={activePagination === '5'} onClick={this.paginationClick} />
                  <Menu.Item disabled>...</Menu.Item>
                  <Menu.Item name='11' active={activePagination === '11'} onClick={this.paginationClick} />
                  <Menu.Item name='12' active={activePagination === '12'} onClick={this.paginationClick} />
                </Menu>


              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default AppSingle;
