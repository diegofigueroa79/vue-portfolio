<template> 
    <v-col class="red">
        <v-row justify="center">
            <v-col class="blue" cols=auto>
                <v-row>
                    <v-col class="yellow mx-3 display-1">
                        {{current}}
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="yellow ml-3 pr-1 mr-0 mt-2" @click="clear"><v-btn large>C</v-btn></v-col>
                    <v-col class="red mx-0 px-1 mt-2" @click="sign"><v-btn large>+/-</v-btn></v-col>
                    <v-col class="green mx-0 px-1 mt-2"><v-btn large>%</v-btn></v-col>
                    <v-col class="white ml-0 pl-1 mr-3 mt-2" @click="divide"><v-btn large>/</v-btn></v-col>
                </v-row>
                <v-row>
                    <v-col class="yellow ml-3 pr-1 mr-0 mt-0" @click="aggregate('7')"><v-btn large>7</v-btn></v-col>
                    <v-col class="red mx-0 px-1 mt-0" @click="aggregate('8')"><v-btn large>8</v-btn></v-col>
                    <v-col class="green mx-0 px-1 mt-0" @click="aggregate('9')"><v-btn large>9</v-btn></v-col>
                    <v-col class="white ml-0 pl-1 mr-3 mt-0" @click="multiply"><v-btn large>X</v-btn></v-col>
                </v-row>
                <v-row>
                    <v-col class="yellow ml-3 pr-1 mr-0 mt-0" @click="aggregate('4')"><v-btn large>4</v-btn></v-col>
                    <v-col class="red mx-0 px-1 mt-0" @click="aggregate('5')"><v-btn large>5</v-btn></v-col>
                    <v-col class="green mx-0 px-1 mt-0" @click="aggregate('6')"><v-btn large>6</v-btn></v-col>
                    <v-col class="white ml-0 pl-1 mr-3 mt-0" @click="subtract"><v-btn large>-</v-btn></v-col>
                </v-row>
                <v-row>
                    <v-col class="yellow ml-3 pr-1 mr-0 mt-0" @click="aggregate('1')"><v-btn large>1</v-btn></v-col>
                    <v-col class="red mx-0 px-1 mt-0" @click="aggregate('2')"><v-btn large>2</v-btn></v-col>
                    <v-col class="green mx-0 px-1 mt-0" @click="aggregate('3')"><v-btn large>3</v-btn></v-col>
                    <v-col class="white ml-0 pl-1 mr-3 mt-0" @click="add"><v-btn large>+</v-btn></v-col>
                </v-row>
                <v-row>
                    <v-col class="yellow ml-3 pr-1 mr-0 mt-0" @click="aggregate('0')"><v-btn large>0</v-btn></v-col>
                    <v-col class="green mx-1 mt-0" @click="dot"><v-btn large>.</v-btn></v-col>
                    <v-col class="white ml-0 pl-1 mr-3 mt-0" @click="equals"><v-btn large>=</v-btn></v-col>
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
        dot() {
            if(this.current.indexOf('.') === -1){
                this.current += '.'
            }
        },
        add() {
            this.operator = (a, b) => a + b;
            this.operatorClicked = true;
            this.num += parseFloat(this.current)
            this.current = '0'
        },
        subtract() {
            this.operator = (a, b) => a - b;
            this.operatorClicked = true;
            this.num -= parseFloat(this.current)
            this.current = '0'
        },
        multiply() {
            this.operator = (a, b) => a * b;
            this.operatorClicked = true;
            this.num = parseFloat(this.current)
            this.current = '0'
        },
        divide() {
            this.operator = (a, b) => a / b;
            this.operatorClicked = true;
            this.num = parseFloat(this.current)
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