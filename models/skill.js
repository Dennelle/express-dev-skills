const skills = [
    {id: 125223, name: 'Communication', done: true},
    {id: 127904, name: 'JavaScript', done: false},
    {id: 127905, name: 'Python', done: false},
    {id: 127906, name: 'Project Management', done: false},
    {id: 127907, name: 'HTML', done: true},
    {id: 127908, name: 'CSS', done: true},
    {id: 127909, name: 'Debugging', done: false},
    {id: 127910, name: 'Coding', done: false},
    {id: 127911, name: 'Programming', done: false},
    {id: 127912, name: 'Testing', done: false},
    {id: 139608, name: 'Problem Solving', done: false}
  ];

  function getAll() {
    return skills;
  }

  module.exports = {
    getAll,
    getOne
  };

  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(skills => skills.id === id);
  }
