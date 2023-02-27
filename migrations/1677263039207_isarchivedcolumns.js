/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = (pgm) => {
  // create table

  pgm.createTable('pi', {
    id: 'id',
    pi_name: { type: 'varchar(255)' },
    project_id: { type: 'integer', references: '"project"' },
    project_iterations_count: { type: 'integer', default: 0 }
  })
  pgm.addColumns('iteration', {
    pi_id: { type: 'integer', references: '"pi"' }
  })
  pgm.addColumns('milestone', {
    milestone_start_date: { type: 'date' },
    milestone_end_date: { type: 'date' }
  })
  pgm.addColumns('project', {
    project_pis_count: { type: 'integer', default: 0 }
  })

  pgm.addColumns('iteration', {
    isarchived: { type: 'boolean', default: false }
  })
  pgm.addColumns('pi', { isarchived: { type: 'boolean', default: false } })
  pgm.addColumns('milestone', {
    isarchived: { type: 'boolean', default: false }
  })

  pgm.dropColumns('milestone', 'milestone_date')
  pgm.dropColumns('project', 'project_iterations_count')
}

exports.down = (pgm) => {
  pgm.dropTable('pi')

  pgm.dropColumns('iteration', 'isarchived')
  pgm.dropColumns('pi', 'isarchived')
  pgm.dropColumns('milestone', 'isarchived')

  pgm.dropColumns('iteration', 'pi_id')
  pgm.dropColumns('milestone', 'milestone_start_date')
  pgm.dropColumns('milestone', 'milestone_end_date')
  pgm.dropColumns('project', 'project_pis_count')
}
