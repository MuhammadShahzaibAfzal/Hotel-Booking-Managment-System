class UserDTO {
  name;
  email;
  imageURL;
  address;
  DOB;
  _id;

  constructor(user) {
    this.name = user.name;
    this.email = user.email;
    this.imageURL = user.imageURL;
    this.address = user.address;
    this.DOB = user.DOB;
    this._id = user._id;
  }
}

export default UserDTO;
