
Vue.use(Vuetify);

var app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        theme: {
            themes: {
            	// modify themes (light or dark) on the fly
                dark: {
                    primary: '#263238',
                    secondary: '#616161'
                }
            }
        }
    }),



    data: {
        drawer: null,
        menuItems: [
            {icon: 'notes', text: 'Notes'},
            {icon: 'archive', text: 'Archive'},
            {icon: 'delete', text: 'Trash'},
            {divider: true},
            {icon: 'settings', text: 'Settings'},
            {icon: 'help', text: 'Help'},
            {icon: 'info', text: 'About'},
        ],
        dialog:false,

        newItem:{
            equipped: false
        },
        item_slots:[
            "Head",
            "Neck",
            "Shoulders",
            "Back",
            "Chest",
            "Bracers",
            "Hands",
            "Waist",
            "Legs",
            "Feet",
            "Ring-1",
            "Ring-2",
            "Trinket-1",
            "Trinket-2",
            "Weapon-Main-Hand",
            "Weapon-Off-Hand",
            "Weapon-Ranged"
        ],
        items: items
    },
    methods: {
        addItem(item){
            console.log(this.newItem)
            this.items.push(this.newItem);

            this.newItem = {
                name: "",
                source:"",
                slot: "",
                rarity:"",
                equipped: false
            }
            dialog = false
        },
        removeIt(item) {
            this.items.splice(this.items.indexOf(item),1)
        },

        equipIt(item){

            let item1 = this.items.filter(function(i){
                return i.equipped&&(i.slot==item.slot)
            })

            if(item1 && !this.items[this.items.indexOf(item1[0])].favorite)
            {
                this.items.splice(this.items.indexOf(item1[0]),1)
            }
            this.items[this.items.indexOf(item)].equipped = true;
        },
        favIt(item){
            console.log(this.items[this.items.indexOf(item)].favorite)
            this.items[this.items.indexOf(item)].favorite = !this.items[this.items.indexOf(item)].favorite;
        },

        mounted: function() {

            if (localStorage.getItem(items)) {
                this.items = JSON.parse(localStorage.getItem)
            }
        }
    },



    watch: {
        shoppingList:{
            handler(newList){
                localStorage.setItem('items', JSON.stringify(newList))
            },
            deep:true
        }
    }
    });
