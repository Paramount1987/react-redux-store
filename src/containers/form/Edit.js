import React, { Component } from "react";
import PropTypes from "prop-types";
import {FormattedMessage, intlShape, injectIntl} from 'react-intl';
import { connect } from "react-redux";

import { addItem, updateItem } from "../../actions/items";
import { isValid, dateToday,  validateDate } from "../../utils/apiUtils";

class FormEdit extends Component {
    constructor(props) {
        super(props);

        const {name, count,price,date} = this.props.item;

        this.state = { name, count, price, date };

        this.onClickEdit = this.onClickEdit.bind(this);
    }

    componentDidMount(){
        this.refs.date.setAttribute("min", dateToday());
    }

    onChangeInput(ref){
        let input  = this.refs[ref];
        let change = {};
        change[ref]= input.value;

        if(input.value){
            input.classList.remove('error-input');
        }

        if(ref === "date"){
            change[ref]= validateDate(input.value);
        }

        this.setState(change);
    }


    onClickEdit(e){
        if(!isValid(this.refs)) return;
        e.preventDefault();

        this.props.dispatch(updateItem({
            name: this.refs.name.value,
            count: this.refs.count.value,
            price: this.refs.price.value,
            date: this.refs.date.value ? this.refs.date.value : ''
        }, this.props.index));

        this.setState({formHidden: true}, ()=>{
            this.props.onClickBack()
        });
    }

    render() {
        const {messages} = this.props.intl;

        return (
            <div className="form-edit">
                    <form onSubmit={this.onClickEdit}
                          noValidate
                    >
                        <div className="form-group">
                            <input type="text"
                                   className="form-control"
                                   maxLength="128"
                                   ref="name"
                                   value={this.state.name}
                                   required
                                   placeholder={ messages.placeholderName }
                                   onChange={() => this.onChangeInput('name') }
                            />
                        </div>
                        <div className="form-group">
                            <input type="number"
                                   className="form-control"
                                   min="1"
                                   ref="count"
                                   value={this.state.count}
                                   required
                                   placeholder={ messages.placeholderCount }
                                   onChange={() => this.onChangeInput('count') }
                            />
                        </div>
                        <div className="form-group">
                            <input type="number"
                                   className="form-control"
                                   min="0"
                                   step="0.01"
                                   ref="price"
                                   value={this.state.price}
                                   required
                                   placeholder={ messages.placeholderPrice }
                                   onChange={() => this.onChangeInput('price') }
                            />
                        </div>
                        <div className="form-group">
                            <input type="date"
                                   className="form-control"
                                   ref="date"
                                   value={this.state.date}
                                   placeholder={ messages.placeholderDate }
                                   onChange={() => this.onChangeInput('date')}
                            />
                        </div>
                    </form>
                    <button onClick={this.onClickEdit} className="btn btn-success">
                        <FormattedMessage id="item.save" />
                    </button>
                    <button onClick={this.props.onClickBack} className="btn btn-danger" style={{marginLeft: "10px"}}>
                        <FormattedMessage id="item.cancel" />
                    </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        lang: state.locale.lang
    };
}

export default connect(mapStateToProps)(injectIntl(FormEdit));
