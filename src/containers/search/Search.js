import React, { Component } from "react";
import PropTypes from "prop-types";
import {FormattedMessage, intlShape, injectIntl} from 'react-intl';
import { connect } from "react-redux";
import { isValid, dateToday, validateDate } from "../../utils/apiUtils";
import { addItem } from "../../actions/items";

import "./form.css";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formHidden: false
        };

        this.addItem = this.addItem.bind(this);
        this.onClickShowForm = this.onClickShowForm.bind(this);
    }

    componentDidMount(){
        this.refs.date.setAttribute("min", dateToday());
    }

    onClickShowForm(){
        this.clearForm();
        this.setState({formHidden: false});
    }

    onChangeInput(ref){
        let input  = this.refs[ref];

        if(input.value){
            input.classList.remove('error-input');
        }

        if(ref === "date"){
           input.value = validateDate(input.value);
        }
    }

    clearForm(){
        for(let key in this.refs){
            this.refs[key].value = "";
        }
    }


    addItem(e){
        if(!isValid(this.refs)) return;
        e.preventDefault();

        this.props.dispatch(addItem({
            name: this.refs.name.value,
            count: this.refs.count.value,
            price: this.refs.price.value,
            date: this.refs.date.value ? this.refs.date.value : ''
        }));
        this.setState({formHidden: true});
    }

    render() {
        const {messages} = this.props.intl;

        return (
            <div className="row">
                <div className={"col-md-12 "  + (!this.state.formHidden ? 'display-none' : '')}>
                    <FormattedMessage id="form.success" />
                    <div>
                        <button
                            className="btn btn-success"
                            onClick={this.onClickShowForm}>
                            <FormattedMessage id="item.addProduct" />
                        </button>
                    </div>
                </div>
                <div className={"col-md-12 "  + (this.state.formHidden ? 'display-none' : '')}>
                    <form onSubmit={this.addItem}
                          noValidate
                         >
                        <div className="form-group">
                            <input type="text"
                                   className="form-control"
                                   maxLength="128"
                                   ref="name"
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
                                   required
                                   placeholder={ messages.placeholderPrice }
                                   onChange={() => this.onChangeInput('price') }
                            />
                        </div>
                        <div className="form-group">
                            <input type="date"
                                   className="form-control"
                                   ref="date"
                                   placeholder={ messages.placeholderDate }
                                   onChange={() => this.onChangeInput('date')}
                            />
                        </div>
                    </form>
                    <button onClick={this.addItem} className="btn btn-success" style={{marginLeft: "10px"}}>
                        <FormattedMessage id="item.add" />
                    </button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.items,
        lang: state.locale.lang
    };
}

SearchBar.propTypes = {
  items: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
  lang: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

SearchBar.contextTypes = {
  store: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(injectIntl(SearchBar));
