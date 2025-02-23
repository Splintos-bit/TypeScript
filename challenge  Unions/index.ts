type User = {
    name: string,
    user:userRole
}

type userRole='admin' | 'user'
let user:userRole='admin'