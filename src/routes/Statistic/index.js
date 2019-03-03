import React from 'react';
import echarts from 'echarts';
import { getMap } from '../../config/config';
import Layout from '../../components/Layout';
import Confirm from "../../components/Confirm";
import { mapJson, geoCoordMap } from '../../config/china';
import s from './index.css';

const projectId = localStorage.getItem("projectId");
const key = localStorage.getItem("key");

const convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
       var geoCoord = geoCoordMap[data[i].address];
       res.push(geoCoord.concat(data[i].address).concat(data[i].count));
    }
    return res;
}

class Statistic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    async componentDidMount() {
        const res = await getMap();
        this.setState({
            data: res.data
        })
        this.initMap()
    }

    initMap = () => {
        const { data } = this.state
        echarts.registerMap('china', mapJson);
        const mapChart = echarts.init(this.map);
        var option = {
            backgroundColor: '#404a59',
            title: {
                text: '用户登录分布',
                // subtext: '点我进入',
                // sublink: 'http://www.baidu.com/',
                left: 'center',
                textStyle: {
                   color: '#fff'
                }
             },
            tooltip: {
                trigger: 'item',
                formatter: function (params) {            //格式化鼠标指到点上的弹窗返回的数据格式
                   return  params.value[2] + ' : ' + params.value[3];
                }
             },
            legend: {
                orient: 'vertical',
                left: 10,
                selected: {
                   // 默认选中'系列1'
                   '服务器': true,
                   // 默认不选中'系列2'
                   '云主机': false
                },
                selectedMode:"single",
             },
            data: [{
                name: '登录分布',
                // 强制设置图形为圆。
                icon: 'circle',
                // 设置文本为红色
                textStyle: {
                   color: '#00ffff'
                }
             }
            ],
            geo: {                  //地里坐标系组件（相当于每个省块）
                map: 'china',
                roam:true,           //是否开启缩放
                label: {
                   emphasis: {                //鼠标划到后弹出的文字
                      color: '#00ffff',       //高亮背景色
                      show: true,             //是否高亮显示
                      fontSize:14             //字体大小
                   }
                },
                itemStyle: {                  //坐标块本身
                   normal: {                  //坐标块默认样式控制
                      areaColor: '#323c48',
                      borderColor: '#111'
                   },
                   emphasis: {
                        areaColor: '#2a333d'
                    //   areaColor: '#79FF79'
                   }
                }
            },
            series: [
                {
                   name: '登录分布',      // series名称
                   type: 'effectScatter',        // series图表类型
                   effectType: 'ripple',         // 圆点闪烁样式，目前只支持ripple波纹式
                   coordinateSystem: 'geo',      // series坐标系类型
                   data: convertData(data),    // series数据内容
                   showEffectOn: 'render',       //配置何时显示特效
                   symbolSize: function (val) {	
                       return `${val[3] * 0.1 + 10}`
                   },
                   rippleEffect: {               // ripple的样式控制
                      brushType: 'stroke',
                      color: '#00ffff',
                   },
                   label: {                      // 散点的数据显示控制
                      emphasis: {
                         formatter: function (params) {            // 散点的数据显示控制；也可以换成'{a}','{b}','{c}'
                            return params.value[2];
                         },
                         position: 'right',
                         show: true
                      }
                   },
                   itemStyle: {
                    shadowBlur: 2,
                    shadowColor: '#00ffff',
                    color: '#00ffff'
                },
                   zlevel: 1
                }
             ],
             symbolSize: 12,
          }
          if (option && typeof option === "object") {
             mapChart.setOption(option);
          }
    }

    render() {
        return(
            <div className={s.container}>
            {!projectId || !key ? (
                <Confirm
                  title="提示"
                  tips={"请设置全局密钥后查看"}
                  confirmText="马上设置"
                />
              ) : null}
             <Layout />
             <div ref={(div) => this.map = div}
             className={s.map}
             style={{width: '1100px',height: '550px',mergeLeft:"0px"}}></div>
            </div>
        )
    }

}

export default Statistic;