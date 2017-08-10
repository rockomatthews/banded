export class User {
    constructor(
        public _id: number = Math.floor(Math.random()*100),
        public username = "",
        public motto: string = "",
        public genres:string[] = ['Accoustic', 'Alternative Rock', 'Blues', 'Classic Rock', 'Classical', 'Comedy', 'Country', 'Electronic', 'Experimental', 'Jazz', 'Metal', 'Pop', 'Raggae', 'Rap', 'R&B'],
        public password: string = "",
        public confirmPassword: string = ""  
    ){}
}
  