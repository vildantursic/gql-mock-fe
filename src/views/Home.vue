<template>
  <div class="home">
    <HelloWorld msg="GraphQL Demo"/>
    <ApolloExample />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import ApolloExample from '@/components/ApolloExample.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    ApolloExample,
  },
};
</script>
