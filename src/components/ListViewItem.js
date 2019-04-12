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
        listId,
        onSelectAction
    } = props;
    return (
        <Form.Item label={labelName}>
            {getFieldDecorator(listId, {
                rules: [{ required: true, message: 'this is required' }],
            })(
                <Cascader
                    options={formatData(listItems)}
                    onChange={(value) => {
                        if (value[0] !== undefined) {
                            onSelectAction(value[0])
                        }
                        else {
                            onSelectAction("None")
                        }
                        }} />
            )}
        </Form.Item>
    );
}

export default ListViewItem;