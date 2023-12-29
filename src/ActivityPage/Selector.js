import React from 'react';
import { Select } from 'antd';
import './ActivityPage.scss';

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log('search:', value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
const Selector = () => (
  <Select
    className="selector-styles"
    showSearch
    placeholder="Filter by"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
    options={[
      {
        value: 'By Transaction',
        label: 'By Transaction'
       
      },
      {
        value: 'By Date',
        label: 'By Date',
      }
    ]}
  />
);
export default Selector;