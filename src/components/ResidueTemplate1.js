import React, { Component } from 'react';
import InputItem from '../components/InputItem'
import { Row, Col, Form, Input, Card, Button, Icon } from 'antd';
import Constants from '../assets/Constants';
import { makeId } from "../utils";
import SwabRinseTemplate1 from './SwabRinseTemplate1';


export default class ResidueTemplate1 extends Component {
    itemId1 = null;
    itemId2 = null;

    constructor(props) {
        super(props);

        this.itemId1 = makeId();
        this.itemId2 = makeId();

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

    render() {
        const {
            getFieldDecorator,
        } = this.props;

        const {
            swabButton,
            rinseButton
        } = this.state;

        return (
            <div>
                <Row>
                    <Col span={12}>
                        <Form.Item label="LOD (in ppm)">
                            {getFieldDecorator(this.itemId1, {
                                rules: [{ validator: this.checkNumber, required: true }],
                            })(
                                <Input type='number' />
                            )}
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item label="LOQ (in ppm)">
                            {getFieldDecorator(this.itemId2, {
                                rules: [{ validator: this.checkNumber, required: true }],
                            })(
                                <Input type="number" />
                            )}
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Button className="button-style" type={swabButton.type} ghost onClick={() => this.swabButtonClick()}>
                        <Icon type={swabButton.icon} />
                        {swabButton.text}
                    </Button>


                    {swabButton.isOpen ?
                        <Card>
                            <SwabRinseTemplate1 getFieldDecorator={getFieldDecorator} type="swab" />
                        </Card>
                        : null
                    }

                </Row>

                <Row>
                    <Button className="button-style" type={rinseButton.type} ghost onClick={() => this.rinseButtonClick()}>
                        <Icon type={rinseButton.icon} />
                        {rinseButton.text}
                    </Button>

                    {rinseButton.isOpen ?
                        <Card>
                            <SwabRinseTemplate1 getFieldDecorator={getFieldDecorator} type="rinse" />
                        </Card>
                        : null
                    }
                </Row>
            </div>
        );
    }
}
