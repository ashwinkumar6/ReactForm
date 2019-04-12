import React, { Component } from 'react';
import { Row, Col, Form, Input } from 'antd';
import Moc from './Moc';
import formItemType from "../redux/formItemType";

export default class SwabRinseTemplate1 extends Component {
    checkNumber = (rule, value, callback) => {
        if (value >= 0 && value <= 100) {
            callback();
            return;
        }
        callback('must be a valid percentage');
    }

    render() {
        const {
            getFieldDecorator,
            type
        } = this.props;

        return (
            <div>
                <Form.Item label="Method Used">
                    {getFieldDecorator(`${type}${formItemType.MethodUsed}`, {
                        rules: [{ required: true, message: 'this is required' }],
                    })(
                        <Input />
                    )}
                </Form.Item>

                {type === "swab" ?
                    <Row>
                        <Col span={11}>
                            <Form.Item label="Solvent Name">
                                {getFieldDecorator(formItemType.SolventName, {
                                    rules: [{ required: true, message: 'this is required' }],
                                })(
                                    <Input />
                                )}
                            </Form.Item>
                        </Col>

                        <Col span={2}/>

                        <Col span={11}>
                            <Form.Item label="Solvent Quantity">
                                {getFieldDecorator(formItemType.SolventQuantity, {
                                    rules: [{ required: true, message: 'this is required' }],
                                })(
                                    <Input type='number' />
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                    : null
                }
                <Form.Item label="Default Recovery (%)">
                    {getFieldDecorator(`${type}${formItemType.DefaultRecovery}`, {
                        rules: [{ validator: this.checkNumber, required: true }],
                    })(
                        <Input type='number' />
                    )}
                </Form.Item>

                <Moc getFieldDecorator={getFieldDecorator} type={type} />
            </div>
        );
    }
}
