 <template>
    <v-col class="red mt-12" offset=2 cols=8>
        <!-- title row -->
        <v-row justify="center">
            <v-col class="blue" cols=4>
                <div class="display-1 text-center">My Diary</div>
            </v-col>
        </v-row>
        <!-- subtitle row -->
        <v-row>
            <v-col class="green" cols=6>
                <div class="ml-4"><h2>Entries</h2></div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="yellow" cols=2>
                <Entry>Add <v-icon right>mdi-plus</v-icon></Entry>
            </v-col>
        </v-row>
        <!-- entries row -->
        <v-row>
            <v-col>
                <v-card>
                    <v-list>
                        <v-list-item
                            v-for="(entry, i) in getEntries"
                            :key="i"
                        >
                            <v-list-item-content>
                                <Entry v-bind:active="true" v-bind:entry="entry">
                                    <v-list-item-title class="text-left" v-text="entry.title">
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