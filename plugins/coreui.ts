import Vue, { VueConstructor } from 'vue'
import * as icons from '@coreui/icons'

const CoreUiIconComponent = {
  install(Vue: VueConstructor): void {
    Vue.component('CIcon', icons)
  },
}

Vue.use(CoreUiIconComponent)
