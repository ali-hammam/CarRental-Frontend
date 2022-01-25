import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Test = () => {
  const [image, setImage] = useState([]);

  const props = {
    beforeUpload: file => {
      const isPNG = file.type.split('/')[0] === 'image';
      if (!isPNG) {
        message.error(`${file.name} is not a png file`);
      }
      return isPNG || Upload.LIST_IGNORE;
    },

    onChange: info => {
      info.fileList.splice(0, info.fileList.length-1);
      console.log(info.fileList[0]['name'] + '/' + info.fileList[0]['uid']);
    }
  };

  return (
    <div>
      <h1>Image</h1>
      <Upload 
        {...props}
        listType="picture"
        className="upload-list-inline"
      >
        <Button icon={<UploadOutlined />}>Upload Image</Button>
      </Upload>
    </div>
  );
};

export default Test;
