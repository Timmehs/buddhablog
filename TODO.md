### TODO:
* [ ] Move this to Github project board
* [ ] Upgrade to React 16
* [ ] Separate out a development branch.
 - Since personal github pages deploy off of master branch, I'd like to keep the footprint as small as possible
 - To do this I can work in a development branch containing src folder
 - Add a deploy script that pushes just the /dist folder to `master`
  - see discussion: https://gist.github.com/cobyism/4730490
* [ ] Leverage pre-rendering, ala server-side rendering:
  * See [ReactDOMServer.renderStaticMarkup](https://facebook.github.io/react/docs/react-dom-server.html)
  * http://braddenver.com/blog/2015/react-static-site.html
  * http://jxnblk.com/writing/posts/static-site-generation-with-react-and-webpack/
* [ ] Blog:
  - parse MD files in a `/posts` directory into a blog with
    - date sorting
    - tag searching
