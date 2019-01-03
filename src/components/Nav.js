import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkating } from '@fortawesome/free-solid-svg-icons';
import DropdownMenu, { NestedDropdownMenu } from 'react-dd-menu';
import 'react-dd-menu/dist/react-dd-menu.min.css';

library.add(faSkating);

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isDestinationMenuOpen: false,
      isEventsMenuOpen: false,
      isGearMenuOpen: false,
      isMediaMenuOpen: false,
      isSummerFunMenuOpen: false,
    };
    this.click = this.click.bind(this);
    this.toggleDestination = this.toggleDestination.bind(this);
    this.closeDestination = this.closeDestination.bind(this);
    this.toggleEvents = this.toggleEvents.bind(this);
    this.closeEvents = this.closeEvents.bind(this);
    this.toggleGear = this.toggleGear.bind(this);
    this.closeGear = this.closeGear.bind(this);
    this.toggleMedia = this.toggleMedia.bind(this);
    this.closeMedia = this.closeMedia.bind(this);
    this.toggleSummerFun = this.toggleSummerFun.bind(this);
    this.closeSummerFun = this.closeSummerFun.bind(this);
  }

  toggleDestination() {
    this.setState({ isDestinationMenuOpen: !this.state.isDestinationMenuOpen });
  }

  closeDestination() {
    this.setState({ isDestinationMenuOpen: false });
  }

  toggleEvents() {
    this.setState({ isEventsMenuOpen: !this.state.isEventsMenuOpen });
  }

  closeEvents() {
    this.setState({ isEventsMenuOpen: false });
  }

  toggleGear() {
    this.setState({ isGearMenuOpen: !this.state.isGearMenuOpen });
  }

  closeGear() {
    this.setState({ isGearMenuOpen: false });
  }

  toggleMedia() {
    this.setState({ isMediaMenuOpen: !this.state.isMediaMenuOpen });
  }

  closeMedia() {
    this.setState({ isMediaMenuOpen: false });
  }

  toggleSummerFun() {
    this.setState({ isSummerFunMenuOpen: !this.state.isSummerFunMenuOpen });
  }

  closeSummerFun() {
    this.setState({ isSummerFunMenuOpen: false });
  }

  click() {
    console.log('You clicked an item');
  }

  render() {
    const destinationOptions = {
      isOpen: this.state.isDestinationMenuOpen,
      close: this.closeDestination,
      toggle: <NavLink className="nav-link" exact to="/" onClick={this.toggleDestination}>Destinations</NavLink>,
      align: 'left',
    };

    const canadaNestedProps = {
      toggle: <a href="#">Canada</a>,
      animate: true,
    };

    const usaNestedProps = {
      toggle: <a href="#">USA</a>,
      animate: true,
    };

    const eventsOptions = {
      isOpen: this.state.isEventsMenuOpen,
      close: this.closeEvents,
      toggle: <NavLink className="nav-link" exact to="/" onClick={this.toggleEvents}>Events</NavLink>,
      align: 'left',
    };

    const gearOptions = {
      isOpen: this.state.isGearMenuOpen,
      close: this.closeGear,
      toggle: <NavLink className="nav-link" exact to="/" onClick={this.toggleGear}>Gear</NavLink>,
      align: 'left',
    };

    const mediaOptions = {
      isOpen: this.state.isMediaMenuOpen,
      close: this.closeMedia,
      toggle: <NavLink className="nav-link" exact to="/" onClick={this.toggleMedia}>Media</NavLink>,
      align: 'left',
    };

    const summerFunOptions = {
      isOpen: this.state.isSummerFunMenuOpen,
      close: this.closeSummerFun,
      toggle: <NavLink className="nav-link" exact to="/" onClick={this.toggleSummerFun}>Summer Fun</NavLink>,
      align: 'right',
      textAlign: 'left',
    };

    const adventuresAfloatNestedProps = {
      toggle: <a href="#">Adventures Afloat</a>,
      animate: true,
    };

    const bicycleTouringNestedProps = {
      toggle: <a href="#">Bicycle Touring</a>,
      animate: true,
    };

    return (
      <div className="nav-container">
        <NavLink className="logo" exact to="/">
          <div className="logo-container">
            <FontAwesomeIcon icon="skating" size="2x" />
            NordicSkaters.org
          </div>
        </NavLink>
        <div className="nav-links-container">
          <DropdownMenu {...destinationOptions}>
            <li><a href="http://nordicskaters.org/nordicskating/austria/index.html">Austria</a></li>
            <NestedDropdownMenu {...canadaNestedProps}>
              <li><a href="#">Alberta</a></li>
              <li><a href="#">BC</a></li>
              <li><a href="#">Manitoba</a></li>
              <li><a href="#">Ontario</a></li>
              <li><a href="#">Quebec</a></li>
            </NestedDropdownMenu>
            <li><a href="#">Sweden</a></li>
            <NestedDropdownMenu {...usaNestedProps}>
              <li><a href="#">Alaska</a></li>
              <li><a href="#">California</a></li>
              <li><a href="#">Colorado</a></li>
              <li><a href="#">Maine</a></li>
              <li><a href="#">Mass</a></li>
              <li><a href="#">Michigan</a></li>
              <li><a href="#">Minnesota</a></li>
              <li><a href="#">Montana</a></li>
              <li><a href="#">NH</a></li>
              <li><a href="#">NY</a></li>
              <li><a href="#">VT</a></li>
              <li><a href="#">Wisconsin</a></li>
            </NestedDropdownMenu>
          </DropdownMenu>

          <DropdownMenu {...eventsOptions}>
            <li><a href="#">Festi-Glace</a></li>
            <li><a href="#">Lake Morey Skate-a-thon</a></li>
            <li><a href="#">Memphremagog Ice Festival</a></li>
            <li><a href="#">Occom Pond Party</a></li>
            <li><a href="#">Pentathlon des Neiges</a></li>
            <li><a href="#">Pleasant Lake Winterfest</a></li>
            <li><a href="#">Silver Skate Festival & Triathlon</a></li>
            <li><a href="#">Squam Lake Winterfest</a></li>
            <li><a href="#">Vikingarannet</a></li>
            <li><a href="#">Winter Doe Camp</a></li>
            <li><a href="#">Winterlude: Ottawa`s Carnival</a></li>
            <li><a href="#">Workshops</a></li>
          </DropdownMenu>

          <DropdownMenu {...gearOptions}>
            <li><a href="#">Nordic Skates</a></li>
            <li><a href="#">Ice Safety Equipment</a></li>
            <li><a href="#">Protective Gear</a></li>
          </DropdownMenu>

          <DropdownMenu {...mediaOptions}>
            <li><a href="#">Facebook Groups</a></li>
            <li><a href="#">Listserves</a></li>
            <li><a href="#">Marathon Skating International</a></li>
            <li><a href="#">Magazines</a></li>
            <li><a href="#">Newspapers</a></li>
            <li><a href="#">Notecards</a></li>
            <li><a href="#">Photos</a></li>
            <li><a href="#">TV/Video</a></li>
          </DropdownMenu>

          <DropdownMenu {...summerFunOptions}>
            <NestedDropdownMenu {...adventuresAfloatNestedProps}>
              <li><a href="#">Lake George</a></li>
              <li><a href="#">Wianno Seniors</a></li>
            </NestedDropdownMenu>
            <NestedDropdownMenu {...bicycleTouringNestedProps}>
              <li><a href="#">France</a></li>
              <li><a href="#">Le Grand Tour</a></li>
              <li><a href="#">Ragbrai</a></li>
              <li><a href="#">Supported Camping Tours</a></li>
            </NestedDropdownMenu>
            <li><a href="#">Birch Canoes and Paper</a></li>
          </DropdownMenu>
          <NavLink className="nav-link right-link" exact to="/">
            Contact
          </NavLink>
        </div>
      </div>
    );
  }
}

// react-redux glue -- outputs Container that know state in props
// new way to connect with react router 4
export default withRouter(Nav);
