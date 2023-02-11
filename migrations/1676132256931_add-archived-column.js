/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.addColumns('employee',{ isArchived: {type:'boolean', default: false} })
  pgm.addColumns('scrum',{ isArchived: {type:'boolean', default: false} })
  pgm.addColumns('project',{ isArchived: {type:'boolean', default: false} })
  pgm.addColumns('site',{ isArchived: {type:'boolean', default: false} })
};

exports.down = pgm => {
  pgm.dropColumns('employee','isArchived')
  pgm.dropColumns('scrum','isArchived')
  pgm.dropColumns('project','isArchived')
  pgm.dropColumns('site','isArchived')
};
