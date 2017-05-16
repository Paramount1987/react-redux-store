import React, { Component } from "react";
import { connect } from "react-redux";
import { changeLocale } from "../../actions/locale";


class SwitchLang extends Component {
    constructor(props){
        super(props);
        this.onChangeLocale = this.onChangeLocale.bind(this);
    }

    onChangeLocale(e){
        this.props.dispatch(changeLocale(e.target.innerText));
    }

    render() {
        const {messages} = this.props;
        const langArr = Object.keys(messages);

        return (
             <div className="">
                 {
                     langArr.map((lang, i)=> {
                         return (
                                 <button
                                     key={i}
                                     onClick={this.onChangeLocale}
                                     className="btn btn-primary">
                                     {lang}
                                 </button>
                             )
                     })
                 }
             </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state.locale
    };
}

export default connect(mapStateToProps)(SwitchLang);
