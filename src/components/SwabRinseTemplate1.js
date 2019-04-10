import React, { Component } from 'react';
import InputItem from '../components/InputItem'


export default class SwabRinseTemplate1 extends Component {
    render() {
        const {
            getFieldDecorator,
            type
        } = this.props;

        return (
            <div>
                <InputItem
                    getFieldDecorator={getFieldDecorator}
                    labelName="Method Used" />

                {type === "swab" ?
                    <InputItem
                        getFieldDecorator={getFieldDecorator}
                        labelName="Solvent Name" />
                    : null
                }

                <InputItem
                    getFieldDecorator={getFieldDecorator}
                    labelName="Default Recovery (%)" />
            </div>
        );
    }
}
