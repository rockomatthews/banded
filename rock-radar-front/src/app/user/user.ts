export class User {
    constructor(
        public _id: number = Math.floor(Math.random()*100),
        public email = "",
        public username: string = email.replace(/@.*$/,""),
        public motto: string = "",
        public genres: string[] = [],
        public password: string = "",
        public confirmPassword: string = "",
        public editable: boolean = false, 
    ){}
}
  