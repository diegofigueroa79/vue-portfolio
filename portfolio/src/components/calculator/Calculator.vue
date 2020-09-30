<template> 
    <v-col>
        <v-row justify="center">
            <v-col class="blue-grey rounded" cols=auto>
                <v-row>
                    <v-col class="amber blue-grey--text rounded mx-6 mt-2 display-1 d-flex justify-end">
                        {{current}}
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="ml-3 pr-1 mr-0 mt-2" @click="clear"><v-btn class="grey lighten-2 font-weight-black" large>C</v-btn></v-col>
                    <v-col class="mx-0 px-1 mt-2" @click="sign"><v-btn class="grey lighten-2 font-weight-black" large>+/-</v-btn></v-col>
                    <v-col class="mx-0 px-1 mt-2" @click="percent"><v-btn class="grey lighten-2 font-weight-black" large>%</v-btn></v-col>
                    <v-col class="ml-0 pl-1 mr-3 mt-2" @click="divide"><v-btn class="grey lighten-2 font-weight-black" large>/</v-btn></v-col>
                </v-row>
                <v-row>
                    <v-col class="ml-3 pr-1 mr-0 mt-0 pt-0" @click="aggregate('7')"><v-btn class="grey lighten-2 font-weight-black" large>7</v-btn></v-col>
                    <v-col class="mx-0 px-1 mt-0 pt-0" @click="aggregate('8')"><v-btn class="grey lighten-2 font-weight-black" large>8</v-btn></v-col>
                    <v-col class="mx-0 px-1 mt-0 pt-0" @click="aggregate('9')"><v-btn class="grey lighten-2 font-weight-black" large>9</v-btn></v-col>
                    <v-col class="ml-0 pl-1 mr-3 mt-0 pt-0" @click="multiply"><v-btn class="grey lighten-2 font-weight-black" large>X</v-btn></v-col>
                </v-row>
                <v-row>
                    <v-col class="ml-3 pr-1 mr-0 mt-0 pt-0" @click="aggregate('4')"><v-btn class="grey lighten-2 font-weight-black" large>4</v-btn></v-col>
                    <v-col class="mx-0 px-1 mt-0 pt-0" @click="aggregate('5')"><v-btn class="grey lighten-2 font-weight-black" large>5</v-btn></v-col>
                    <v-col class="mx-0 px-1 mt-0 pt-0" @click="aggregate('6')"><v-btn class="grey lighten-2 font-weight-black" large>6</v-btn></v-col>
                    <v-col class="ml-0 pl-1 mr-3 mt-0 pt-0" @click="subtract"><v-btn class="grey lighten-2 font-weight-black" large>-</v-btn></v-col>
                </v-row>
                <v-row>
                    <v-col class="ml-3 pr-1 mr-0 mt-0 pt-0" @click="aggregate('1')"><v-btn class="grey lighten-2 font-weight-black" large>1</v-btn></v-col>
                    <v-col class="mx-0 px-1 mt-0 pt-0" @click="aggregate('2')"><v-btn class="grey lighten-2 font-weight-black" large>2</v-btn></v-col>
                    <v-col class="mx-0 px-1 mt-0 pt-0" @click="aggregate('3')"><v-btn class="grey lighten-2 font-weight-black" large>3</v-btn></v-col>
                    <v-col class="ml-0 pl-1 mr-3 mt-0 pt-0" @click="add"><v-btn class="grey lighten-2 font-weight-black" large>+</v-btn></v-col>
                </v-row>
                <v-row>
                    <v-col class="ml-3 pr-1 mr-0 mt-0 pt-0" @click="aggregate('0')"><v-btn class="grey lighten-2 font-weight-black" large>0</v-btn></v-col>
                    <v-col class="mx-0 px-1 mt-0 pt-0" @click="dot"><v-btn class="grey lighten-2 font-weight-black" large>.</v-btn></v-col>
                    <v-col class="mx-0 px-1 mt-0 pt-0" @click="equals"><v-btn class="grey lighten-2 font-weight-black" large>=</v-btn></v-col>
                    <v-col class="ml-0 pl-1 mr-3 mt-0 pt-0 d-flex justify-center">
                        <v-img
                            contain
                            height="50"
                            width="50"
                            src="../../assets/logo.png"
                        ></v-img>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
export default {
    name: 'Caluclator',
    data: () => ({
        current: '0',
        previous: '',
        operator: null,
        operatorClicked: false
    }),
    methods: {
        clear() {
            this.current = '0';
            this.previous = '';
        },
        sign() {
            if( this.current != '0'){
                this.current = this.current.charAt(0) === '-' ?
                    this.current.slice(1) : `-${this.current}`;
            }
        },
        aggregate(buttonValue) {
            if(this.operatorClicked === true){
                this.current = '';
                this.operatorClicked = false;
            }
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
        percent() {
            this.current = `${parseFloat(this.current)/100}`
        },
        setPrevious() {
            this.previous = this.current;
            this.operatorClicked = true;
        },
        add() {
            this.operator = (a, b) => a + b;
            this.setPrevious();
        },
        subtract() {
            this.operator = (a, b) => a - b;
            this.setPrevious();
        },
        multiply() {
            this.operator = (a, b) => a * b;
            this.setPrevious();
        },
        divide() {
            this.operator = (a, b) => a / b;
            this.setPrevious();
        },
        equals() {
            let result = this.operator(parseFloat(this.previous), parseFloat(this.current))
            this.current = `${result}`;
        }
    }
}
</script>

<style>

</style>