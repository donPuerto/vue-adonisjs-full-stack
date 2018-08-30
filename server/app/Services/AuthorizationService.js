const InvalidAccessException = use('App/Exceptions/InvalidAccessException');
const ResourceNotExistException = use('App/Exceptions/ResourceNotExistException');

class AuthorizationService {
  verifyPermission(resource, user) {
    if (!resource) {
      throw new ResourceNotExistException();
    }

    if (resource.user_id !== user.id) {
      // throw new Error(); // todo: invalid access exception
      throw new InvalidAccessException();
    }

  }
}

module.exports = new AuthorizationService();
