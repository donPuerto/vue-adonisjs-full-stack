'use strict'

const User = use('App/Models/User')

class UserController {
  /**
   * auth '@adonisjs/auth/providers/AuthProvider',
   * request 'request.all()'
   */
  async login ({ request, auth}) {
    const { email, password } = request.all()
    const token = await auth.attempt(email, password)
    console.log('token', token)
    return token
  }

  async register({request}) {
    const {email, password } = request.all();
    // console.log(email,password )

    await User.create({
      email,
      password,
      username: email
    })
    // console.log(this.login(...arguments))
    return this.login(...arguments)
  }
}

module.exports = UserController
