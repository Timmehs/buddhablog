var yaml = require('js-yaml')

// Post Loader
// Convert post.md file to object { date, markdown, title, tags }
function parsePost(rawString) {
  const splitContent = rawString.split('----\n')
  const data = yaml.safeLoad(splitContent[0])
  const tags = Object.assign(...data.tags.split(',').map(k => ({
    [k]: true
  })))

  return {
    ...data,
    tags,
    markdown: splitContent.slice(1).join('')
  }
}

module.exports = function (source) {
  return 'module.exports = ' + JSON.stringify(parsePost(source))
}
