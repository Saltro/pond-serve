const { Task } = require('../db/model/index')

async function getTaskList(userId) {
  const result = await Task.findAll({
    attributes: ['id', 'describe', 'belong', 'importance', 'urgency', 'startAt', 'endAt'],
    where: {
      userId: Number(userId)
    }
  })
  return result
}

async function addTask({belong, userId, describe}) {
  const res = await Task.create({
    belong,
    userId,
    describe
  })
  return res.dataValues
}

async function getTaskInfo(id) {
  const res = await Task.findOne({
    attributes: ['id', 'describe', 'belong', 'importance', 'urgency', 'startAt', 'endAt'],
    where: {
      id
    }
  })
  return res.dataValues
}

module.exports = {
  getTaskList,
  addTask,
  getTaskInfo
}
