import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner, faStar, faAward } from '@fortawesome/free-solid-svg-icons'

//se importan los iconos de uno en uno
library.add(faSpinner)
library.add(faStar)
library.add(faAward)

Vue.component('icons', FontAwesomeIcon)