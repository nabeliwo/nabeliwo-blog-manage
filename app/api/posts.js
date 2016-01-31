const Joi = require('joi');
const ObjectID = require('mongodb').ObjectID;

module.exports = db => {
  return [
    {
      path: '/api/posts/',
      method: 'GET',
      handler: (request, reply) => {
        const collection = db.collection('posts');

        collection.find({}).toArray((err, posts) => {
          if (err) {
            throw err;
          }

          reply(posts);
        });
      }
    },
    {
      path: '/api/posts/{id}/',
      method: 'GET',
      handler: (request, reply) => {
        const collection = db.collection('posts');

        collection.find({ _id: ObjectID(request.params.id) }).toArray((err, post) => {
          if (err) {
            throw err;
          }

          reply(post);
        });
      }
    },
    {
      path: '/api/posts/',
      method: 'POST',
      config: {
        handler: (request, reply) => {
          const collection = db.collection('posts');
          const payload = request.payload;

          const post = {
            author_id: payload.author_id,
            date: payload.date,
            content: payload.content,
            title: payload.title,
            is_published: payload.is_published,
            image_id: payload.image_id,
            type: payload.type,
            pv: payload.pv,
            taxonomys: payload.taxonomys
          };

          collection.insert(post, (err, result) => {
            if (err) {
              throw err;
            }

            reply(result);
          });
        },
        validate: {
          payload: {
            author_id: Joi.string().required(),
            date: Joi.date().required(),
            content: Joi.string().required(),
            title: Joi.string().required(),
            is_published: Joi.boolean().required(),
            image_id: Joi.string().required(),
            type: Joi.string().required(),
            pv: Joi.number().required(),
            taxonomys: Joi.array().required()
          }
        }
      }
    }
  ];
};
