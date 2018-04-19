import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li 
          key={book.title}
          onClick={() => this.props.selectBook(book)} 
          className="list-group-item"
        >{book.title}
        </li>
      );
    });
  }

  render() {
    return (  
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  //Props generating
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  //Passed result to reducer
  return bindActionCreators({ selectBook }, dispatch);
}

//Promote BookList from component to container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);