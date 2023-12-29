import React from 'react';
import CustomButton from './CustomButton';
import SmallButton from './SmallButton';
import LabelValue from './LabelValue';
import { CloseSquareOutlined } from '@ant-design/icons';
import CustomCard from './MyCustomComponent';
import { BorderOutlined} from '@ant-design/icons';
import './MenuButton'
import YourComponent from './MenuButton';
import MenuButton from './MenuButton';
import Step1 from './step4/step1';


<div>
            <CustomButton text="Primary Button" type="primary" onClick={() => console.log('Clicked!')} />
            <CustomButton text="Secondary Button" type="secondary" onClick={() => console.log('Clicked!')} />
            <CustomButton text="Tertiary Button" type="tertiary" onClick={()=> console.log('Clicked!')}/>

          <div><SmallButton text="Primary Small" type="primary" onClick={() => console.log('Primary Small Clicked!')} />
              <SmallButton text="Secondary Small" type="secondary" onClick={() => console.log('Secondary Small Clicked!')}/>
              <SmallButton text="Tertiary Small" type="tertiary" onClick={() => console.log('Tertiary Small Clicked!')}/>
            </div>
            <div style={{ margin: '25px' }}>
                
                <LabelValue 
                label="Label" 
                value="Value"
                icon={<CloseSquareOutlined style={{ marginRight: '8px' }} />}
                  />
                 <LabelValue
                 label="Label"
                 value="Value"
                 icon={<CloseSquareOutlined style={{marginRight:'8px',}}/>}
                 className="label-value-custom"
                 /> <div >
                      <CustomCard 
                          title="User Name" 
                          label="User Role" 
                          icon={BorderOutlined}
                          style={{ borderColor: 'lightgray', borderWidth: 2 }}
                          titleStyle={{ color: 'blue' }}
                          labelStyle={{ color: 'gray' }}
                          />

                 </div>
                 <div style={{ margin: '25px' }}>
                    <Step1/>
                  </div>
                 <div>
                  <MenuButton/>
                 </div>

              </div>
        </div>