import { Button, Icon, Form, Input } from 'antd';
import React, { Component } from 'react';

class ButtonGroup extends Component {
    render() {
        const { getFieldDecorator} = this.props.form;
        return (
        <div>
            {/* <Button type="primary" ghost><Icon type="plus-circle" />configure Swab Sampling Parameters</Button>
            <br/>
            <Button className="buttonStyle" type="danger" ghost><Icon type="minus-circle" />
            configure Rinse Sampling Parameters
            </Button> */}

            <Form>
                <Form.Item
                    label="E-mail">
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
            </Form>

        </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(ButtonGroup);

export default WrappedNormalLoginForm;
