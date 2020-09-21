<template> 
    <v-col class="red">
        <v-row justify="center">
            <v-col class="blue" cols=4>
                <v-row>
                    <v-col class="yellow mx-3">
                        {{current}}
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="yellow ml-3 mr-1 mt-2" @click="clear">C</v-col>
                    <v-col class="red mx-1 mt-2" @click="sign">+/-</v-col>
                    <v-col class="green mx-1 mt-2">%</v-col>
                    <v-col class="white ml-1 mr-3 mt-2">/</v-col>
                </v-row>
                <v-row>
                    <v-col class="yellow ml-3 mr-1 mt-2" @click="aggregate('7')">7</v-col>
                    <v-col class="red mx-1 mt-2" @click="aggregate('8')">8</v-col>
                    <v-col class="green mx-1 mt-2" @click="aggregate('9')">9</v-col>
                    <v-col class="white ml-1 mr-3 mt-2">X</v-col>
                </v-row>
                <v-row>
                    <v-col class="yellow ml-3 mr-1 mt-2" @click="aggregate('4')">4</v-col>
                    <v-col class="red mx-1 mt-2" @click="aggregate('5')">5</v-col>
                    <v-col class="green mx-1 mt-2" @click="aggregate('6')">6</v-col>
                    <v-col class="white ml-1 mr-3 mt-2">-</v-col>
                </v-row>
                <v-row>
                    <v-col class="yellow ml-3 mr-1 mt-2" @click="aggregate('1')">1</v-col>
                    <v-col class="red mx-1 mt-2" @click="aggregate('2')">2</v-col>
                    <v-col class="green mx-1 mt-2" @click="aggregate('3')">3</v-col>
                    <v-col class="white ml-1 mr-3 mt-2" @click="add">+</v-col>
                </v-row>
                <v-row>
                    <v-col class="yellow ml-3 mr-1 mt-2" @click="aggregate('0')">0</v-col>
                    <v-col class="green mx-1 mt-2">.</v-col>
                    <v-col class="white ml-1 mr-3 mt-2" @click="equals">=</v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
export default {
    name: 'Caluclator',
    data: () => ({
        current: 'Numbers',
        num: 0,
        operator: null,
        operatorClicked: false
    }),
    methods: {
        clear() {
            this.current = '0';
            this.num = 0;
        },
        sign() {
            if( this.current != '0'){
                this.current = this.current.charAt(0) === '-' ?
                    this.current.slice(1) : `-${this.current}`;
            }
        },
        aggregate(buttonValue) {
            if(this.current === '0'){
                    this.current = buttonValue;
            }
            else {
                this.current += buttonValue;
            }
        },
        add() {
            this.operator = (a, b) => a + b;
            this.operatorClicked = true;
            this.num += parseFloat(this.current)
            this.current = '0'
        },
        equals() {
            let result = this.operator(this.num, parseFloat(this.current))
            this.current = parseFloat(result);
        }
    }
}
</script>

<style>

</style>