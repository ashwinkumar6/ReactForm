import React, { Component } from 'react';
import { Row, Col, Form, Input } from 'antd';
import { makeId } from '../utils';
import Moc from './Moc';
export default class SwabRinseTemplate1 extends Component {
    itemId1 = null;
    itemId2 = null;
    itemId3 = null;
    itemId4 = null;

    constructor(props) {
        super(props);

        this.itemId1 = makeId();
        this.itemId2 = makeId();
        this.itemId3 = makeId();
        this.itemId4 = makeId();
    }

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
                    {getFieldDecorator(this.itemId1, {
                        rules: [{ required: true, message: 'this is required' }],
                    })(
                        <Input />
                    )}
                </Form.Item>

                {type === "swab" ?
                    <Row>
                        <Col span={12}>
                            <Form.Item label="Solvent Name">
                                {getFieldDecorator(this.itemId2, {
                                    rules: [{ required: true, message: 'this is required' }],
                                })(
                                    <Input />
                                )}
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item label="Solvent Quantity">
                                {getFieldDecorator(this.itemId3, {
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
                    {getFieldDecorator(this.itemId4, {
                        rules: [{ validator: this.checkNumber, required: true }],
                    })(
                        <Input type='number' />
                    )}
                </Form.Item>
                
                <Moc getFieldDecorator={getFieldDecorator}/>
            </div>
        );
    }
}
