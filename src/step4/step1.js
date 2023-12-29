import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { FileOutlined, IdcardOutlined, PhoneOutlined,MedicineBoxOutlined } from '@ant-design/icons';
import CustomDropdown from './CustomDropDown.js';
import CustomButton from '../CustomButton.js';
import './../CustomButton.scss';
import backgroundImage from './../images/bg1.jpg'; // Adjust the path to where your image is located
import './Step1.scss'; 
import CustomSteps from '../CustomStep.js';
import Footer from '../Footer.js'


const { Option } = Select;

const Step1 = () => {
  const [form] = Form.useForm();

  const onSubmit = (values) => {
    console.log('Form Data submitted:', values);
    // Handle form submission (e.g., API call) here
  };
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', // This ensures that the background covers the whole container
    backgroundPosition: 'center', // This centers the background image
    height: '100vh', // Adjust the height as needed
    width: '100%',
  };



  return (
    <div style ={backgroundStyle}>
      <div className="step1-overlay">
        <CustomSteps currentStep={2}/>
        <div className="step1-header">
          <h1 className="step1-title">Abidal,</h1>
          <p className="step1-subtitle">We've found you!</p>
          <p className="step1-description">We just need a couple of identity checks<br/> to ensure your safety.</p>
        </div>
    <Form
      className ="custom-form-item"
      form={form}
      onFinish={onSubmit}
      layout ="vertical"
    >
      <Form.Item
       
        label="Mobile Number"
        name="mobileNumber"
        rules={[{ required: true, message: 'Please enter your mobile number.' }]}
      >
        <Input prefix={<PhoneOutlined/>} placeholder="Enter your mobile" allowClear />
      </Form.Item>
      <Form.Item
        label="TFN"
        name="tfn"
        rules={[{ required: true, message: 'Please enter your Tax File Number.' }]}
      >
        <Input prefix={<FileOutlined/>} placeholder="Tax File Number" allowClear />
      </Form.Item>
      <Form.Item
        label="Passport"
        name="passport"
        rules={[{ required: true, message: 'Please enter your Passport Number.' }]}
      >
        <Input prefix={<IdcardOutlined/>} placeholder="Passport Number" allowClear />
      </Form.Item>
      <Form.Item
        label="Medicare Fund"
        name="medicareFund"
        >
        <CustomDropdown className="custom-dropdown"/>
     </Form.Item>
      <Form.Item>
        <CustomButton text="Next: One Time passcode" type="primary"></CustomButton>
        <CustomButton text="I'll do this later" type="secondary"></CustomButton>
      </Form.Item>
    </Form>
    </div>
    <Footer/>
  </div>
  );
};

export default Step1;
