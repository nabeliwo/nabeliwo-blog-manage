const Joi = require('joi');
const ObjectID = require('mongodb').ObjectID;

module.exports = db => {
  return [
    {
      path: '/api/users/',
      method: 'GET',
      handler: (request, reply) => {
        const collection = db.collection('users');

        collection.find({}).toArray((err, users) => {
          if (err) {
            throw err;
          }

          reply(users);
        });
      }
    },
    {
      path: '/api/users/{id}/',
      method: 'GET',
      handler: (request, reply) => {
        const collection = db.collection('users');

        collection.find({ _id: ObjectID(request.params.id) }).toArray((err, user) => {
          if (err) {
            throw err;
          }

          reply(user);
        });
      }
    },
    {
      path: '/api/users/',
      method: 'POST',
      config: {
        handler: (request, reply) => {
          const collection = db.collection('users');
          const user = {
            login: request.payload.login,
            pass: request.payload.pass,
            email: request.payload.email,
            display_name: request.payload.display_name || request.payload.login
          };

          collection.insert(user, (err, result) => {
            if (err) {
              throw err;
            }

            reply(result);
          });
        },
        validate: {
          payload: {
            login: Joi.string().required(),
            pass: Joi.string().required(),
            email: Joi.string().required()
          }
        }
      }
    }
  ];
};
