import React from 'react'
import { TimePicker } from 'antd';
import moment from 'moment';

const Test = () => {
  return (
    <div>
      <TimePicker minuteStep={15} secondStep={10} />
    </div>
  )
}

export default Test
