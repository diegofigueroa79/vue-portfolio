<template> 
    <v-col class="red">
        <v-row justify="center">
            <v-col class="blue" cols=4>
                <v-row>
                    <v-col class="yellow mx-3">
                        {{value}}
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="yellow ml-3 mr-1 mt-2">C</v-col>
                    <v-col class="red mx-1 mt-2">+/-</v-col>
                    <v-col class="green mx-1 mt-2">%</v-col>
                    <v-col class="white ml-1 mr-3 mt-2">/</v-col>
                </v-row>
                <v-row>
                    <v-col class="yellow ml-3 mr-1 mt-2">7</v-col>
                    <v-col class="red mx-1 mt-2">8</v-col>
                    <v-col class="green mx-1 mt-2">9</v-col>
                    <v-col class="white ml-1 mr-3 mt-2">X</v-col>
                </v-row>
                <v-row>
                    <v-col class="yellow ml-3 mr-1 mt-2">4</v-col>
                    <v-col class="red mx-1 mt-2">5</v-col>
                    <v-col class="green mx-1 mt-2">6</v-col>
                    <v-col class="white ml-1 mr-3 mt-2">-</v-col>
                </v-row>
                <v-row>
                    <v-col class="yellow ml-3 mr-1 mt-2">1</v-col>
                    <v-col class="red mx-1 mt-2">2</v-col>
                    <v-col class="green mx-1 mt-2">3</v-col>
                    <v-col class="white ml-1 mr-3 mt-2">+</v-col>
                </v-row>
                <v-row>
                    <v-col class="yellow ml-3 mr-1 mt-2">0</v-col>
                    <v-col class="green mx-1 mt-2">.</v-col>
                    <v-col class="white ml-1 mr-3 mt-2">=</v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
export default {
    name: 'Caluclator',
    data: () => ({
        value: 'Numbers'
    })
}
</script>

<style>

</style>