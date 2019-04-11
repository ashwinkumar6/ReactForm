import React, { Component } from 'react';
import { Row, Col, Form, Input, Button, Icon, Card } from 'antd';
import { makeId } from "../utils";
import Constants from '../assets/Constants';

export default class Moc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            moc: {
                isPresent: false,
                data: []
            }
        }
    }

    checkPercentage = (rule, value, callback) => {
        if (value >= 0 && value <= 100) {
            callback();
            return;
        }
        callback('must be a valid percentage');
    }

    AddMocButton = () => {
        let moc = this.state.moc;
        moc.isPresent = true;

        moc.data.push({
            Id: makeId()
        });

        this.setState({
            moc: moc
        });
    }

    AddAnotherButton = () => {
        let moc = this.state.moc;

        moc.data.push({
            Id: makeId()
        });

        this.setState({
            moc: moc
        });
    }

    RemoveMocButton = (id) => {
        let moc = this.state.moc;
        for (var i = 0; i < moc.data.length; i++) {
            if (moc.data[i].Id === id) {
              moc.data.splice(i, 1);
            }
          }

          if(moc.data.length == 0){
              moc.isPresent = false;
          }
        this.setState({
            moc: moc
        });
    }

    render() {
        const {
            getFieldDecorator
        } = this.props;

        const {
            moc
        } = this.state;

        return (
            <div>
                {!moc.isPresent ?
                    <Button className="card-button-style" type={Constants.primaryButton} ghost onClick={() => this.AddMocButton()}>
                        <Icon type={Constants.addIcon} />
                        Add MOC
                    </Button>
                    :
                    <Card className="moc-card-style">
                        {moc.data.map(i => (
                            <Row key={makeId()}>
                                <Col span={11}>
                                    <Form.Item label="Select MOC">
                                        {getFieldDecorator(`item1${i.Id}`, {
                                            rules: [{ required: true, message: 'this is required' }],
                                        })(
                                            <Input />
                                        )}
                                    </Form.Item>
                                </Col>

                                <Col span={11}>
                                    <Form.Item label="Recovery (%)">
                                        {getFieldDecorator(`item2${i.Id}`, {
                                            rules: [{ validator: this.checkPercentage, required: true }],
                                        })(
                                            <Input type='number' />
                                        )}
                                    </Form.Item>
                                </Col>

                                <Col span={2}> 
                                    <Button className="mocRemoveStyle" onClick={() => this.RemoveMocButton(i.Id)}> 
                                        <Icon type={Constants.closeIcon} /> 
                                    </Button>
                                </Col>
                            </Row>
                        ))}

                        <Row>
                            <Button className="card-button-style" type={Constants.primaryButton} onClick={() => this.AddAnotherButton()}>
                                <Icon type={Constants.addIcon} />
                                Add another or Create a new MOC
                            </Button>
                        </Row>

                    </Card>
                }

            </div>
        );
    }
}
