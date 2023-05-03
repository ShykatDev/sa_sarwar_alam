export default {
  name: 'blogs',
  title: 'Blogs',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      name: 'blogimg',
      title: 'BlogImg',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'dop',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'shortdesc',
      title: 'shortDesc',
      type: 'string',
    },
    {
      name: 'fulldesc',
      title: 'fullDesc',
      type: 'text',
    },
    {
      name: 'otherimg1',
      title: 'ExtraImg',
      type: 'image',
    },
    {
      name: 'otherimg2',
      title: 'ExtraImg',
      type: 'image',
    },
    {
      name: 'otherimg3',
      title: 'ExtraImg',
      type: 'image',
    },
    {
      name: 'link',
      title: 'VideoURL',
      type: 'string',
    },
  ],
}
