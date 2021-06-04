import React, { Component } from 'react'

class contentspost extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <div className="shadow-lg p-6 my-3 bg-gray-100 rounded-md">
                <a href="#" className="text-blue-700 text-xl font-bold uppercase">{this.props.title}</a>
                <div>{this.props.body}</div>
              </div>
            </div>
        )
    }
}

export default contentspost
