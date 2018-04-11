
<template>
  <Page>
    <ActionBar class="action-bar" title="List Page"></ActionBar>

    <ListView for="item in listOfItems" @itemTap="onItemTap">
      <v-template>
        <Label :text="item.text" class="item" />
      </v-template>

      <v-template if="$odd">
        <Label :text="item.text" color="red" class="item-margin" />
      </v-template>
    </ListView>     
  </Page>
</template>

<script>
//--------------------- ROOT ACCESS ISSUE
//--------------------- vm.$root.test() cant access, because not update dist folder
//--------------------- so it must clean and re-run with npm.
export default {  
  methods: {
    onItemTap() {
        const vm = this;
        vm.$root.test();
    }
  },

  data() {
      return {
        listOfItems: [
            { text: 'First' }, 
            { text: 'Second' },
            { text: 'Third' },
            { text: 'Fourth' }
        ]
      }
  }
}
</script>

<style scoped>
  .item {
    margin: 20;
    color: green;
  }

  .item-margin {
      margin: 20;
  }
</style>
