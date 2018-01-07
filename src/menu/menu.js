import React, { Component } from 'react';
import './menu.css';
import Draggable from 'react-draggable';
import MenuList from './menuList/menuList.jsx'

/** The burger bar controls whether the menu shows or not.
 *  When the menu is showing, it displays each players: round w/l count,
 *  highest score
 *
 */
class Menu extends Component {
    openMenu = 'Open Menu';
    closeMenu = 'Close Menu';

    constructor(props) {
        super(props);
        this.onHamburgerBarClick = this.onHamburgerBarClick.bind(this);
        this.state = {
            menuOpen: false,
            menuNotification: this.openMenu,
        };
    }

    render() {
        return (
            <div className="rel-wrapper">
                <Draggable>
                    <div id="menu" ref={input => this.menu = input}>
                        <h2 id="title">Menu</h2>
                        <div id="playersContainer">
                            {/* Start of top players container */}
                            <div id="topPlayer" className="player">
                                <h3 className="player-title"><strong>Top Player</strong></h3>
                                <MenuList arr={this.props.topRoundsArray}/>
                            </div>
                            {/* Start of bottom players container */}
                            <div id="bottomPlayer" className="player">
                                <h3 className="player-title"><strong>Bottom Player</strong></h3>
                                <MenuList arr={this.props.botRoundsArray} />
                            </div>
                        </div>
                    </div>
                </Draggable>
                {/* Hamburger button. Controls content above */}
                <div id="burger-bar" onClick={() => this.onHamburgerBarClick()}>
                    <div className="teal-bar"></div>
                    <div className="orange-bar"></div>
                    <div className="green-bar"></div>
                </div>
                <p id="menuNotification">{this.state.menuNotification}</p>
            </div>
        )
    }

    componentDidMount() {
        this.menu.onmousedown = () => this.menu.style.cursor = 'grabbing';
        this.menu.onmouseup = () => this.menu.style.cursor = 'grab';
    }

    onHamburgerBarClick() {
        console.log('on bar click')
        if (this.state.menuOpen) { // close menu
            this.menu.style.display = 'none';
        }
        else { // open menu
            this.menu.style.display = 'block';
        }
        this.setState({
            menuOpen: !this.state.menuOpen,
            menuNotification: this.state.menuNotification === this.openMenu ? this.closeMenu : this.openMenu,
        });
    }
}

export default Menu;
