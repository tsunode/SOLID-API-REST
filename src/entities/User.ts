import { uuid } from 'uuidv4';

export class User{
    
    public readonly id: string;
    
    public name: string;
    public email: string;
    public password: string;

    // Omit: omitindo o id, tornanod ele opcional
    constructor(props: Omit<User, 'id'>, id?: string){
        
        // pega todas as props e passa para dentro do e-mail, ex: this.email = props.email
        Object.assign(this, props); 

        if(!id){
            this.id = uuid();
        }
    }

}