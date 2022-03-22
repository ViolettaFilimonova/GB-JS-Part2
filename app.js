const app = new Vue({
    el: '#app',
    data:{
        title: 'Hello Component',
        counter: 0,
        tabs: ['one', 'two', 'three'],
        selectedTab: 'one',
    },
    methods:{
        increase(){
            this.counter++
        }
    },
    computed:{
        currentComponent(){
            return `component-${this.selectedTab}`
        }
    },
    mounted(){
        console.log('root', this)
    },
     template:
//     `<div>
//                <some-el @increase="increase" :title="title" :counter="counter" :increase="increase"></some-el>
//                <some-el @increase="increase" :title="title" :counter="counter" :increase="increase"></some-el>
//                <some-el @increase="increase" :title="title" :counter="counter" :increase="increase"></some-el>
//
// </div>
// `
    `
        <div>
            <button v-for="tab of tabs" @click="selectedTab = tab">{{tab}}</button>
            <component :is="currentComponent"></component>
        </div>
    `
});