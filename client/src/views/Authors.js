import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import DeleteButton from "../components/DeleteButton";

const Authors = (props) => {
    const [authors, setAuthors] = useState(null);
    
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res);
                setAuthors(res.data);

            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    };

    if (authors === null){return "Loading....";}

    return (
        <div className="container">
            <h2>Favorite authors</h2>
            <Link to="/authors/new">Add an author</Link>
            <p>We have quotes by:</p>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions available</th>
                    </tr>
                </thead>
                <tbody>
                {authors.map((author) => {
                    return (
                        <tr>
                            <td key={author._id}>{author.name}</td>
                            <td>
                                <Link to={`/authors/${author._id}/edit`}
                                className="btn btn-info mr-3">Edit</Link>
                                <DeleteButton authorId={author._id} successCallback={() => removeFromDom(author._id)}/>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>

        </div>
    )

};
export default Authors;

