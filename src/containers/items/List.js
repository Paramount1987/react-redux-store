import React, { Component } from "react";
import PropTypes from "prop-types";
import {FormattedMessage} from 'react-intl';
import { connect } from "react-redux";

import Item from "./Item";

class List extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const itemsCount = this.props.items.length;

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="">
                        {
                            itemsCount ?
                                <h4> <FormattedMessage id="app.title" /></h4>: null
                        }
                    </div>
                    <ul className="list-group">
                        {
                            this.props.items.map((item, index) => {
                                return (
                                        <li key={index} className="list-group-item justify-content-between">
                                            <Item  item={item} index={index} onClickShow={this.onClickShow}/>
                                        </li>
                                    )
                            })
                        }
                    </ul>

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state.items,
        lang: state.locale.lang
    };
}

List.propTypes = {
    items: PropTypes.array.isRequired,
    lang: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(List);
