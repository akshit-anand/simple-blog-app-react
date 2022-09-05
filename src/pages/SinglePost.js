import React, {useState, useEffect} from 'react'

const SinglePost = ({ match }) => {
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
            .then(res => res.json())
            .then((result) => {
                setPost(result)
            }
        )
    }, [match.params.id])

    return (
        <>
            <div className="single-post">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
            </>
    )
}

export default SinglePost
