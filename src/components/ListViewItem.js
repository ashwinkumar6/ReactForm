import React from 'react';
import { Form, Cascader } from 'antd';

const formatData = (data) => {
    let processData = [];
    for (var key in data) {
        processData.push({
            value: data[key],
            label: data[key]
        })
    }
    return processData;
}

const ListViewItem = (props) => {
    const {
        getFieldDecorator,
        labelName,
        listItems,
        selectTargetResidue
    } = props;
    return (
        <Form.Item label={labelName}>
            {getFieldDecorator(labelName, {
                rules: [{ required: true, message: 'this is required' }],
            })(
                <Cascader
                    options={formatData(listItems)}
                    onChange={(value)=>{selectTargetResidue(value[0])} } />
            )}
        </Form.Item>
    );
}

export default ListViewItem;