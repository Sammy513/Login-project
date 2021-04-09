export class ClientDides {
    constructor(name, email, password) {
        this.name = name
        this.email = email
        this.password = password
    }
}

let arr = []


export let client = arr.map( dide => {
    const  {name ,email, password} = dide
    return new ClientDides(name ,email, password)
})