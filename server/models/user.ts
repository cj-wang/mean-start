import * as mongoose from 'mongoose';

export interface IUser {
  email: string;
  password: string;
  name: string;
};

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String
});

interface IUserModel extends IUser, mongoose.Document { }

const User = mongoose.model<IUserModel>('User', userSchema);

export default User;
