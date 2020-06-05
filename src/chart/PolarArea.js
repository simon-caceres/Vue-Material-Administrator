import {PolarArea, mixins} from 'vue-chartjs'

const {reactiveProp} = mixins

export default {
    extends: PolarArea,
    responsive: true,
    maintainAspectRatio: false,
    mixins: [reactiveProp],
    props: {
        data: {
            type: Object,
            default: null
        },
        options: {
            type: Object,
            default: null
        }
    },
    mounted () {
        this.renderChart(this.options,this.data)
    }
}

