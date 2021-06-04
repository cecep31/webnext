import Header from "../components/header";
import React, { Component } from "react";
import axios from "axios";
import Contentpost from '../components/contentspost'

class post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.setState({
        post: res.data,
      });
    });
  }

  render() {
    return (
      <div className="font-sans">
        <Header key="1" />
        <div className="max-w-7xl m-8 sm:m-8 shadow-md sm:p-3 mx-auto border bg-green-200 rounded-md">
        <div className="max-w-7xl mx-auto font-bold sm:ml-8 text-2xl mb-8">POST</div>
          {this.state.post.map((post) => {
            return (
              <Contentpost title={post.title} key={post.id} body={post.body}/>
              
            )
          })}
        </div>
      </div>
    );
  }
}

export default post;
