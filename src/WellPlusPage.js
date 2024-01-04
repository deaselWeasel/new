import React from 'react';
import './WellPlusPage.css';
import { Card } from 'antd';
import { CheckSquareFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';



const WellPlusPage = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };


  const perks = [
    {
      title: 'Priority Access',
      description: <>Access times only available to<br />Plus members</>
    },
    {
      title: 'Special Services',
      description: <>Access 30 exclusive health<br />services including dental and<br />chiropractics</>
    },
    {
      title: 'Feel Cared For',
      description: <>We’ll personally check in on how you’re going</>
    },
    {
      title: 'Unicorns',
      description: <>Get a unicorn delivered to your<br/>front door, free</>
    }
  ];
  

  return (
    <div className='activity-page-background'>
      <div className="content-container">
        <div className="above-cards-text-container">
          <div className='well-text'>Well<span className="plus">+</span></div>
          <div className='more-text'>Your health first.<br/>No questions asked.</div>
        </div>
        <div className='white-box'>
          <div className='subscription-header'>
              <div className='price-text'>For $59 per month</div>
              <div className='unlock-text'>Here's some of what you unlock</div>
          </div>
          <div className="cards-container">
              {perks.map((perk, index) => (
                  <Card key={index} className='perk-card'>
                      <div className="icon-and-text-container">
                          <CheckSquareFilled className="tick-icon" />
                          <div className="plus-text-container">
                              <h3 className="perk-title">{perk.title}</h3>
                              <p className="perk-description">{perk.description}</p>
                          </div>
                      </div>
                  </Card>
              ))}
          </div>
          <button className="join-now-button">JOIN NOW</button>    
      </div>
      <button className="plus-return" onClick={goBack}>Go Back</button>
      </div>
    </div>
  );
};

export default WellPlusPage;
