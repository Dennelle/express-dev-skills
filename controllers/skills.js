const skills = require('../models/skill');

module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteTodo
};

function deleteTodo(req, res){

    SkillModel.deleteOne(req.params.id)

    res.redirect('/todos')
}

function create(req, res){
    console.log(req.body,

        const skill= SkillModel.create(req.body)

        res.redirect(`/skills/${skill.id}`);
    )
}

function index(req, res) {
    const skillsDatabase = Skills.getAll()
    res.render('skills/index.ejs', { skills: skillsDatabase});
}

function show(req, res) {
    res.render('skills/show.ejs', {skill: skills.getOne(req.params.id),
    });
  }


// const express = require('express');
// var router = express.Router();
// var skillsCtrl = require('../controllers/skills')

// module.exports = router

// router.get('/', skillsCtrl.index)
// router.get('/:id', skillsCtrl.show)
