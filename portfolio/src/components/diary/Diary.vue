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
                <v-btn>Add <v-icon right>mdi-plus</v-icon> </v-btn>
            </v-col>
        </v-row>
        <!-- entries row -->

    </v-col>
</template>

<script>
export default {

}
</script>

<style>

</style>