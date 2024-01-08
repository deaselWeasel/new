import React, { useState } from 'react';
import backgroundImage from './../images/bg3.png';
import { DatePicker,Form ,Button} from 'antd';
import './Booking.scss';
import CustomRadioCard from './CustomRadioCard';
import './CustomRadioCard.scss';
import CustomDropdown from './CustomDropdown';  
import CustomButton from '../CustomButton';
import { DownOutlined  } from '@ant-design/icons';
import Footer from '../Footer';
import { ReactComponent as DateIcon } from '../images/DateIcon.svg';



function BookingPage() {
  const [activeButton, setActiveButton] = useState('newBooking'); // Default active button

  const [bookingOption, setBookingOption] = useState(null);
  const [bookingFor, setBookingFor] = useState(null);  

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  const [form] = Form.useForm();
  const onSubmit = (values) => {
    console.log('Form Data submitted:', values);
   
  };

  // Handler for first group of radio buttons
  const onBookingOptionChange = e => {
    console.log("Booking Option Selected: ", e.target.value);
    setBookingOption(e.target.value);
  };

  // Handler for second group of radio buttons
  const onBookingForChange = e => {
    console.log("Booking For Selected: ", e.target.value);
    setBookingFor(e.target.value);
  };


  const [selectedValue, setSelectedValue] = useState(null);

  const onRadioChange = e => {
    console.log("New Value: ", e.target.value);
    setSelectedValue(e.target.value);
  };

  return (
    <div className="booking-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <header className='booking-header'>
            <h2>Make a Booking</h2>
        </header>
        <div className='booking-button'>
        <Button
          className={activeButton === 'rebook' ? 'active' : ''}
          onClick={() => handleButtonClick('rebook')}
        >
          Rebook
        </Button>
        <Button
          className={activeButton === 'newBooking' ? 'active' : ''}
          onClick={() => handleButtonClick('newBooking')}
        >
          New Booking
        </Button>    
        </div>
      <div className="booking-box">
            <DownOutlined className='down-icon' />
        <div className='custom-radio-group'>
        <h3 >Recent bookings</h3>    
        <CustomRadioCard
            value="option1"
            title="Caroline Springs Super Clinic"
            label="Last Wed, Dr Eamon West"
            checked={bookingOption === 'option1'}
            onChange={onBookingOptionChange}
         />
         <CustomRadioCard
        value="option2"
        title="Melbourne Physio"
        label="Tues 4/8, Dr James Green"
        checked={bookingOption === 'option2'}
        onChange={onBookingOptionChange}
      />
      <h3>Who is this booking for ?</h3>
      <CustomRadioCard
        value="option3"
        title="This booking is for me."
        checked={bookingFor === 'option3'}
        onChange={onBookingForChange}
      />
      <CustomRadioCard 
        value="option4"
        title="This booking is for someone else."
        checked={bookingFor === 'option4'}
        onChange={onBookingForChange}
      />
        <h3>Preferred Date</h3>
        <DatePicker
        style={{ width: '95%', borderRadius: 'var(--radius-btn-radius, 0.25rem)' }}
        className="custom-datepicker"
        placeholder="dd/mm/yy"
        suffixIcon={<DateIcon />} // Custom icon
        />
        <h3>How long do you need?</h3>
        <CustomDropdown/>
        <CustomButton text={"Show me available times"} type="button"/>
        </div>
      </div>
      <Footer iconColor="#5E4DB2"/>
    </div>
  );
}

export default BookingPage;
