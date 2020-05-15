<template>
  <div>
      <!-- 未使用modules -->
      <!-- <button @click="inc">+</button>
      {{count}}
      <button @click="decrement">-</button>
      {{money}} -->

      <!-- 使用modules -->
      <div>
        {{$store.state.a.count}}
        {{$store.state.b.number}}
      </div>
      <button @click="add">+</button>
      {{count}}
      <button @click="minus">-</button>
      {{number}}
  </div>
</template>

<script>
//未使用modules
//import { mapState,mapGetters,mapMutations, mapActions } from 'vuex'
// export default {
//     created(){
//         console.log(this.money)
//     },
//     methods:{
//         //actions
//         // increment(){
//         //     this.$store.dispatch("increment")
//         // },
//         // decrement(){
//         //     this.$store.dispatch("decrement")
//         // },
//         //如果需要对actions传参，可以采用调用传值的方式
//         inc(){
//             this.increment();
//         },
//         // ...mapActions([
//         //     "increment",
//         //     "decrement"
//         // ]),

//         //mutaions
//         // inc(){
//         //     this.$store.commit("increment")
//         // },
//         // decrement(){
//         //     this.$store.commit("decrement")
//         // }
//         //如果需要对mutations传参，可以采用调用传值的方式
//         // inc(){
//         //     this.increment();
//         // },
//         //第一种
//         // ...mapMutations([
//         //     "increment",
//         //     "decrement"
//         // ])
//         //第二种
//         ...mapMutations({
//             "increment":"increment",
//             "decrement":"decrement"
//         })
        
//     },
//     //第一种
//     // computed:mapState({
//     //     //count:'count', //第一种写法
//     //     count:(state)=>state.count, //第二种写法
//     //     money(){
//     //         return this.$store.getters.money;
//     //     }
//     // }),
//     //第二种
//     computed:{
//         //这里计算出来的数据会直接挂在this上
//         // money(){
//         //     return this.$store.getters.money;
//         // },
//         ...mapGetters({money:'money'}),
//         ...mapState({count:'count'})
//     }
// }

//使用modules
import {mapState,mapActions} from "vuex";
export default {
    methods:{
        ...mapActions('a',[
            'add','minus'
        ]),
        //名字相同，上面的会被下面覆盖
        ...mapActions('b',[
            'add','minus'
        ])
    },
    computed:{
        ...mapState("a",[
            'count'
        ]),
        ...mapState("b",[
            'number'
        ])
    }
}
</script>

<style>

</style>