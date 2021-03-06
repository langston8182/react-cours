import React, {Component} from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText:"",
            placeHolder:"Tapez votre film",
            intervalBeforeRequest:5000,
            lockRequest: false
        };
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8 input-group">
                    <input type="text" className="form-control input-lg" onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder}/>
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" onClick={this.handleOnClick.bind(this)}>Go</button>
                    </span>
                </div>
            </div>
        )
    }

    handleOnClick(event) {
        this.search();
    }

    handleChange(event) {
        this.setState({searchText:event.target.value});
        if (!this.state.lockRequest) {
            this.setState({lockRequest: true});
            setTimeout(() => {
                this.search();
            }, this.state.intervalBeforeRequest);
        }
    }

    search() {
        this.props.callback(this.state.searchText);
        this.setState({lockRequest: false});
    }
}

export default SearchBar;