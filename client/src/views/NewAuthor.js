import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import Form from "../components/Form";



const NewAuthor = (props) => {
    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);
    function createAuthor (newAuthor) {
        axios.post("http://localhost:8000/api/authors", newAuthor)
        .then(res => {
            // console.log("in .then: res.data: ",res.data);
            setAuthors(...authors, res.data);
            navigate("/authors");
        })
        .catch((err) => {
            setErrors(err.response.data.errors);
            console.error(err.response);
        });
    };


    return (
        <div className="container">
            <div className="row text-left">
                <div className="col text-left">
                    <h2>Favorite authors</h2>
                    <Link to="/authors">Home</Link>
                    <p className="mt-3 mb-1">Add a new author:</p>
                </div>
            </div>
            <div className="col-3 p-3 border">
                <Form className="ml-4" onSubmitProp={createAuthor} initialName="" errors={errors}/>
            </div>
        </div>
    )

};

export default NewAuthor;

