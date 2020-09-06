<template>
    <v-dialog
        v-model="dialog"
        class="mx-auto"
        width=500
        persistent
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
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog=false"
                    >close</v-btn>
                </v-card-actions>
            </template>
            <template v-else>
                <v-card-title>
                    <v-text-field 
                        label="Entry Title"
                        required
                        v-model="currentEntry.title"
                    ></v-text-field>
                </v-card-title>
                <v-card-text>
                    <v-textarea
                        filled
                        label="Entry"
                        required
                        v-model="currentEntry.text"
                    >
                    </v-textarea>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog=false"
                    >close</v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="addEntry"
                    >
                        add
                    </v-btn>
                </v-card-actions>
            </template>
        </v-card>

    </v-dialog>
</template>

<script>
export default {
    name: 'Entry',
    props: ['active', 'entry'],
    data: () => {
        return {
            dialog: false,
            currentEntry: {
                title: '',
                text: ''
            }
        }
    },
    methods: {
        addEntry() {
            let temp = {}
            temp = Object.assign(temp, this.currentEntry)
            this.currentEntry.title = ''
            this.currentEntry.text = ''
            this.$store.commit('diary/addEntry', {
                newEntry: temp
            });
            this.dialog = false;
        }
    }
}
</script>

<style>

</style>