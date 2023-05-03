export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'img',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'feedback',
      title: 'Feedback',
      type: 'text',
    },
  ],
}
