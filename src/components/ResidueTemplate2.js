import React, { Component } from 'react';
import { Row, Col, Form, Input, Card, Button, Icon, Radio } from 'antd';
import Constants from '../assets/Constants';
import SwabRinseTemplate2 from './SwabRinseTemplate2';
import formItemType from "../redux/formItemType";

export default class ResidueTemplate2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            swabButton: {
                text: Constants.swabButtonClosedText,
                icon: Constants.addIcon,
                type: Constants.primaryButton,
                isOpen: false
            },
            rinseButton: {
                text: Constants.rinseButtonClosedText,
                icon: Constants.addIcon,
                type: Constants.primaryButton,
                isOpen: false
            },
            radioButton: {
                IsTrue : true
            }
        };
    }

    checkNumber = (rule, value, callback) => {
        if (value > 0) {
            callback();
            return;
        }
        callback('must greater than zero!');
    }

    swabButtonClick = () => {
        let swabButton = this.state.swabButton
        if (!swabButton.isOpen) {
            swabButton = {
                text: Constants.swabButtonOpenText,
                icon: Constants.removeIcon,
                type: Constants.dangerButton,
                isOpen: true
            }
        }
        else {
            swabButton = {
                text: Constants.swabButtonClosedText,
                icon: Constants.addIcon,
                type: Constants.primaryButton,
                isOpen: false
            }
        }
        this.setState({
            swabButton: swabButton
        });
    }

    rinseButtonClick = () => {
        let rinseButton = this.state.rinseButton
        if (!rinseButton.isOpen) {
            rinseButton = {
                text: Constants.rinseButtonOpenText,
                icon: Constants.removeIcon,
                type: Constants.dangerButton,
                isOpen: true
            }
        }
        else {
            rinseButton = {
                text: Constants.rinseButtonClosedText,
                icon: Constants.addIcon,
                type: Constants.primaryButton,
                isOpen: false
            }
        }
        this.setState({
            rinseButton: rinseButton
        });
    }

    radioButtonChange = (value) => {
        let radioButton = this.state.radioButton
        radioButton.IsTrue = value 
        this.setState({
            radioButton: radioButton
        });
    }

    render() {
        const {
            getFieldDecorator,
        } = this.props;

        const {
            swabButton,
            rinseButton,
            radioButton
        } = this.state;

        const RadioGroup = Radio.Group;

        return (
            <div>

                <Form.Item label="Method Used">
                    {getFieldDecorator(formItemType.MethodUsed, {
                        rules: [{ required: true, message: 'this is required' }],
                    })(
                        <Input />
                    )}
                </Form.Item>

                <Form.Item label="Define TNTC and TFTC limits?">
                    {getFieldDecorator(formItemType.Is_TNTC_And_TFTC_Present, {
                        initialValue: radioButton.IsTrue,
                        rules: [{ required: true, message: 'this is required' }],
                    })(
                        <RadioGroup onChange={(e) => this.radioButtonChange(e.target.value) }>
                            <Radio value={true}>Yes</Radio>
                            <Radio value={false}>No</Radio>
                        </RadioGroup>
                    )}
                </Form.Item>

                {radioButton.IsTrue ?
                    <Row>
                    <Col span={12}>
                        <Form.Item label="TNTC Limit (in CFU)">
                            {getFieldDecorator(formItemType.TNTC_Limit, {
                                rules: [{ validator: this.checkNumber, required: true }],
                            })(
                                <Input type='number' />
                            )}
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item label="TFTC Limit (in CFU)">
                            {getFieldDecorator(formItemType.TFTC_Limit, {
                                rules: [{ validator: this.checkNumber, required: true }],
                            })(
                                <Input type="number" />
                            )}
                        </Form.Item>
                    </Col>
                </Row>
                        : null
                    }

                <Row>
                    <Button className="button-style" type={swabButton.type} ghost onClick={() => this.swabButtonClick()}>
                        <Icon type={swabButton.icon} />
                        {swabButton.text}
                    </Button>

                    {swabButton.isOpen ?
                        <Card className="item-spacing">
                            <SwabRinseTemplate2 getFieldDecorator={getFieldDecorator} type="swab" />
                        </Card>
                        : null
                    }
                </Row>

                <Row className="item-spacing">
                    <Button className="button-style" type={rinseButton.type} ghost onClick={() => this.rinseButtonClick()}>
                        <Icon type={rinseButton.icon} />
                        {rinseButton.text}
                    </Button>

                    {rinseButton.isOpen ?
                        <Card className="item-spacing">
                            <SwabRinseTemplate2 getFieldDecorator={getFieldDecorator} type="rinse" />
                        </Card>
                        : null
                    }
                </Row>
            </div>
        );
    }
}
