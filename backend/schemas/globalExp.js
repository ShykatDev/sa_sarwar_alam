export default {
  name: 'globalexp',
  title: 'Global Exposer',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'subheading',
      title: 'Sub Heading',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'mainImg',
      title: 'Main Image',
      type: 'image',
    },

    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          name: 'img1',
          title: 'Imgage1',
          type: 'image',
        },
        {
          name: 'img2',
          title: 'Imgage2',
          type: 'image',
        },
        {
          name: 'img3',
          title: 'Imgage3',
          type: 'image',
        },
      ],
    },

    {
      name: 'url',
      title: 'URL for video',
      type: 'string',
    },
  ],
}
