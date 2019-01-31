<template>
  <div class="about">
    <h1>Votes</h1>

    <!-- Apollo watched Graphql query -->
    <ApolloQuery
      :query="require('../graphql/NumOfVotes.gql')"
    >
      <ApolloSubscribeToMore
        :document="require('../graphql/VoteAdded.gql')"
        :update-query="onVoteAdded"
      />

      <div slot-scope="{ result: { data } }">
        <template v-if="data">
          <div class="vote-box">
            <div class="left">{{data.numOfVotes.left}}</div>
            <div class="right">{{data.numOfVotes.right}}</div>
          </div>
        </template>
      </div>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
  methods: {
    onVoteAdded(previousResult, { subscriptionData }) {
      console.log(previousResult)
      return {
        numOfVotes: {
          ...subscriptionData.data.voteAdded,
        },
      };
    },
  },
};
</script>
