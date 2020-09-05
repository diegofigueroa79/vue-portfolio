 <template>
    <v-col 
        class="purple lighten-4 mt-12 rounded-xl elevation-10" 
        offset=2 
        cols=8>
        <!-- title row -->
        <v-row justify="center">
            <v-col class="purple--text" cols=4>
                <div class="display-1 text-center">My Diary</div>
            </v-col>
        </v-row>
        <!-- subtitle row -->
        <v-row>
            <v-col cols=6>
                <div class="purple--text text--lighten-1 ml-4">
                    <h2>My Entries</h2>
                </div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols=2>
                <Entry>Add <v-icon right>mdi-plus</v-icon></Entry>
            </v-col>
        </v-row>
        <!-- entries row -->
        <v-row>
            <v-col>
                <v-card>
                    <v-list class="purple lighten-5">
                        <v-list-item
                            v-for="(entry, i) in getEntries"
                            :key="i"
                        >
                            <v-list-item-content>
                                <Entry v-bind:active="true" v-bind:entry="entry">
                                    <v-list-item-title
                                        class="text-left purple--text" 
                                    >
                                        {{ entry.title }}
                                    </v-list-item-title>
                                </Entry>
                            </v-list-item-content>
                            <v-list-item-icon>
                                <v-btn v-on:click.stop="deleteEntry(i)" icon><v-icon>mdi-delete</v-icon></v-btn>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
import Entry from './Entry'

export default {
    name: 'Diary',
    components: {
        Entry
    },
    data: () => ({
    }),
    computed: {
        getEntries() {
            return this.$store.getters['diary/getEntries']
        },
    },
    methods: {
        deleteEntry(i) {
            this.$store.commit('diary/deleteEntry', {
                index: i
            })
        }
    }

}
</script>

<style>

</style>