export default {
  name: 'videonews',
  title: 'Video News',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      name: 'dop',
      title: 'DateOfPublish',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'thumb',
      title: 'mainImg',
      type: 'image',
    },
    {
      name: 'url',
      title: 'Link',
      type: 'string',
    },
  ],
}
