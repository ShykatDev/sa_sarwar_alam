export default {
  name: 'allvideos',
  title: 'AllVideos',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
    {
        name: 'dop',
        title: 'Date',
        type: 'date',
      },
    {
      name: 'desc',
      title: 'VideoCaption',
      type: 'string',
    },
    {
      name: 'thumb',
      title: 'Thumbnail',
      type: 'image',
    },
    {
      name: 'url',
      title: 'YoutubeUrl',
      type: 'string',
    },
  ],
}
