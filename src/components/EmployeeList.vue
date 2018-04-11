
<template>
  <Page>
    <ActionBar class="action-bar" title="Employee List Page">
        <NavigationButton text="Go Back" 
                          android.systemIcon="ic_menu_back" 
                          @tap="$navigateBack()" />
    </ActionBar>

    <ListView for="item in listOfItems" @itemTap="testFunc">
      <v-template>
        <Label :text="item.text" class="employee-item" />
      </v-template>

      <v-template if="$odd">
        <Label :text="item.text" color="red" class="employee-item-margin" />
      </v-template>
    </ListView>     
  </Page>
</template>


<script>
export default {  
  methods: {
    testFunc: function(){
      alert("its works");
    },

    onItemTap() {
        const vm = this;
        vm.$root.test();
    }
  },
data() {
      return {
        listOfItems: [
            { text: 'First1' }, 
            { text: 'Second' },
            { text: 'Third' },
            { text: 'Fourth' }
        ]
      }
  }
}
</script>

<style scoped>
  .employee-item {
    margin: 20;
    color: green;
  }

  .employee-item-margin {
      margin: 20;
  }
</style>
