import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListTerm from './ListTerm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      term: '',
      items: [],
      filteredItems: []
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
      let items = [...this.state.items, this.state.term]
    this.setState({
      term: '',
      items: items,
      initItems: items
    })
  }
  onChangeKeyword = (e) => {
    let keyword = e.target.value
      let filteredItems = this.state.items.filter(item  => {
          return item === keyword
      });

    if (keyword === '') {
        this.setState({
            items: this.state.initItems,
        })
    } else {
        this.setState({
            keyword: e.target.value,
            items : filteredItems,
        })
    }
  }
  onChangeTerm = (e) => {
    this.setState({term: e.target.value})
  }
  removeItem = (index, e) => {
      let filteredItems = this.state.items.filter(function (item, i) {
          return i !== index
      });
    this.setState({items: filteredItems, initItems: filteredItems})
  }
  render() {
    let keyword = this.state.keyword
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
          <form onSubmit={this.handleSubmit}>
              Search:<input type="text" onChange={this.onChangeKeyword}/> <br/>
              Term: <input type="text" onChange={this.onChangeTerm} value={this.state.term}/>
              <button>Submit</button>
          </form>
          List TERM:
          <ListTerm removeItem={this.removeItem} data={this.state.items}/>

          Keyword: {keyword}
      </div>
    );
  }
}

export default App;
