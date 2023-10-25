<template>
    <v-list density="compact">
        <slot nam="before" />
        <template
         v-for="(menu, key) in menus"
         :key="key"
        >
            <v-list-group v-if="menu.children?.length > 0">
                <template #activator="{ props }">
                    <v-list-item
                     :prepend-icon="menu.icon"
                     exact
                     v-bind="props"
                     :color="menu.color || '#FAFAFA'"
                    >
                        <v-list-item-title>{{ menu.title }}</v-list-item-title>
                    </v-list-item>
                </template>
                <v-list-item
                 v-for="(sub, i) in menu.children"
                 :key="i"
                 :to="sub.to"
                 :color="menu.color || '#FAFAFA'"
                 exact
                >
                    <v-list-item-title>{{ sub.title }}</v-list-item-title>
                </v-list-item>
            </v-list-group>
            <v-list-item
             v-else
             :color="menu.color || '#FAFAFA'"
             :to="menu.to"
             exact
            >
                <template #prepend>
                    <v-icon :color="menu.color || ''">
                        {{ menu.icon }}
                    </v-icon>
                </template>
                {{ menu.title }}
            </v-list-item>
        </template>
        <slot name="after" />
    </v-list>
</template>

<script lang="ts" setup>
import {PropType} from "vue";
import {MenuInterface} from "@/interfaces/MenuInterface";

defineProps({
    menus: {
        type: Array as PropType<MenuInterface[]>,
        required: true,
    },
})
</script>