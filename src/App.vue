<template>
  <div 
    id="app"
    >
    <img alt="Vue logo" src="./assets/logo.png">
    <HexGrid 
      :datas="getMapData()"
      :name="123"
      @clickhex2="onHexClicked"
      onselectstart="return false"
    />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HexGrid from "./components/HexGrid.vue"
import GameData from './data/mapdata.js'

let ShikikamiIcons = {
  "":""
}

for (const key in GameData.ShikikamiMap) {
  const url = GameData.ShikikamiMap[key];
  if(key) {
    ShikikamiIcons[key] = require("./assets/icon/"+url+".png")
  }
}

function getHeadSrc(info) {
  if (info.typeint == 0) {
    return ""
  } else if (info.boss && GameData.ShikikamiMap[info.boss]) {
    return ShikikamiIcons[info.boss]
  } else {
    return ShikikamiIcons["海国小怪"]
  }
}

export default {
  name: 'app',
  components: {
    HelloWorld,
    HexGrid
  },

  methods: {
    getMapData() {
      let datas = []
      for (let i=0;i<GameData.mapdata.length;i++) {
        let info = GameData.mapdata[i];
        // window.console.log('infoof',i,info,getHeadSrc(info))
        datas.push({
          index: info.index,
          typeint: info.typeint,
          special:  info.special||0,
          skill: info.skill,
          reward:info.reward,
          boss:info.boss||"",
          head: info.typeint > 0 && info.typeint <999 ? getHeadSrc(info) : "",
          isShowId: true,
        })
      }
      this.datas = datas;
      return datas
    },
    onHexClicked(index) {
      window.console.log(`app 点击了格子:${index}`)
      this.datas[index].isShow = !this.datas[index].isShow;
    }

  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
