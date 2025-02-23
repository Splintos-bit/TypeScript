type User ={
    id:number
    username:string
    role: "member" | "contributor" | "admin"
}
type UpdatedUser =Partial<User>
let nextUserId=1

const users:User[]=[
    {id:nextUserId++,username:'john',role:'member'},
    {id:nextUserId++,username:'jane',role:'contributor'}

]

function UpateUser(id:number,updates:UpdatedUser){
    const foundUser = users.find(user=>user.id===id)
    if(!foundUser){
        console.log('User not found !')
        return
    }
    Object.assign(foundUser,updates)
}

function addNewUser(newUser:Omit<User,'id'>):User {
const user:User ={
    id:nextUserId++,
    ...newUser
}
users.push(user)
return user
}
addNewUser({username:'joe',role:'member'})
console.log(users)