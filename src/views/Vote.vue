<template>
  <div class="vote">
    <!-- Cute tiny form -->

    <ApolloMutation
      :mutation="require('../graphql/AddVote.gql')"
      :variables="{
        input: {
          status: left
        },
      }"
      class="form"
      @done="allowed = false"
    >
      <template slot-scope="{ mutate }">
        <form v-on:submit.prevent="mutate()">
          <button :disabled="!allowed"
                  :class="[allowed ? 'left' : 'disabled']" type="submit">LEFT</button>
        </form>
      </template>
    </ApolloMutation>

    <ApolloMutation
      :mutation="require('../graphql/AddVote.gql')"
      :variables="{
        input: {
          status: right
        },
      }"
      class="form"
      @done="allowed = false"
    >
      <template slot-scope="{ mutate }">
        <form v-on:submit.prevent="mutate()">
          <button :disabled="!allowed"
                  :class="[allowed ? 'right' : 'disabled']" type="submit">RIGHT</button>
        </form>
      </template>
    </ApolloMutation>


    <ApolloQuery class="hide"
      :query="require('../graphql/Votes.gql')"
    >
      <ApolloSubscribeToMore
        :document="require('../graphql/VotesCleared.gql')"
        :update-query="onVotesCleared"
      />
        <div slot-scope="{ result: { data } }">
          <template v-if="data">
          </template>
        </div>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allowed: true,
      left: true,
      right: false,
    };
  },

  methods: {
    onVotesCleared() {
      this.allowed = true;
    },
  },
};
</script>

<style scoped>
.hide {
  display: none;
}

.vote {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

button {
  display: block;
  width: 100px;
  height: 100px;
  font-size: 1.3em;
  font-weight: light;
  font-family: 'Trebuchet MS', sans-serif;
  text-transform: uppercase;
  text-align: center;
  line-height: 100px;
  letter-spacing: -1px;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}
.left {
  background: #2196F3;
  box-shadow: 0 0 0 0 rgba(#2196F3, .5);
}
.right {
  background: #F44336;
  box-shadow: 0 0 0 0 rgba(#F44336, .5);
}
.disabled {
  background: #9E9E9E;
  box-shadow: 0 0 0 0 rgba(#9E9E9E, .5);
}
</style>
