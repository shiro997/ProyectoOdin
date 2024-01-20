export class User{
  _id!: string;
  Name!:string;
  Email!:string;
  Age!:number;
  ProfilePhoto!:string;
  UsrName!:String;
}

export class Usergeneral extends User{
  UserType!: String;
  Clients!:[];
  Providers!:[];
  Engineers!:[];
  Provider!:String;
  Supports!:[];
}

export class UserEngineer extends User{
  isEngineer!:boolean;
  Provider!:String;
  Supports!:[];
}

export class UserClient extends User{
  isClient!:boolean;
  Providers!:[];
  Supports!:[]
}

export class UserProvider extends User{
  isProvider!:boolean;
  Clients!:[];
  Engineers!:[];
}