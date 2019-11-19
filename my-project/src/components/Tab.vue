<template>
  <div class="tab">
    <div id="main" style="width: 400px;height:400px;"></div>
      <div id="circle" style="width: 400px;height:400px;"></div>

  </div>
</template>

<script>
export default {
  name: 'Tab',
  mounted(){
    this.initData();
    let myChart = this.$echarts.init(document.getElementById('main'))
    myChart.setOption({
      title: {text: '又要花钱了'},
      tooltip: {},
      xAxis: {
        data: ["毛衣", "隔离", "棉袄", "雪地靴","零食"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [25, 32, 36, 15, 11, 20]
      }]
    });
  },
  methods: {
    initData() {
      // 基于准备好的dom，初始化echarts实例
      var cChart = this.$echarts.init(document.getElementById('circle'));
      // 绘制图表
      cChart.setOption({
        title : {
          text: '2019年电视剧排行榜',//主标题
          subtext: '纯属胡编乱造',//副标题
          x:'center',//x轴方向对齐方式
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          bottom: 'bottom',
          data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
          {
            name: '2019年电视剧排行榜',
            type: 'pie',
            color:['pink','palegreen','skyblue','sandybrown','yellow'],
            radius : '55%',
            center: ['50%', '60%'],
            data:[
              {value:28393354, name:'亲爱的热爱的'},
              {value:21022543, name:'陈情令'},
              {value:12434723, name:'十年三月三十日'},
              {value:26556808, name:'小欢喜'},
              {value:12234568, name:'破冰行动'}
            ],
            itemStyle: {

              emphasis: {
                color:'violet',
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            labelLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          }
        ]
      });
    },
  }
}
</script>
<style scoped>
#main{
  float: left;
  width: 50%;
}
  #circle{
    float: left;
    margin-left: 100px;
    color:sandybrown;
  }
</style>
