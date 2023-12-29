import React from 'react';
import './index.css';
import {HomeOutlined,HeartOutlined,WechatOutlined,UserOutlined,HistoryOutlined  } from '@ant-design/icons';
import './TopUpMenu.scss';

const items = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
        
      >
        
        <span className='menu-font'>Home</span> <HomeOutlined className='custom' />
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
       <span className='menu-font'>Activity</span> <HistoryOutlined className='custom' />
        
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        <span className='menu-font'>Offers and Apply</span> <HeartOutlined className='custom' />
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
       <span className='menu-font'>Talk to us</span> <WechatOutlined className='custom'/>
      </a>
    ),
  },
  {
    key: '5',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        <span className='menu-font'>Profile</span> <UserOutlined className='custom' />
      </a>
    ),
  },
];
export default items;