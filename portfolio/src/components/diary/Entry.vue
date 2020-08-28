<template>
    <v-dialog
        v-model="dialog"
        width="500"
    >
        <template v-slot:activator="{on, attrs}">
            <v-btn
                v-bind="attrs"
                v-on="on"
                v-bind:text="active"
                v-bind:block="active"
            ><slot>Click Me</slot></v-btn>
        </template>

        <v-card>
            <template v-if="entry">
                <v-card-title>{{ entry.title }}</v-card-title>
                <v-card-text>{{ entry.text }}</v-card-text>
            </template>
            <template v-else>
                <v-card-title>Test</v-card-title>
                <v-card-text>test</v-card-text>
            </template>
        </v-card>

    </v-dialog>
</template>

<script>
export default {
    name: 'Entry',
    props: ['active', 'entry']
}
</script>

<style>

</style>