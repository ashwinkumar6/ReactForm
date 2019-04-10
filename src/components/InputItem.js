import React from 'react';
import { Form, Input } from 'antd';

const InputItem = (props) => {
    const {
        getFieldDecorator,
        labelName,
    } = props;
    return (
        <Form.Item label={labelName}>
            {getFieldDecorator(labelName, {
                rules: [{ required: true, message: 'this is required' }],
            })(
                <Input />
            )}
        </Form.Item>
    );
}

export default InputItem;