Vue.component('component-one',{
    template:`<div>Text1</div>`
})
Vue.component('component-two',{
    template:`<div>Text2</div>`
})
Vue.component('component-three',{
    template:`<div>Text3</div>`
})



const childElement ={
    name:"child-element",
    template:'<p>Child component</p>',
}



Vue.component('some-el', {
    props:['title', 'counter', 'increase'],
    components:[
        childElement
    ],
    data(){
        return{
            // title: 'Hello Component'
        }
    },
    methods:{

    },
    computed:{
    },
    mounted(){
        console.log('component', this)
    },
    template:
        `<div>
            <div>{{title}}</div>
<!--            <child-element></child-element>-->
            <button @click="$emit('increase')">{{counter}}</button>
            <slot>Def</slot>
        </div>`
    ,
})