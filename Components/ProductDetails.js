app.component('product-details', {
    props:{
        details:{
            type:Object,
            required:true
        }
    },
    template: 
    /*html*/
    `<ul>
        <li 
            v-for="(detail,index) in details" 
            :key="index">
        {{detail}} 
        </li>
    </ul>
    `
})