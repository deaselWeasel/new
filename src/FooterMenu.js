import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined, HistoryOutlined, HeartOutlined, MessageOutlined, UserOutlined } from '@ant-design/icons';
import './FooterMenu.css';
import { ReactComponent as CardIcon } from './images/Menu/CardIcon.svg';
import { ReactComponent as TalkIcon } from './images/Menu/Talk.svg';
import { ReactComponent as OfferIcon } from './images/Menu/Offer.svg';
import { ReactComponent as ActivityIcon } from './images/Menu/Activity.svg';
import { ReactComponent as HomeIcon } from './images/Menu/Home.svg';

const FooterMenu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/homepage2" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
                    <HomeIcon/>
                </li>
                <li>
                    <Link to="/activity" style={{ textDecoration: 'none', color: 'inherit' }}>Activity</Link>
                    <ActivityIcon/>
                </li>
                <li>
                    <Link to="/offers" style={{ textDecoration: 'none', color: 'inherit' }}>Offers & Apply</Link>
                    <OfferIcon/>
                </li>
                <li>
                    <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Talk to Us</Link>
                    <TalkIcon/>
                </li>
                <li>
                    <Link to="/card" style={{ textDecoration: 'none', color: 'inherit' }}>Card</Link>
                    <CardIcon/>
                </li>
            </ul>
        </nav>
    );
}

export default FooterMenu;
