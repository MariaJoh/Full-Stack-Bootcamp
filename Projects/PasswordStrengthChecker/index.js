/*
  # Rules:
    1. At least 8 characters
    2. At least one lowercase character
    3. At lease one uppercase character
    4. At least one number
    5. At least one special character (!, @, #, $, %, ^, &, *, ?)
    6. No easy passwords

    - Additional rules:
      - Should not contain name (Explained)
      - Should not contain email (Explained)

  # Category:
    - Strong
    - Moderate
    - Weak
*/

function validatePassword(pwd) {
    // Check: Password is empty or null
    if (!pwd) {
        document.getElementById('invalid-pwd-alert').style.display = 'block'
        return
    }

    // Check: 1. Password has a minimum of 8 characters
    if (pwd.length >= 8) {
        document.getElementById('eight-check').innerText = '✅'
        document.getElementById('eight-check-container').classList.add('list-group-item-success')
    } else {
        document.getElementById('eight-check').innerText = '⚠️'
        document.getElementById('eight-check-container').classList.add('list-group-item-danger')
    }

    let hasLowercaseChar = false
    let hasUppercaseChar = false
    let hasNumber = false
    let hasSpecialChar = false
        // a. Iterate through each character of the password string
    for (let i = 0; i < pwd.length; i++) {
        let char = pwd[i]

        if (char >= 'a' && char <= 'z') {
            hasLowercaseChar = true
        }
        if (char >= 'A' && char <= 'Z') {
            hasUppercaseChar = true
        }
        if (char >= '0' && char <= '9') {
            hasNumber = true
        }
        if (char == '!' || char == '@' || char == '#' || char == '$' || char == '%' || char == '^' || char == '&' || char == '*' || char == '?') {
            hasSpecialChar = true
        }
    }

    // Check: 2. Password contains at least one lowercase character
    if (hasLowercaseChar) {
        document.getElementById('lowercase-check').innerText = '✅'
        document.getElementById('lowercase-check-container').classList.add('list-group-item-success')
    } else {
        document.getElementById('lowercase-check').innerText = '⚠️'
        document.getElementById('lowercase-check-container').classList.add('list-group-item-danger')
    }

    // Check: 3. Password contains at least one uppercase character
    if (hasUppercaseChar) {
        document.getElementById('uppercase-check').innerText = '✅'
        document.getElementById('uppercase-check-container').classList.add('list-group-item-success')
    } else {
        document.getElementById('uppercase-check').innerText = '⚠️'
        document.getElementById('uppercase-check-container').classList.add('list-group-item-danger')
        
    }

    //Check: 4. Password contains at least one number
    if (hasNumber) {
        document.getElementById('number-check').innerText = '✅'
        document.getElementById('number-check-container').classList.add('list-group-item-success')
    } else {
        document.getElementById('number-check').innerText = '⚠️'
        document.getElementById('number-check-container').classList.add('list-group-item-danger')
    }

    //Check: 5. Password contains a special character
    if (hasSpecialChar) {
        document.getElementById('specialchar-check').innerText = '✅'
        document.getElementById('specialchar-check-container').classList.add('list-group-item-success')
    } else {
        document.getElementById('specialchar-check').innerText = '⚠️'
        document.getElementById('specialchar-check-container').classList.add('list-group-item-danger')
    }
}

function handleSubmit(event) {
    event.preventDefault() // Prevents the page from reloading upon submission

    const inputPassword = document.getElementById('validationCustomPassword').value
    
    console.log(inputPassword)

    validatePassword(inputPassword)

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
            }, false)
        })
    })()
}

//loginForm.addEventListener("submit", () => {}

/*
  # Additional resources:
    - https://www.w3schools.com/charsets/ref_html_ascii.asp
*/