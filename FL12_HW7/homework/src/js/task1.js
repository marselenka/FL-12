let usrEmail = prompt('Enter your email');
let emailLength = 5;
let newPassLength = 6;
let userPassword, oldUserPass, newPass, newPassNext;

if (usrEmail === '' || usrEmail === null) {
    alert('Canceled');
} else if (usrEmail.length < emailLength) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (usrEmail !== 'user@gmail.com' && usrEmail !== 'admin@gmail.com') {
    alert('I don\'t know you!');
} else {
    userPassword = prompt('Please, enter your password');
    if (userPassword === '' || userPassword === null) {
        alert('Canceled');
    } else if (userPassword !== 'UserPass' && userPassword !== 'AdminPass') {
        alert('Wrong password!');
    } else {
        newPass = confirm('Do you want to change your password?');
        if (!newPass) {
            alert('You have failed the change');
        } else {
            oldUserPass = prompt('Please, enter your old password');
            if (oldUserPass === '' || oldUserPass === null) {
                alert('Canceled.');
            } else if (oldUserPass !== userPassword) {
                alert('Wrong password!');
            } else {
                newPass = prompt('Please, enter your new password');
                if (newPass === '' || newPass === null) {
                    alert('Canceled');
                } else if (newPass.length < newPassLength) {
                    alert('It\'s too short password. Sorry.');
                } else {
                    newPassNext = prompt('Please, enter your new password again');
                    if (newPassNext === newPass) {
                        alert('You have successfully changed your password');
                    } else {
                        alert('You wrote the wrong password');
                    }
                }
            }
        }
    }
}