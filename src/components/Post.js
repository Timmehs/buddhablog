import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import BlogTag from './BlogTag'
import { compiler } from 'markdown-to-jsx'
import formatDate from '../util/dateFormatter'

class Post extends Component {
  componentDidMount() {
    const node = findDOMNode(this)

    node.querySelectorAll('pre').forEach(el => {
      hljs.highlightBlock(el)
      hljs.lineNumbersBlock(el, {
        singleLine: true
      })
    })
  }
  render() {
    const { post } = this.props
    const headerImage = {
      backgroundImage: `url(${post.get('header')})`
    }
    return (
      <article className="post-body">
        <header className="left">
          <h2 className="post-body-title"> {post.get('title')} </h2>
          <strong className="post-date">{formatDate(post.get('date'))}</strong>
        </header>
        <p className="post-tags">
          {post
            .get('tags')
            .keySeq()
            .map(tag => (
              <BlogTag tagName={tag} key={tag} />
            ))}
        </p>
        <div className="post-header-image" style={headerImage} />
        {compiler(post.get('markdown'))}
      </article>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post
