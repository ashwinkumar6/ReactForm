import React, { Component } from 'react';
import { Row, Col, Form, Input, Radio } from 'antd';
import Moc from './Moc';
import formItemType from "../redux/formItemType";

export default class SwabRinseTemplate1 extends Component {

    checkNumber = (rule, value, callback) => {
        if (value > 0) {
            callback();
            return;
        }
        callback('must greater than zero!');
    }

    checkPercentage = (rule, value, callback) => {
        if (value >= 0 && value <= 100) {
            callback();
            return;
        }
        callback('must be a valid percentage');
    }

    radioButtonChange = (value) => {
        // TODO
        };

    render() {
        const {
            getFieldDecorator,
            type
        } = this.props;

        const RadioGroup = Radio.Group;

        return (
            <div>
                {type === "rinse" ?
                    <Form.Item label="Solvent Volume">
                        {getFieldDecorator(formItemType.SolventVolume, {
                            rules: [{ validator: this.checkNumber, required: true }],
                        })(
                            <Input type="number" />
                        )}
                    </Form.Item>
                    : null
                }


                <Row>
                    <Col span={12}>
                        <Form.Item label="Use Recovery for Swab?">
                            {getFieldDecorator(`${type}${formItemType.IsRecoveryForSwabPresent}`, {
                                initialValue: true,
                                rules: [{ required: true, message: 'this is required' }],
                            })(
                                <RadioGroup onChange={(e) => this.radioButtonChange(e.target.value)}>
                                    <Radio value={true}>Yes</Radio>
                                    <Radio value={false}>No</Radio>
                                </RadioGroup>
                            )}
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item label="Default Recovery (%)">
                            {getFieldDecorator(`${type}${formItemType.DefaultRecovery}`, {
                                rules: [{ validator: this.checkPercentage, required: true }],
                            })(
                                <Input type="number"/>
                            )}
                        </Form.Item>
                    </Col>
                </Row>

                <Moc getFieldDecorator={getFieldDecorator} type={type}/>

            </div>
        );
    }
}
