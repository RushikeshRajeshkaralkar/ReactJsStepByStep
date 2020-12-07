import React, { Component } from "react";

function ProEx(props) {
  console.log(props.name);
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
}

export default ProEx;
