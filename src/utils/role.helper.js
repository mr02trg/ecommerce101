
const checkAuthorization = (user, allowedRoles) => {
  for(const role of allowedRoles) {
    if(user.role[role]) {
      return true;
    }
  }
  return false;
}

