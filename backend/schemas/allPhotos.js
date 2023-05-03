export default {
  name: 'allphotos',
  title: 'AllPhotos',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      name: 'caption',
      title: 'ImgCaption',
      type: 'string',
    },
    {
      name: 'img',
      title: 'Image',
      type: 'image',
    },
    
  ],
}
