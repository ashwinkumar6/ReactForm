import React, { Component } from 'react';
import { Row, Col, Form, Input, Button, Icon, Card } from 'antd';
import { makeId } from '../utils';
import Constants from '../assets/Constants';
import ListViewItem from './ListViewItem';
import { MocTypes } from '../redux/filterType';
import { isItemInObj } from "../utils";
import formItemType from '../redux/formItemType'

export default class Moc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            moc: {
                isPresent: false,
                data: [],
                types: { ...MocTypes }
            },
            addNewMoc: {
                isOpen: false,
                text: null
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

    AddAnotherMocButton = () => {
        let moc = this.state.moc;

        moc.data.push({
            Id: makeId()
        });

        this.setState({
            moc: moc
        });
    }

    RemoveAnotherMocButton = (id) => {
        let moc = this.state.moc;
        for (var i = 0; i < moc.data.length; i++) {
            if (moc.data[i].Id === id) {
                moc.data.splice(i, 1);
            }
        }

        if (moc.data.length === 0) {
            moc.isPresent = false;
        }
        this.setState({
            moc: moc
        });
    }

    AddNewMocButton = () => {
        let addNewMoc = this.state.addNewMoc;
        if (!addNewMoc.isOpen) {
            addNewMoc.isOpen = true;

            this.setState({
                addNewMoc: addNewMoc
            });
        }
    }

    RemoveNewMocButton = () => {
        let addNewMoc = this.state.addNewMoc;
        if (addNewMoc.isOpen) {
            addNewMoc.isOpen = false;
            addNewMoc.text = null

            this.setState({
                addNewMoc: addNewMoc
            });
        }
    }

    handleNewMocItem = (value) => {
        let addNewMoc = this.state.addNewMoc;
        addNewMoc.text = value;
        this.setState({
            addNewMoc: addNewMoc
        });
    }

    AddNewMocToListButton = (value) => {
        let currentState = this.state;

        if (value.trim()) {
            if (isItemInObj(currentState.moc.types,value)) {
                alert("item already present");
                return;
            }

            currentState.addNewMoc.isOpen = false;
            currentState.addNewMoc.text = null;

            var formattedValue = value.replace(/ +/g, "");
            currentState.moc.types = {
                ...currentState.moc.types,
                [formattedValue] : value 
            }

            this.setState({
                moc: currentState.moc,
                addNewMoc: currentState.addNewMoc
            });
        }
    }

    ListViewItemOnSelect = () => {
        // To Do
    }

    render() {
        const {
            getFieldDecorator,
            type
        } = this.props;

        const {
            moc,
            addNewMoc
        } = this.state;

        return (
            <div>
                {!moc.isPresent ?
                    <Button className="card-button-style" type={Constants.primaryButton} ghost onClick={() => this.AddMocButton()}>
                        <Icon type={Constants.addIcon} />
                        Add MOC
                    </Button>
                    :
                    <Card className="moc-card-style" bordered={false}>
                        {moc.data.map((i, k) => (
                            <Row key={k}>
                                <Col span={12}>
                                    <ListViewItem
                                        getFieldDecorator={getFieldDecorator}
                                        listId={`${type}${formItemType.SelectMoc}${k}`}
                                        labelName="Select MOC"
                                        listItems={moc.types}
                                        onSelectAction={this.ListViewItemOnSelect} />
                                </Col>

                                <Col span={1}/>

                                <Col span={7}>
                                    <Form.Item label="Recovery (%)">
                                        {getFieldDecorator(`${type}${formItemType.MocRecoveryPercent}${k}`, {
                                            rules: [{ validator: this.checkPercentage, required: true }],
                                        })(
                                            <Input type='number' />
                                        )}
                                    </Form.Item>
                                </Col>

                                <Col span={1}/>

                                <Col span={3}>
                                    <Button className="mocButtonStyle" onClick={() => this.RemoveAnotherMocButton(i.Id)}>
                                        <Icon type={Constants.closeIcon} />
                                    </Button>
                                </Col>
                            </Row>
                        ))}

                        {addNewMoc.isOpen ?
                            <Row>
                                <Col span={18}>
                                    <h4 className="mocTextStyle">Add new MOC:</h4>
                                    <Input value={addNewMoc.text}
                                        onChange={({ target }) => this.handleNewMocItem(target.value)} />
                                </Col>

                                <Col span={3}>
                                    <Button className="newMocButtonStyle" onClick={() => this.AddNewMocToListButton(addNewMoc.text)}>
                                        <Icon type={Constants.checkIcon} />
                                    </Button>
                                </Col>

                                <Col span={3}>
                                    <Button className="newMocButtonStyle" onClick={() => this.RemoveNewMocButton()}>
                                        <Icon type={Constants.closeIcon} />
                                    </Button>
                                </Col>
                            </Row>
                            : null
                        }

                        <Row className="item-spacing">
                            <Col span={11}>
                                <Button className="card-button-style" type={Constants.primaryButton}
                                    onClick={() => this.AddAnotherMocButton()}>
                                    <Icon type={Constants.addIcon} />
                                    Add another
                                </Button>
                            </Col>

                            <Col span={2}>
                                <h3 className="horizontal-text-spacing">OR</h3>
                            </Col>

                            <Col span={11}>
                                <Button className="card-button-style" type={Constants.primaryButton}
                                    onClick={() => this.AddNewMocButton()}>
                                    Create a new MOC
                                </Button>
                            </Col>
                        </Row>

                    </Card>
                }

            </div>
        );
    }
}
