import GraphQLJSON from 'graphql-type-json';
import shortid from 'shortid';


export default {
  JSON: GraphQLJSON,

  Counter: {
    countStr: counter => `Current count: ${counter.count}`,
  },


  Query: {
    meetups: (root, args, { db }) => db.get('meetups').value(),
    users: (root, args, { db }) => db.get('users').value(),
    votes: (root, args, { db }) => db.get('votes').value(),
  },

  Mutation: {
    addMeetup: (root, { input }, { pubsub, db }) => {
      const meetup = {
        _id: shortid.generate(),
        title: input.title,
        description: input.description,
      };

      db
        .get('meetups')
        .push(meetup)
        .last()
        .write();

      pubsub.publish('meetups', { meetupAdded: meetup });

      return meetup;
    },
    addUser: (root, { input }, { pubsub, db }) => {
      const user = {
        _id: shortid.generate(),
        name: input.name,
        surname: input.surname,
        age: input.age,
      };

      db
        .get('users')
        .push(user)
        .last()
        .write();

      pubsub.publish('users', { userAdded: user });

      return user;
    },
    addVote: (root, { input }, { pubsub, db }) => {
      const vote = {
        _id: shortid.generate(),
        status: input.status,
      };

      db
        .get('votes')
        .push(vote)
        .last()
        .write();

      pubsub.publish('votes', { voteAdded: vote });

      return vote;
    },
    votesCleared: (root, args, { pubsub, db }) => {
      db
        .get('votes')
        .write([]);

      pubsub.publish('votesCleared', { voteAdded: { votesCleared: { status: true } } });

      return [];
    },
  },

  Subscription: {
    mySub: {
      subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('hey'),
    },
    counter: {
      subscribe: (parent, args, { pubsub }) => {
        const channel = Math.random().toString(36).substring(2, 15); // random channel name
        let count = 0;
        setInterval(() => pubsub.publish(
          channel,
          {
            // eslint-disable-next-line no-plusplus
            counter: { count: count++ },
          },
        ), 2000);
        return pubsub.asyncIterator(channel);
      },
    },

    meetupAdded: {
      subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('meetups'),
    },
    userAdded: {
      subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('users'),
    },
    voteAdded: {
      subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('votes'),
    },
    votesCleared: {
      subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('votesCleared'),
    },
  },
};
