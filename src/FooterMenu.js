import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CardIcon } from './images/Menu/CardIcon.svg';
import { ReactComponent as TalkIcon } from './images/Menu/Talk.svg';
import { ReactComponent as OfferIcon } from './images/Menu/Offer.svg';
import { ReactComponent as ActivityIcon } from './images/Menu/Activity.svg';
import { ReactComponent as HomeIcon } from './images/Menu/Home.svg';
import './FooterMenu.css';

const FooterMenu = () => {
    return (
        <nav className="footer-menu">
            <ul>
                <li>
                    <Link to="/homepage2" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Home
                        <HomeIcon />
                    </Link>
                </li>
                <li>
                    <Link to="/activity" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Activity
                        <ActivityIcon />
                    </Link>
                </li>
                <li>
                    <Link to="/offers" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Offers & Apply
                        <OfferIcon />
                    </Link>
                </li>
                <li>
                    <Link to="/talk" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Talk to Us
                        <TalkIcon />
                    </Link>
                </li>
                <li>
                    <Link to="/card" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Card
                        <CardIcon />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default FooterMenu;
