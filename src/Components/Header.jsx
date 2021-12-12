import React from 'react';
import './Header.css';
import punklogo from '../assets/header/cryptopunk-logo.png';
import searchIcon from '../assets/header/search.png';
import themeSwitchIcon from '../assets/header/theme-switch.png';

const Header = () => {
	return (
		<div className="header">
			<div className="logoContainer">
				<img src={punklogo} className="punkLogo" />
			</div>

			<div className="searchBar">
				<div className="searchIconContainer">
					<img src={searchIcon} />
				</div>
				<input
					type="text"
					className="searchInput"
					placeholder="Collection, item or user...."
				/>
			</div>

			<div className="headerItems">
				<p className="headerItem">Drops</p>
				<p className="headerItem">Marketplace</p>
				<p className="headerItem">Create</p>
			</div>

			<div className="headerActions">
				<div className="themeSwitchContainer">
					<img src={themeSwitchIcon} alt="" />
				</div>
			</div>

			<div className="loginButton">GET IN</div>
		</div>
	);
};

export default Header;
