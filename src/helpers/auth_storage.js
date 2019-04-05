export function getCurrentUser(){
    let user = JSON.parse(localStorage.getItem('user'))
    let token = localStorage.getItem('token')

    return user ? { logged: !! token, user: user , token: token} : { logged: false }
}