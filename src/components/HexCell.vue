<template>
  <li class="hexcell" 
    :style="styleObject()"
    @click="$emit('clickhex',info.index)"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    >
    <img class="head" v-if="info.head" v-bind:src="info.head">
    <img class="frame" v-bind:src="getHexImg">
    <img class="frame-outer" v-if="info.special" src="../assets/hex/hex_10.png">
    <div class="infotext"  v-if="info.typeint" v-show="isVisible|| info.isShowId || info.isShowCenter || info.isShowBottom"> 
      <p class="p-top" v-show="info.isShowId">{{info.index}}</p>
      <p class="p-center" v-show="info.isShowCenter || info.typeint == 999" :style="styleObjectCenter()">{{getCenterText()}}</p>
      <p class="p-bottom" v-show="info.isShowBottom">{{info.index}}</p>
    </div>
  </li>
</template>

<script>
// import hex_1 from "../assets/hex/hex_1.png"
// import hex_2 from "../assets/hex/hex_2.png"
// import hex_3 from "../assets/hex/hex_3.png"
// import hex_4 from "../assets/hex/hex_4.png"
import hex_5 from "../assets/hex/hex_5.png"
import hex_6 from "../assets/hex/hex_6.png"
// import hex_7 from "../assets/hex/hex_7.png"
import hex_8 from "../assets/hex/hex_8.png"
import hex_9 from "../assets/hex/hex_9.png"
// import hex_10 from "../assets/hex/hex_10.png"
// import hex_mask from "../assets/hex/hex_mask.png"

let mapX = 30;
let fixX = 60;
let fixY = 30;
// let mapY = 26;
export default {  
  props: ['initInfo'],

  data:function () {
    return {
      info: this.initInfo,
      centercolor:'#FFF',
      isVisible: false,
    }
  },

  computed: {
    getHexImg:function(){
      switch (this.info.typeint){
        case 0:
          return hex_5
        case 1:
          return hex_6
        case 2:
          return hex_5
        case 3:
          return hex_9
        case 4:
          return hex_8
        case 999:
          return hex_8
        default:
          return hex_5
      }
    },
    
  },
  
  methods: {
    styleObject:function() {
      // window.console.log('cauculate style',this.info)
      let col = this.info.index % mapX;
      let row = Math.floor(this.info.index / mapX);
      // let xxx = row + mapY
      let x = fixX+90*col;
      let y = fixY+row*78;
      if (Math.floor(this.info.index / mapX) % 2 == 1) {
          x -= 45;
      }
      return {
        left: x+'px',
        top: y+'px'
      }
    },
    styleObjectCenter:function() {
      let color = '#fff';
      let size = "18px";
      if(this.info.special) {
        if (this.info.reward.blessing) {
          if (this.info.reward.blessing.indexOf('力') > -1) {
              color = '#ff4e00';
              size = "22px";
          } else {
              color = '#e4ff00';
              size = "20px";
          }
        } else if (this.info.reward.supply || this.info.reward.token){
          color = '#ffcc00';
          size = "18px";
        }
      } else if (this.info.typeint == 999) {
        color = "#e4ff00";
        size = "28px";
      } else if (this.info.boss == '入殓师' || this.info.boss == '跳跳弟弟' || this.info.boss == '黑童子') {
        color = '#e41773';
        size = "20px";
      }

      return {
        color: color,
        fontSize: size,
      }

    },

    getCenterText:function() {
      if(this.info.special) {
        if (this.info.reward.blessing) {
          if (this.info.reward.blessing.indexOf('力') > -1) {
              this.centercolor = '#ff4e00';
          } else {
              this.centercolor = '#e4ff00';
          }
          return this.info.reward.blessing
        } else if (this.info.reward.supply || this.info.reward.token){
          this.centercolor = '#ffcc00';
          return  '宝箱'
        }
      } else if (this.info.typeint==999) {
        return "起点"
      } else if (this.info.boss == '入殓师' || this.info.boss == '跳跳弟弟' || this.info.boss == '黑童子') {
        let text = ''
        this.info.skill.forEach(x=>{
            if (x.indexOf('·') > -1) {
                text=x.split('·')[1]
            }
        })
        this.centercolor = '#e41773';
        return text
      }
      return ""
    },

    onMouseEnter() {
      this.isShow = true;
    },
    onMouseLeave() {
      this.isShow = false;
    }

  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .hexcell {
    position: absolute;
    width: 90px;
    height: 77px;
  }

  img {
    position: absolute;
  }

  img.frame {
    left: -5px;
    top: -11px;
    width: 100px;
    height: 100px;
  }

  img.frame-outer {
    left: -7px;
    top: -13px;
    width: 104px;
    height: 104px;
  }
  
  img.head {
    left: 0px;
    top: -6px;
    width: 90px;
    height: 90px;
    -webkit-mask-image:url(../assets/hex/hex_mask.png);
  }

  .infotext {
    position: absolute;
    width: 90px;
    height: 100px;
    left: 0px;
    top: -12px;
    line-height: auto;
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  .p-top {
    /* top: -28px;
    left: -5px; 
    position: absolute; */
    width: 90px;    
    font-size: 18px;
    font-weight: bold;
    color: #70f0ff;
    -webkit-text-stroke: 1px black;
  }

  .p-center {
    /* top: 12px;    
    left: -5px; 
    position: absolute; */
    width: 90px;
    height: 90px;
    font-weight: bold;
    -webkit-text-stroke: 1px black;
    text-align:center;
    vertical-align:middle;

  }

  .p-bottom {
    /* top: 45px;    
    left: -5px; 
    position: absolute; */
    width: 100px;
    font-weight: bold;
    -webkit-text-stroke: 1px black;
  }
</style>
