import React from 'react';
import './ActivityPage.scss';
import backgroundImage from './../images/bg2.jpg';
import graphImage from './../images/Graph1.png';
import Selector from './Selector';
import {List,Avatar,Row,Col} from 'antd';
import { DownOutlined  } from '@ant-design/icons';
import Footer from '../Footer';

const ActivityPage = () => {
    const transactions = [
        {
          month: "October",
          year: "2023",
          date: "Sat 7 October",
          items: [
            {
              initials: "CR",
              description: "Caroline Springs Super Clinic",
              time: "8:31 pm",
              details: "csprings.com/clinic",
              amount: "$64.35",
              color: "pink" // Replace with the actual color code from your design
            },
            {
              initials: "MP",
              description: "Melbourne Physio",
              time: "4:16 pm",
              details: "Session One",
              amount: "$96.00",
              color: "orange" // Replace with the actual color code
            },
            // ... more items
          ]
        },
        {
          date: "Fri 5 October",
          items: [
            {
              initials: "MA",
              description: "Mt Alexander Dental",
              time: "11:41 am",
              details: "payments",
              amount: "$124.00",
              color: "pink"
            },
            {
              initials: "CR",
              description: "Caroline Springs Super Clinic",
              time: "6:25 pm",
              details: "csprings.com/clinic",
              amount: "$25.45",
              color: '#EAF6DD'
              }
            // ... items for this date
          ]
        },
        {   
            date:'Wed 2 October',
            items:[
                {
                    initials: "TSC",
                    description: "Tarneit Super Clinic",
                    time: "6:25 pm",
                    details: "TSClinic.com/clinic",
                    amount: "$82.45",
                    color: '#FEF6DD'
                },
                {
                    initials: "CP",
                    description: " Caulfield Physio",
                    time: "12:15 pm",
                    details: "Cphysio.com/appointments",
                    amount: "$92.45",
                    color: '#FEC6DD'
                }
            ]
        },
        {   
            date:'Tue 1 October',
            items:[
                {
                    initials: "TSC",
                    description: "Tarneit Super Clinic",
                    time: "10:25 pm",
                    details: "TSClinic.com/clinic",
                    amount: "$42.45",
                    color: '#FEF6DD'
                }
            ]
        }
        // ... more dates
      ];
      
      const monthYear = transactions.length > 0 ? `${transactions[0].month} ${transactions[0].year}` : '';
      return (
        <div>
            <div className="activity-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="activity-page-header">
                <h1>Activity</h1>
                <Selector/>
            </div>

            <div className="boxes-above-overlay">
                <div className="left-box" >
                    <h6>Upcoming</h6>
                    <h1>4</h1>
                </div>
                <div className="right-box">
                    <h6>Insights</h6>
                    <img src={graphImage} alt="graph"/>

                </div>
            </div>   
            <Row justify="center" style={{width:'100%'}}>
                <Col xs={24} sm={20} md={18} lg={16} xl={14}>
                    <div className="overlay-activity">
                    <DownOutlined className="down-icon" />
                        {/* Month and Year header */}
                        {transactions.length > 0 && (
                            <div className="month-year-header">{monthYear}</div>
                        )}
                        {/* List of transactions */}
                        <List
                            itemLayout="horizontal"
                            dataSource={transactions}
                            renderItem={day => (
                                <div key={day.date}>
                                    <div className="date-header">{day.date}</div>
                                    <div className="overlay-list">
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={day.items}
                                        renderItem={item => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    avatar={<Avatar style={{ backgroundColor: item.color, color: '#000' }}>{item.initials}</Avatar>}
                                                    title={<a href={`http://${item.details}`}>{item.description}</a>}
                                                    description={`${item.time}, ${item.details}`}
                                                />
                                                <div className="transaction-amount">{item.amount}</div>
                                            </List.Item>
                                        )}
                                    />
                                     </div>
                                </div>
                            )}
                        />
                    </div>
                </Col>
            </Row>
        </div>
        <Footer iconColor="#5E4DB2"/>
        </div>
        
    );
};

export default ActivityPage;