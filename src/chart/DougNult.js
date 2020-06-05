import { Doughnut, mixins } from 'vue-chartjs'

const {reactiveProp} = mixins
export default{
    extends: Doughnut,
    mixins: [reactiveProp],
    responsive: true,
    maintainAspectRatio: false,
    props: {
        chartData: {
            type: Object,
            default: null
        },
        options: {
            type: Object,
            default: null
        }
    },

    mounted () {
        this.renderChart(this.chartData, this.options)
    }
}