<template>
  <div class="d-flex justify-space-around">
    <v-menu>
      <template #activator="{ props }">
        <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>
        <!-- <v-btn v-bind="props"> <v-app-bar-nav-icon></v-app-bar-nav-icon> </v-btn> -->
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu activator="#menu-activator">
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Home Page" },
      { title: "Unknown UPCs" },
      { title: "Unpaid UPCs" },
      { title: "To-Do List" },
      { title: "Manage UPC Info" },
      { title: "Manage Billing Rules" },
    ],
  }),
};
</script>
