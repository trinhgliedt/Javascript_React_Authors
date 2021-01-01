import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import Form from "../components/Form";


const EditAuthor = (props) => {
    const [author, setAuthor] = useState({});
    const {id} = props;
    const [errors, setErrors] = useState(null);
    
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors/" + id)
            .then((res) => {
                console.log(res.data);
                setAuthor(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);
    console.log("author name: ", author.name);

    function updateAuthor (editedAuthor) {
        axios.put("http://localhost:8000/api/authors/"+id, editedAuthor)
        .then(res => {
            navigate("/authors");
        })
        .catch((err) => {
            console.error(err.response);
            setErrors(err.response.data.errors);
        });
    };


    return (
        <div className="container">
            <div className="row text-left">
                <div className="col text-left">
                    <h2>Favorite authors</h2>
                    <Link to="/authors">Home</Link>
                    <p className="mt-3 mb-1">Edit this author:</p>
                </div>
            </div>
            <div className="col-3 p-3 border">
                <Form className="ml-4" onSubmitProp={updateAuthor} initialName= {author.name} errors={errors}/>
            </div>
        </div>
    )

};

export default EditAuthor;

