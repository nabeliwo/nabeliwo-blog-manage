module.exports = function() {
  return [
    {
      path: '/assets/{param*}',
      method: 'GET',
      handler: {
        directory: {
          path: 'public/assets'
        }
      }
    },
    {
      path: '/{param*}',
      method: 'GET',
      handler: (request, reply) => {
        reply.view('index', { title: 'nabeliwo blog' });
      }
    }
  ];
};
