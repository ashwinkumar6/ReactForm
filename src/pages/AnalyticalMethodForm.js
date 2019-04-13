import React, { Component } from 'react';
import { Form, Button } from 'antd';
import InputItem from '../components/InputItem'
import ListViewItem from '../components/ListViewItem'
import { AnalyticalMethodTypes } from '../redux/filterType'
import TargetResidueItem from "../components/TargetResidueItem"
import { selectTargetResidue } from "../redux/dispatcher/targetResidueDispatcher"
import { submitFormData } from "../redux/dispatcher/formDataDispatcher"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import formItemType from "../redux/formItemType";

class AnalyticalMethodForm extends Component {

    hasErrors = (fieldsError) => {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
      }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let targetResidueType = (values.TargetResidueType[0]) ? values.TargetResidueType[0] : "None";
                this.props.submitFormData(values, targetResidueType);
                this.props.form.resetFields();
                this.props.selectTargetResidue("None");
              }
        });
    }

    render() {
        const { 
            getFieldDecorator,
            getFieldsError
         } = this.props.form;

        const {
            analyticalMethod,
            selectTargetResidue
        } = this.props;

        return (
            <Form className="form-style" onSubmit={this.handleSubmit}>
                <InputItem
                    getFieldDecorator={getFieldDecorator}
                    labelId = {formItemType.AnalyticalMethodID}
                    labelName="Analytical Method ID" />

                <ListViewItem
                    getFieldDecorator={getFieldDecorator}
                    labelName="Target Residue Type"
                    listId = {formItemType.TargetResidueType}
                    listItems={AnalyticalMethodTypes}
                    onSelectAction={selectTargetResidue} />

                <TargetResidueItem
                    getFieldDecorator={getFieldDecorator}
                    currentAnalyticalMethod={analyticalMethod} />

                <InputItem
                    getFieldDecorator={getFieldDecorator}
                    labelId = {formItemType.Reason}
                    labelName="Reason" />

                <Form.Item>
                    <Button type="primary" htmlType="submit"
                    disabled={this.hasErrors(getFieldsError())}>
                        Submit                        
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'AnalyticalForm' })(AnalyticalMethodForm);

// export default WrappedNormalLoginForm;

const mapStateToProps = (store) => {
    return {
        analyticalMethod: store.analyticalMethodReducer,
        formData: store.formDataReducer,        
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectTargetResidue,
        submitFormData
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
