<template>
  <div id="grid" >
    <h1>{{ name }}</h1>
    <ul>
      <HexCell 
        v-for="(gridinfo) in mapdata"
        :initInfo="gridinfo"
        :key="'cell'+gridinfo.index"
        @clickhex="onHexClicked"
      />
    </ul>
  </div>
</template>
<script>
import HexCell from './HexCell.vue'

export default {


  props: ['datas',"name"],
  data() {
    return {
      mapdata: this.datas,
    }
  },
  components:{
    HexCell,
  },

  methods: {
    onHexClicked(index) {
      window.console.log(`[grid]点击了格子:${index}`, this.datas[index].isShowId)
      this.$emit('clickhex2',index)
      // let newdata = {}
      // Object.assign(newdata,this.datas[index])
      // newdata.isShowCenter = !newdata.isShowCenter;
      // this.datas.splice(index, 1,newdata)  
      // vm.$set(target, key, value)
      this.$set(this.datas[index],'isShowId',!this.datas[index].isShowId)    
      window.console.log(`[grid]改变格子数据:`, this.datas[index].isShowId)
    }
  },

}
</script>
<style>
  ul {
    list-style-type: none;
    padding: 0;
  }
  #grid {
    position: absolute;
    width: 2800px;
    height: 2100px;
    background: #000;
  }
</style>