'use strict'

const Project = use('App/Models/Project')

class ProjectController {
  async index ( { auth}) {
    const user = await auth.getUser();
    // console.log('user', user)
    return await user.projects().fetch()
  }

  async create({auth, request }) {
    const user = await auth.getUser();
    const {title } = request.all()
    const project = new Project()
    // save to database
    project.fill({
      title
    })

    // associate the project with the user
    await user.projects().save(project)
    return project
  }

}

module.exports = ProjectController
