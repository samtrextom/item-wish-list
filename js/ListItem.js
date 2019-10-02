Vue.component('ListItem',{
    props:{
        items: {
            type:Array,
            required: true
        },
        islot:{
            type:String,
            required: true
        }

    },

    methods: {
        removeIt(item) {

            this.$emit('remove-item',item);
        },

        equipIt(item){
            this.$emit('equip-item',item);
        },

        favIt(item){

            this.$emit('fav-item',item);
        }
    },

    template:`
              <v-list class="grey darken-1">
                  <v-list-item-group>
                      <v-list-item :class="item.rarity" v-for="(item,i) in itemList" :key="item.name" class="list-group-item grey darken-1">  
                          <v-list-item-content>
                                <v-list-item-title v-text="item.name"></v-list-item-title>
                                <v-list-item-subtitle class="white--text">
                                <span>Source: </span>
                                    <small v-if="item.equipped">Equipped</small>
                                    <small v-else>{{item.source}}</small>
                                    <span class="item-buttons">
                                        <button v-if="!item.favorite"class="btn btn-tiny" @click="favIt(item)"><i class="far fa-heart"></i></button>
                                        <button v-else class="btn btn-tiny" @click="favIt(item)"><i class="fas fa-heart"></i></button>
                                        <button v-if="!item.equipped" class="btn btn-tiny" @click="equipIt(item)"><i class="fas fa-plus-circle"></i></button>
                                        <button class="btn btn-tiny" @click="removeIt(item)"><i class="fas fa-minus-circle"></i></button>
                                    </span>
                                </v-list-item-subtitle>
                          </v-list-item-content>
                      </v-list-item>
                  </v-list-item-group>
              </v-list>
`,

    computed:{

        itemList: function(){

            let newList = this.items.filter(item => item.slot==this.islot)

            return newList
        }



    }
})