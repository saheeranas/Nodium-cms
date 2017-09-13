import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './AppSingle.css';
import AppIcon from '../img/appicon-sample.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import ReactPaginate from 'react-paginate';

class AppSingle extends Component {

  constructor(props) {
    super(props);
    this.handleBtnNew = this.handleBtnNew.bind(this);
  }

  handleBtnNew() {
    this.props.history.push('/post-single');
  }

  render() {
    return(
      <div>
        <div className="wrapper">

          <div className="dash-left">
            <div className="dash-left-in">
              <div className="as-icon-wrp">
                <img src={AppIcon} />
              </div>
              <ul className="dash-menu">
                <li>Settings</li>
                <li>API Details</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 6</li>
                <li>Item 7</li>
              </ul>
            </div>
          </div>

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
              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default AppSingle;
