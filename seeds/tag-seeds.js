const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'country music',
  },
  {
    tag_name: 'indie music',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
  {
    tag_name: 'rap music',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
