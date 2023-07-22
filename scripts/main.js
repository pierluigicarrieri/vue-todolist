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

            ],

            newTodoitem : {
                id: null,
                text: "",
                done: false,
            },
            

        }

    },

    methods: {

        lineThrough(done) {

            if (done === false) {
                done = true;
            } else {
                done = false;
            }

        },

        addTodoItem() {

            const itemClone = {...this.newTodoitem};

            this.todoData.push(itemClone);

        },

    },

}).mount("#app");


