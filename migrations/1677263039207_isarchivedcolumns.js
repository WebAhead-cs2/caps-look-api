/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = (pgm) => {
  pgm.addColumns('iteration', {
    isarchived: { type: 'boolean', default: false }
  })
  pgm.addColumns('pi', { isarchived: { type: 'boolean', default: false } })
  pgm.addColumns('milestone', {
    isarchived: { type: 'boolean', default: false }
  })
}

exports.down = (pgm) => {
  pgm.dropColumns('iteration', 'isarchived')
  pgm.dropColumns('pi', 'isarchived')
  pgm.dropColumns('milestone', 'isarchived')
}
