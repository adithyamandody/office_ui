import { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from 'antd';

const Sale = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        sale
      </Checkbox>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout='horizontal'
        onValuesChange={onFormLayoutChange}
        disabled={componentDisabled}
      >
        <Form.Item label='partname' name='disabled' placeholder='enter party'>
          <Input />
        </Form.Item>
        <br />
        <br />

        <Form.Item label='mt'>
          <Input />
        </Form.Item>
        <Form.Item label='full'>
          <Input />
        </Form.Item>

        <Form.Item label='mrp'>
          <Input />
        </Form.Item>

        <Form.Item label='total sale'>
          <Input />
        </Form.Item>

        <Form.Item label='Button'>
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Sale;
