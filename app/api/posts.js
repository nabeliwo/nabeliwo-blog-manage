module.exports = db => {
  return [
    {
      path: '/api/posts/',
      method: 'GET',
      handler: (request, reply) => {
        reply('hello posts');
      }
    },
    {
      path: '/api/posts/foo/',
      method: 'GET',
      handler: (request, reply) => {
        reply('hello posts foo');
      }
    }
  ];
};
