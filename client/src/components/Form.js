import React, { useState } from "react";
import { Link } from "@reach/router";


const Form = (props) => {
  const {initialName, onSubmitProp, errors} = props;
  const [name, setName] = useState(initialName);
  


  function onSubmitHandler(event) {
    event.preventDefault();
    onSubmitProp( {name} );
  }
  console.log("name: ", name, ", initialName: ", initialName);

  return (
    <div className="container">
        <form className="" onSubmit={onSubmitHandler}>
            <label className="row">Name:</label>
            <input 
              className="row"
              type = "text"
              value = {name}
              placeholder={initialName}
              onChange = {(e) => {setName(e.target.value)}}
            />
            {errors?.name && (
            <span className="text-danger">{errors.name?.message}</span>
          )}
            <p className="row text-white mt-3">
              <Link to="/authors" className="btn btn-info mr-3">Cancel</Link>
              <button className="btn btn-info">Submit</button>
            </p>
        </form>
        
    </div>

  );
};

export default Form;
