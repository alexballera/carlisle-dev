'use strict'

import header from './templates/header'
import opportunities from './templates/opportunities'
import team from './templates/team'
import study from './templates/study'
import footer from './templates/footer'

export default () => {
  header()
  opportunities()
  team()
  study()
  footer()
}
