<template>
  <div class="votes">
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
            <div class="box">{{data.numOfVotes.left}}</div>
            <div class="box">{{data.numOfVotes.right}}</div>
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
      return {
        numOfVotes: {
          ...subscriptionData.data.voteAdded,
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.votes {
  height: 100vh;
  background: black;
  color: white;

  .vote-box {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .box {
      border: solid 3px white;
      margin: 10px;
      padding: 5px;
      font-size: 25px;
      font-weight: bold;
    }
  }
}
</style>
