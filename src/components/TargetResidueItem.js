import React, { Component } from 'react';
import { AnalyticalMethodTypes } from '../redux/filterType';
import ResidueTemplate1 from "./ResidueTemplate1"
export default class TargetResidueItem extends Component {

    //   componentDidMount() {
    //     // this.props.selectTargetResidue(AnalyticalMethodTypes.Endotoxin);
    //     // this.props.ageChange({age:22, tweet:"send out a age change tweet"});
    //     // this.props.ageChange({age:25, tweet:"send out a age change tweet, yes again!!"});
    //   }

    render() {
        const {
            currentAnalyticalMethod,
            getFieldDecorator
        } = this.props;

        return (
            <div>
                {(currentAnalyticalMethod.targetMethod === AnalyticalMethodTypes.API) ?
                    <ResidueTemplate1 getFieldDecorator={getFieldDecorator} />
                    : null
                }

                {(currentAnalyticalMethod.targetMethod === AnalyticalMethodTypes.CleaningAgent) ?
                    <ResidueTemplate1 getFieldDecorator={getFieldDecorator}/>
                    : null
                }

                {(currentAnalyticalMethod.targetMethod === AnalyticalMethodTypes.Bioburden) ?
                    <div>
                        component2
                    </div> : null
                }

                {(currentAnalyticalMethod.targetMethod === AnalyticalMethodTypes.Endotoxin) ?
                    <div>
                        component2.2
                    </div> : null
                }
            </div>
        );
    }
}


