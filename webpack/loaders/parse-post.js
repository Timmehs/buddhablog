var yaml = require('js-yaml')

module.exports = function parsePost(rawString) {
  const splitContent = rawString.split('----\n')
  const data = yaml.safeLoad(splitContent[0])
  const tags = (data.tags && data.tags.split(',')) || null

  return {
    ...data,
    tags,
    markdown: splitContent.slice(1).join('')
  }
}
