export const schema = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    code: {
      type: 'string',
    },
    colums: {
      type: 'array',
      items: [
        {
          type: 'object',
          properties: {
            dataField: {
              type: 'string',
            },
            caption: {
              type: 'string',
            },
            dataType: {
              type: 'string',
            },
            format: {
              type: 'string',
            },
            alignment: {
              type: 'string',
            },
          },
        },
      ],
    },
  },
};
