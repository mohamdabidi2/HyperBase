import React from 'react';
import Logo from "../resource/logo.png"
import { Select, Button, Input,Dropdown, Icon } from 'semantic-ui-react'


const Header = () => {
    const Languages = [
        { key: 'En', value: 'En', text: 'English' },
        { key: 'Ar', value: 'Ar', text: 'Arabic' }
    ]
    const category = [

        { key: 'All Categories', text: 'All Categories', value: 'All Categories' }
    ]

    const trigger = (
        <span>
          <Icon name='user' /> Hello, Mohamed
        </span>
      )
      
      const options = [
        {
          key: 'user',
          text: (
            <span>
              Signed in as <strong>Abidi Mohamed</strong>
            </span>
          ),
          disabled: true,
        },
        { key: 'profile', text: 'Your Profile' },
        { key: 'orders', text: 'Your Orders' },
        { key: 'settings', text: 'Settings' },
        { key: 'sign-out', text: 'Sign Out' },
      ]

    return (
        <div>
            <header>
                <div className="header-All">
                    <div className="header1">
                        <p className="welcome">Welcome To our HyperBase Store</p>
                        <Select placeholder='Select Language' options={Languages} className="languages" />
                    </div>
                    <div className="header2">
                        <img src={Logo} alt="" className="logo" />
                        <Input type='text' placeholder='Search...' action className="searchbar">
                            <input />
                            <Select compact options={category} defaultValue='All Categories' className="cateselect" />
                            <Button type='submit' className="searchbtn">Search</Button>
                        </Input>
                        <div className="cart">
                            <i class="fas fa-shopping-cart modedfa-shopping-cart"></i>
                            <div className="cartitems">
                                <p className="shoppingcarttitle">Shopping Cart</p>
                                <p className="blance"><span className="shoppingvalues">6</span> Items <span className="shoppingvalues"> 2000</span>DT</p>
                            </div>
                        </div>
                    </div>
                    <div className="header3">
                    <div className="header3part1">
                    <Select compact options={category} defaultValue='All Categories' className="cateselect categg" />
                    <p className="headerpartone">Home</p>
                    <p className="headerpartone">Specials</p>
                    <p className="headerpartone">Contact us</p>
                    </div>
                    <Dropdown trigger={trigger} options={options} id='drop1'/>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;