import React, { Component } from 'react';
import './AppSingle.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Menu, Button, Item } from 'semantic-ui-react'
import MenuExampleVertical from './VerticalMenu';

const description = [
  'Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their',
  'tiny stature, and even others for their massive size.',
].join(' ')

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
                <Button primary onClick={this.handleBtnNew} className="button-newPost">New</Button>
              </div>

              <div className="asTabs-wrp">
                <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
                  <TabList>
                    <Tab>Posts(0)</Tab>
                    <Tab>Draft(0)</Tab>
                  </TabList>
                  <TabPanel>

                    <div className="asPost-wrp">

                      <Item.Group divided>
                        <Item>
                          <Item.Image size='small' src='/img/image.png' />
                          <Item.Content>
                            <Item.Header as='a'>Cute Dog</Item.Header>
                            <Item.Description>
                              <p>{description}</p>
                              <p>
                                Many people also have their own barometers for what makes a cute dog.
                              </p>
                            </Item.Description>
                          </Item.Content>
                        </Item>

                        <Item>
                          <Item.Image size='small' src='/img/image.png' />
                          <Item.Content>
                            <Item.Header as='a'>Cute Dog</Item.Header>
                            <Item.Description content={description} />
                          </Item.Content>
                        </Item>

                        <Item>
                          <Item.Image size='small' src='/img/image.png' />
                          <Item.Content header='Cute Dog' description={description} />
                        </Item>

                        <Item>
                          <Item.Image size='small' src='/img/image.png' />
                          <Item.Content>
                            <Item.Header as='a'>Cute Dog</Item.Header>
                            <Item.Description>
                              <p>{description}</p>
                              <p>
                                Many people also have their own barometers for what makes a cute dog.
                              </p>
                            </Item.Description>
                          </Item.Content>
                        </Item>

                        <Item>
                          <Item.Image size='small' src='/img/image.png' />
                          <Item.Content>
                            <Item.Header as='a'>Cute Dog</Item.Header>
                            <Item.Description content={description} />
                          </Item.Content>
                        </Item>
                      </Item.Group>

                    </div>

                  </TabPanel>
                  <TabPanel>

                      <div className="asPost-wrp">

                        <Item.Group divided>
                          <Item>
                            <Item.Image size='small' src='/img/image.png' />
                            <Item.Content>
                              <Item.Header as='a'>Cute Dog</Item.Header>
                              <Item.Description>
                                <p>{description}</p>
                                <p>
                                  Many people also have their own barometers for what makes a cute dog.
                                </p>
                              </Item.Description>
                            </Item.Content>
                          </Item>

                          <Item>
                            <Item.Image size='small' src='/img/image.png' />
                            <Item.Content>
                              <Item.Header as='a'>Cute Dog</Item.Header>
                              <Item.Description content={description} />
                            </Item.Content>
                          </Item>

                          <Item>
                            <Item.Image size='small' src='/img/image.png' />
                            <Item.Content header='Cute Dog' description={description} />
                          </Item>
                        </Item.Group>

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
