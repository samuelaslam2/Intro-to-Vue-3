const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCartAddition(id) {
            this.cart.push(id)
        },
        updateCartDeletion(id){

            if (this.cart.indexOf(id) == -1) {
                console.log("Item not in cart")
            } else {
                this.cart.splice(this.cart.indexOf(id),1)
            }
            
        }
    }
})
