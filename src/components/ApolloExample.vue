<template>
  <div class="apollo-example">
    <!-- Cute tiny form -->

    <ApolloMutation
      :mutation="require('../graphql/AddUser.gql')"
      :variables="{
        input: {
          name: newUser.name,
          surname: newUser.surname,
          age: +newUser.age
        },
      }"
      class="form"
      @done="newUser = { name: '', surname: '', age: null}"
    >
      <template slot-scope="{ mutate }">
        <form v-on:submit.prevent="formValid && mutate()">
          <label for="field-name" class="label">Name</label>
          <input
            v-model="newUser.name"
            placeholder="Type a name"
            class="input"
            id="field-name"
          >

          <label for="field-surname" class="label">Surname</label>
          <input
            v-model="newUser.surname"
            placeholder="Type a surname"
            class="input"
            id="field-surname"
          >

          <label for="field-age" class="label">Age</label>
          <input
            v-model="newUser.age"
            placeholder="Type an age"
            class="input"
            type="number"
            id="field-age"
          >

          <label for="btn" class="label"></label>
          <button class="button" type="submit">Submit</button>
        </form>
      </template>
    </ApolloMutation>


    <!-- Apollo watched Graphql query -->
    <ApolloQuery
      :query="require('../graphql/Users.gql')"
    >
      <ApolloSubscribeToMore
        :document="require('../graphql/UserAdded.gql')"
        :update-query="onUserAdded"
      />

      <div slot-scope="{ result: { data } }">
        <template v-if="data">
          <div
            v-for="user of data.users"
            :key="user.id"
            class="user"
          >
            {{ user.name }}
            {{ user.surname }}
            {{ user.age }}
          </div>
        </template>
      </div>
    </ApolloQuery>
  </div>
</template>

<script>
import MEETUPS from '../graphql/Meetups.gql';
import USERS from '../graphql/Users.gql';

export default {
  data() {
    return {
      newUser: {
        name: '',
        surname: '',
        age: null,
      },
    };
  },

  apollo: {
    meetups: MEETUPS,
    users: USERS,
  },

  computed: {
    formValid() {
      return this.newUser;
    },
  },

  methods: {
    onUserAdded(previousResult, { subscriptionData }) {
      return {
        users: [
          ...previousResult.users,
          subscriptionData.data.userAdded,
        ],
      };
    },
  },
};
</script>

<style scoped>
.form,
.input,
.button,
.apollo,
.meetup {
  padding: 12px;
}

label {
  display: block;
  margin-bottom: 6px;
}

.input {
  font-family: inherit;
  font-size: inherit;
  border: solid 2px #ccc;
  border-radius: 3px;
}

.button {
  font-family: inherit;
  font-size: inherit;
  border: solid 2px #2196F3;
  color: white;
  border-radius: 3px;
  background: #2196F3;
}

.error {
  color: red;
}
</style>
