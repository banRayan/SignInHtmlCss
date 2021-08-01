function showPassword(){
    let password = document.getElementById('password');
    

    lock.classList.toggle('.icon-eye')
    if(password.type == 'password'){
        password.type = 'text'
        
    }else{
        password.type = 'password'
    }
}

