import test from 'ava'
import parsePost from '../webpack/loaders/parse-post'

/**
 * This tests the parsePost function which does the principal work in
 * the post-loader
 */

test('It converts a post file into an object', t => {
  const post = `
    title: "A test post"
    tags: blogging,framework
    date: 2019-04-14T00:38:29Z
    header: "test-image.jpg"
    ----

    # Header text
  `
  const parsedPost = parsePost(post)
  t.is(parsedPost.markdown.trim(), '# Header text')
  t.deepEqual(parsedPost.date, new Date('2019-04-14T00:38:29Z'))
  t.is(parsedPost.header, 'test-image.jpg')
  t.deepEqual(parsedPost.tags, ['blogging', 'framework'])
})

test('It can handle a blank title', t => {
  const post = `
    title:
    tags: blogging,framework
    date: 2019-04-14T00:38:29Z
    header: "test-image.jpg"
    ----

    # Header text
  `
  const parsedPost = parsePost(post)
  t.is(parsedPost.title, null)
})

test('It can handle blank tags', t => {
  const post = `
    title: Blam
    tags:
    date: 2019-04-14T00:38:29Z
    header: "test-image.jpg"
    ----

    # Header text
  `
  const parsedPost = parsePost(post)
  t.is(parsedPost.tags, null)
})
