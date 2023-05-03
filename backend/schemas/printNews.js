
export default {
    name: 'printnews',
    title: 'Print News',
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
        name: 'dop',
        title: 'DateOfPublish',
        type: 'date',
        options: {
          dateFormat: 'YYYY-MM-DD',
          calendarTodayLabel: 'Today',
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
  
      {
        name: 'source',
        title: 'Source',
        type: 'string',
      },
      {
        name: 'mainimg',
        title: 'mainImg',
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
      
    ],
  }
  