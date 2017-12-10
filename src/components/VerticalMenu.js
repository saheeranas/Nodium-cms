import React, { Component } from 'react'
import { Input, Label, Menu, Button, Image, Header, Icon } from 'semantic-ui-react'
import './VerticalMenu.css';

export default class MenuExampleVertical extends Component {
  state = {
    activeItem: 'inbox'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    const menuStyle = {
      position: 'fixed',
      height: '100%'
    }

    return (
      <div>
        <Menu inverted vertical style={menuStyle}>

          <Header as='h3' icon textAlign='center' className="VerticalMenu_head">
            <Image src='/img/appicon-sample.png' />
            <Header.Content>
              Your App Name
            </Header.Content>
          </Header>

          <Menu.Item name='settings' active={activeItem === 'settings'} onClick={this.handleItemClick}>
            <Label color='teal'>1</Label>
            Settings
          </Menu.Item>

          <Menu.Item name='api' active={activeItem === 'api'} onClick={this.handleItemClick}>
            <Label>3</Label>
            API
          </Menu.Item>

          <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
            <Label>8</Label>
            Updates
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
