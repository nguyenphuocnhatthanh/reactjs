import React, { PureComponent } from 'react'

export default class ListTerm extends PureComponent {
    constructor(props) {
        super(props)
    }
    handleDelete = (index) => {
        this.props.removeItem(index)
    }
    render() {
        return (
            <ul>
                {this.props.data.map((item, i) =>
                    <li key={i}>{item}<button onClick={()=> this.handleDelete(i)}>Delete</button></li>
                )}
            </ul>
        );
    }
}