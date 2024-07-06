import { useState, useEffect } from 'react';
import './../App.css';
import { db,auth } from '../firebase-congif.js';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';

export const Home = ({isAuth}) => {
    const [postList, setPostList] = useState([]);

    const postCollectionRef = collection(db, "posts");

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
        setPostList((prev) => prev.filter((post) => post.id !== id));
    };

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postCollectionRef);
            setPostList(data.docs.map((doc) => (
                { ...doc.data(), id: doc.id })
            ));
        };
        getPosts();
    }, []); // Empty dependency array ensures this runs once when the component mounts

    return (
        <div className='homePage'>
            {postList.map((post) => (
                <div key={post.id} className="post">
                    <div className="postHeader">
                        <div className="title">
                            <h1>{post.Title}</h1>
                        </div>

                        {isAuth && post.auth.id === auth.currentUse.uui && <div className="deletePost">
                            <button onClick={() => deletePost(post.id)}>🗑️</button>
                        </div>}
                    </div>

                    <div className="postTextContainer">
                        {post.Posttext}
                    </div>
                    <h3>@{post.author.name}</h3>
                </div>
            ))}
        </div>
    );
};
