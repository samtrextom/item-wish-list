
Vue.component('list',{
    props:{
        items:{
          type: Array,
          required: true
        },
        item_slots:{
            type: Array,
            required: true
        },
        name1:{
            type: String,
            default: "Not Working!"
        },
        name2:{
            type:String,
            default: "Not Working!"
        }
    },

    methods:{
        removeIt(item){
            this.$emit('finally-remove-item',item);
        },
        equipIt(item) {
            this.$emit('finally-equip-item',item);
        },
        favIt(item){
            this.$emit('finally-fav-item',item);
        }
    },

    template:`
          <v-row>
              <v-card class="mx-auto"max-width="400"tile>
                  <v-list class="grey darken-1 white--text">
                    <v-row>
                        <v-col>
                            <v-subheader class="white--text">{{name1}}</v-subheader>
                        </v-col>
                        <v-col>
                            <v-subheader class="white--text">{{name2}}</v-subheader>
                        </v-col>
                    </v-row>    
                        <v-list-item-group color="primary">
                              <v-list-item
                                v-for="(item, i) in item_slots"
                                :key="i"
                              >
                                    <v-list-item-content>
                                    <v-divider></v-divider>
                                          <v-list-item-title class="white--text" v-html="item"></v-list-item-title>
                                          <v-row>
                                                <v-col :md="6">
                                                    <ListItem :items="equipList" :islot="item" 
                                                    @remove-item="removeIt" 
                                                    @equip-item="equipIt"
                                                    @fav-item="favIt"></ListItem>       
                                                </v-col>
                                                <v-col :md="6">
                                                    <ListItem :items="wantList" :islot="item" 
                                                    @remove-item="removeIt" 
                                                    @equip-item="equipIt"
                                                    @fav-item="favIt"></ListItem>   
                                                </v-col>
                                          </v-row>
                                    </v-list-item-content>
                              </v-list-item>
                        </v-list-item-group>
                  </v-list>
              </v-card>
          </v-row>

`,

    computed:{

        equipList: function(){
            return this.items.filter(function(item){
                return item.equipped
            })
        },

        wantList: function(){
            return this.items.filter(function(item){
                return !item.equipped
            })
        },

    }


})
