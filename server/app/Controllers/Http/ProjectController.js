'use strict'

const Project = use('App/Models/Project')
const AuthorizationService = use('App/Services/AuthorizationService');

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

  async destroy({ auth, request, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const project = await Project.find(id);
    // if(project.user_id !== user.id) {
    //   // Authentication Error Status
    //   return response.status(403)
    // }

    AuthorizationService.verifyPermission(project, user);
    await project.delete();
    return project;
  }

}

module.exports = ProjectController
