import '~/assets/styles.css'
import '@fortawesome/fontawesome-free/js/all'
import dayjs from 'dayjs'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.filter('dateFormat', (date, format = 'YYYY-MM-DD HH:mm:ss') => {
    return dayjs(date).format(format)
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
