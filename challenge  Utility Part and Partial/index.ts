type User ={
    id:number
    username:string
    role: "member" | "contributor" | "admin"
}
type UpdatedUser =Partial<User>
const users:User[]=[
    { id:1,username:"john" ,role:"member"},
    { id:2,username:"jane" ,role:"contributor"},
    { id:3,username:"alice" ,role:"admin"},
    { id:4,username:"charlie" ,role:"member"},
]

function updateUser(id:number,updates:UpdatedUser): User | null {
    const found = users.find((element) => element.id===id);
    
    if (!found) {
        return null;
    }

    const updatedUser = Object.assign(found, updates);

    // Return the updated user object
    return updatedUser;
}

console.log(updateUser(2, { id:4,username:"charlie" ,role:"member"},))