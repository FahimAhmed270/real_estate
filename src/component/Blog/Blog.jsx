import React from 'react'
import Back from '../common/Back'
import RecentCard from '../Home/Recent/RecentCard'
import img from '../image/about.jpg'

const Blog = () => {
  return (
    <>
        <section className="blog mb">
            <Back name='Blog' title='Blog Grid - Our Blogs' cover={img}/>
            <div className="container recent">
                <RecentCard/>
            </div>
        </section>
    </>
  )
}

export default Blog
