import React, { Component } from "react";
import "./Classes.css";
import { FaSearch, FaStar } from "react-icons/lib/fa";
import { MdFilterList } from "react-icons/lib/md";

export default class Classes extends Component {
  render() {
    return (
      <div className="cl-container">
        <div className="cl-top-header">
          <h1 className="cl-title">on demand classes</h1>
          <FaSearch />
          <FaStar />
          <MdFilterList />
        </div>
      </div>
    );
  }
}
