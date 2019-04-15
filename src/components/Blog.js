import React from 'react'
import Post from './Post'
import * as blogPosts from '../../posts/*.md'
import { fromJS } from 'immutable'

const posts = fromJS(blogPosts)
const sortedPosts = posts.sortBy(p => {
  return -new Date(p.get('date'))
})

const Blog = props => {
  return (
    <div>
      {sortedPosts.valueSeq().map(post => (
        <Post post={post} key={post.get('title')} />
      ))}
    </div>
  )
}

export default Blog
