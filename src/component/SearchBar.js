import React from 'react';

class SearchBar extends React.Component{
    state = {term : ''};
    onFormSubmit = event =>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);

        //to Do make sure we callback from parent object
    }
    render(){
        return (<div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                     <label> Video Search </label>   
                    <input type="text"  value ={this.state.term} onChange={(event) => this.setState({term :event.target.value})}/>   
                    </div>
                </form>
            </div>
            );
    }
    
}

export default SearchBar;