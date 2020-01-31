import React from 'react'
import HeroSmall from '../components/Layouts/HeroSmall'
import BlogPanel from '../components/Blog/BlogPanel'

const Blog = () => {
    return (
        <div>
            <HeroSmall heading={'Blog'} />
            <BlogPanel />
        </div>
    )
}


export default Blog