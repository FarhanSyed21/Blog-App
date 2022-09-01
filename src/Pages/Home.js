import React, { useState, useEffect } from "react";
import { getDocs, collection, doc, deleteDoc, } from "firebase/firestore";
import { auth, database } from "../firebase-config"
import { async } from "@firebase/util";


function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(database, "posts")

  useEffect(() => {
    const getPosts = async() => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) =>({ ...doc.data(), id: doc.id  })));
    };
    getPosts();
  })

  const deletePost = async (id) => {
    const postDoc = doc(database, "posts", id )
    await deleteDoc(postDoc)
  }

  return ( 
    <div className="homePage" > 
      { postLists.map((post) => {
        return (
          <div className="post" >
            <div className="postHeader" >
              <div className="title"> 
                <h1> { post.title } </h1> 
              </div>
              <div className="deletePost" >
                {isAuth && post.author.id === auth.currentUser.uid && (<button 
                  onClick={() => {
                    deletePost(post.id)
                  }}
                >
                  {" "}
                  &#128465;
                </button>
              )}
              </div>
            </div>
            <div className="postTextContainer" > { post.postText } </div>
            <h3>@{ post.author.name }</h3>
          </div>
        );
      })} 
    </div>
  );
}
export default Home;
