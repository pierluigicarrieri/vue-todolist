Vue.createApp({

    data(){
        
        return {

            todoData: [

                {
                    id: 1,
                    text: "Buy groceries",
                    done: false,
                },
                {
                    id: 2,
                    text: "Make bed",
                    done: false,
                },
                {
                    id: 3,
                    text: "Do homework",
                    done: false,
                },

            ]

        }

    },

    methods: {

    }

}).mount("#app");

console.log(this.todoData)

