/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = (pgm) => {
  pgm.createType('cost_level_enum', ['low', 'medium', 'high'])
  pgm.addColumns('site', {
    cost_level: { type: 'cost_level_enum', default: 'low' }
  })
}

exports.down = (pgm) => {
  pgm.dropType('cost_level_enum')
  pgm.dropColumns('site', 'cost_level')
}
