// const form = document.getElementById('form');
// const firstname = document.getElementById('firstname');
// const lastname = document.getElementById('lastname');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

// form.addEventListener('submit', e => {
// 	e.preventDefault();
	
// 	checkInputs();
// });

// function checkInputs() {
// 	// trim to remove the whitespaces
// 	const firstnameValue = firstname.value.trim();
//     const lastnameValue = lastname.value.trim();
// 	const emailValue = email.value.trim();
// 	const passwordValue = password.value.trim();
	
// 	if(lastnameValue === '') {
// 		setErrorFor(username, 'Username cannot be blank');
// 	} else {
// 		setSuccessFor(username);
// 	}

//     if(lastnameValue === '') {
// 		setErrorFor(username, 'Username cannot be blank');
// 	} else {
// 		setSuccessFor(username);
// 	}
	
// 	if(emailValue === '') {
// 		setErrorFor(email, 'Email cannot be blank');
// 	} else if (!isEmail(emailValue)) {
// 		setErrorFor(email, 'Not a valid email');
// 	} else {
// 		setSuccessFor(email);
// 	}
	
// 	if(passwordValue === '') {
// 		setErrorFor(password, 'Password cannot be blank');
// 	} else {
// 		setSuccessFor(password);
// 	}
	
// 	if(password2Value === '') {
// 		setErrorFor(password2, 'Password2 cannot be blank');
// 	} else if(passwordValue !== password2Value) {
// 		setErrorFor(password2, 'Passwords does not match');
// 	} else{
// 		setSuccessFor(password2);
// 	}
// }

// function setErrorFor(input, message) {
// 	const formControl = input.parentElement;
// 	const small = formControl.querySelector('small');
// 	formControl.className = 'form-control error';
// 	small.innerText = message;
// }

// function setSuccessFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'form-control success';
// }
	
// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }






// // SOCIAL PANEL JS
// const floating_btn = document.querySelector('.floating-btn');
// const close_btn = document.querySelector('.close-btn');
// const social_panel_container = document.querySelector('.social-panel-container');

// floating_btn.addEventListener('click', () => {
// 	social_panel_container.classList.toggle('visible')
// });

// close_btn.addEventListener('click', () => {
// 	social_panel_container.classList.remove('visible')
// });



// const firstname = document.getElementById('firstname');
// const lastname = document.getElementById('lastname');
// const email = document.getElementById('email');
// const password = document.getElementById('password');

function formValidation(){
    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const email = form.email.value;
    const password = form.password.value;

    if (firstname==null || firstname==""){
        //do this
        firstname.style.borderColor = red;
        firstname.style.borderStyle = 2;
        return false;
    }else{
        //do this

        return true;
    }
    if (lastname==null || lastname==""){
        //do this

        return false;
    }else{
        //do this

        return true;
    }
    if (email==null || email==""){
        //do this

        return false;
    }else{
        //do this

        return true;
    }
    if (password==null || password==""){
        //do this

        return false;
    }else{
        //do this

        return true;
    }

}