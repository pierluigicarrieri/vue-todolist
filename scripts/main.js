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

            newTodoitem: {
                id: null,
                text: "",
                done: false,
            },

            lastId: 3,
            

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

            const itemClone = {...this.newTodoitem,
            id: ++this.lastId,
            };

            console.log(itemClone)

            this.todoData.push(itemClone);

        },

        deleteTodoItem(id) {

            const indexToDelete = this.todoData.findIndex((todoItem) => todoItem.id === id);

            this.todoData.splice(indexToDelete, 1);

        },

    },

}).mount("#app");


