import React, { Component } from "react";
import { removeItem } from "../../actions/items";
import {FormattedMessage} from 'react-intl';
import FormEdit from "../form/Edit";

import { connect } from "react-redux";
import "./list.css";

class Item extends Component {
    constructor(props){
        super(props);

        this.state = {
            formHidden: true
        };

        this.onClickHide = this.onClickHide.bind(this);
    }

    onClickHide(){
        this.setState({formHidden: true});
    }

    onClickRemove(){
        this.props.dispatch(removeItem(this.props.index));
    }

    onClickEdit(){
        this.setState({formHidden: false});
    }


    render(){
        const {name, count, price, date} = this.props.item;
        return (
            <div  style={{display: 'inline-block', marginRight: 5 + 'px'}}>
                <FormattedMessage id="placeholderName" />: {name} <hr />
                <FormattedMessage id="placeholderCount" />: {count} <hr />
                <FormattedMessage id="placeholderPrice" />: {price} <hr />
                <FormattedMessage id="placeholderDate" />: {date} <hr />
                <div>
                    <div>
                        <button onClick={() => this.onClickEdit() } className="btn btn-primary">
                            <FormattedMessage id="item.edit" />
                        </button>
                        <button onClick={() => this.onClickRemove() }
                                style={{marginLeft: 5 + 'px'}}
                                className="btn btn-danger">
                            <FormattedMessage id="item.remove" />
                        </button>
                    </div>
                </div>
                {
                    this.state.formHidden ? null :
                        <div className="form-edit__backdrop" style={{width: 100 + '%'}}>
                            <FormEdit
                                index={this.props.index}
                                item={this.props.item}
                                onClickBack={this.onClickHide} />
                        </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        lang: state.locale.lang
    };
}

export default connect(mapStateToProps)(Item);
