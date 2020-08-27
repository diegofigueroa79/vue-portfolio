<template>
    <v-card
        tile
    >
        <v-navigation-drawer
            app
            dark
            v-model="drawer"
            src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        >
            <v-row class="justify-center">
                <v-avatar size=150 class="mt-4">
                    <v-img 
                        src="../../assets/me.jpg"
                        lazy-src="../../assets/me.jpg"
                    ></v-img>
                </v-avatar>
                <v-list>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>
                                <h2 class="text-center">Diego Figueroa</h2>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="text-center">
                                Python, Javascript Developer
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon class="mx-1">
                            <v-icon>mdi-email</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                                diegofigueroa79@gmail.com
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                </v-list>
            </v-row>

        </v-navigation-drawer>
    </v-card> 
</template>

<script>
export default {
    name: 'Navigation',
    data () {
        return {
            drawer: true
        }
    }

}
</script>

<style>

</style>