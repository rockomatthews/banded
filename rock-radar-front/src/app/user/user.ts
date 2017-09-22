export class User {
    constructor(
        public _id: number = Math.floor(Math.random()*100),
        public email: string = "",
        public username: string = "",
        public motto: string = "",
        public genres: string[] = [],
        public password: string = "",
        public confirmPassword: string = "",
    ){}
}
  