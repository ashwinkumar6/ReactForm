import React, { Component } from 'react';
import { Form } from 'antd';
import InputItem from '../components/InputItem'
import ListViewItem from '../components/ListViewItem'
import { AnalyticalMethodTypes } from '../redux/filterType'
import TargetResidueItem from "../components/TargetResidueItem"
import { selectTargetResidue } from "../redux/dispatcher/targetResidueDispatcher"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class AnalyticalMethodForm extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        const {
            analyticalMethod,
            selectTargetResidue
        } = this.props;

        return (
            <Form className="form-style">
                <InputItem
                    getFieldDecorator={getFieldDecorator}
                    labelName="Analytical Method ID" />

                <ListViewItem
                    getFieldDecorator={getFieldDecorator}
                    labelName="Target Residue Type"
                    listItems={AnalyticalMethodTypes}
                    selectTargetResidue={selectTargetResidue} />

                <TargetResidueItem
                    getFieldDecorator={getFieldDecorator}
                    currentAnalyticalMethod={analyticalMethod} />

                <InputItem
                    getFieldDecorator={getFieldDecorator}
                    labelName="Reason" />
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'AnalyticalForm' })(AnalyticalMethodForm);

// export default WrappedNormalLoginForm;

const mapStateToProps = (store) => {
    return {
        analyticalMethod: store.analyticalMethodReducer,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectTargetResidue
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
