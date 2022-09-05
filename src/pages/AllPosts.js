import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Search from '../component/Search'

const AllPosts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((result) => {
                setPosts(result)
            }
        )
    }, [])

    const [search, setSearch] = useState('')
    const onSearchChange = (e) => {
        setSearch(e.target.value)
    }

    const filteredPosts = posts.filter(post => {
        return post.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <>
            <h1>All Posts</h1>
            <Search onSearchChange={onSearchChange}/>
            <div className="posts-list">
                {
                    filteredPosts.map(fPost => (
                        <div className="post" id={fPost.id} key={fPost.id}>
                            <h2><Link to={`/allPosts/${fPost.id}`}>{fPost.title}</Link></h2>
                            <p>{fPost.body}</p>
                        </div>
                    ))
                }
            
            

            </div>
            </>
    )
}

export default AllPosts
