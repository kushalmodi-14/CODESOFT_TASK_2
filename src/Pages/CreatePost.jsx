// import React from 'react'
import { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import './../App.css'
import { db, auth } from '../firebase-congif';
import { useNavigate } from 'react-router-dom';

export const CreatePost = ({ isAuth }) => {

    const [Title, setTitle] = useState("");
    const [Posttext, setPosttext] = useState("");
    const navigate = useNavigate();

    const postCollectionRef = collection(db, "posts");

    const createPost = async () => {
        await addDoc(postCollectionRef, {
            Title,
            Posttext,
            author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid,
            }
        });
        navigate("/");
    }

    useEffect(() => {
        if (!isAuth) {
            alert("Plz login, then make post")
            navigate("/login");
        }
    }, [" "])


    return (
        <div className='createPostPage'>
            <div className="cpContainer">
                <h1>Create a Post </h1>

                <div className="inputGp">
                    <label >Title:- </label>
                    <input placeholder='Title....' onChange={(event) => setTitle(event.target.value)} />
                </div>

                <div className="inputGp">
                    <label >Post:- </label>
                    <textarea placeholder='Post....' onChange={(event) => setPosttext(event.target.value)} />

                </div>

                <button onClick={createPost}> Submit Post </button>
            </div>
        </div>
    )
}
