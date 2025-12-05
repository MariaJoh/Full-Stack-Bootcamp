const accountNumber = '102230379866'
const eyeBtn = document.getElementById('see-account-number')
const accountNoText = document.getElementById('account-no-text')
let accountNoVisible = false
eyeBtn.addEventListener('click', () => {
  eyeBtn.classList.toggle('fa-eye')
  eyeBtn.classList.toggle('fa-eye-slash')
  accountNoVisible = !accountNoVisible

  if(accountNoVisible) {
    accountNoText.innerText = accountNumber
  } else {
    accountNoText.innerText = `*********${accountNumber.slice(-3)}`
  }
})
  
let balance = 120000

function format (num) {
    const formatted = num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
    })
    return formatted
}

document.getElementById('account-balance').innerText = `$${format(balance)}`
const transactionList = document.getElementById('transaction-list')

function deposit() {
    // 1. Collect form data and reset
    const amountToDepositNode = document.getElementById('amount-to-deposit')
    const amountToDeposit = Number(amountToDepositNode.value)
    amountToDepositNode.value = ''
    balance += amountToDeposit
    document.getElementById('account-balance').innerText = `$${format(balance)}`

    // 2. Create element structure using DOM Methods
    const listGroupItem = document.createElement('a')
    listGroupItem.classList.add('list-group-item', 'list-group-item-action', 'white-smoke-background')

    const topPart = document.createElement('div')
    topPart.classList.add('d-flex', 'w-100', 'justify-content-between')

    const h5 = document.createElement('h5')
    h5.classList.add('mb-1')
    h5.innerText = 'Deposit'
    const amount = document.createElement('div')
    amount.classList.add('fs-5', 'text-success')
    amount.innerText = `+$${format(amountToDeposit)}`

    topPart.append(h5, amount)

    const middlePart = document.createElement('p')
    middlePart.classList.add('mb-1')
    middlePart.innerText = 'Transfer in (CREDIT)'

    const lastPart = document.createElement('div')
    lastPart.classList.add('d-flex', 'w-100', 'justify-content-between')

    const small1 = document.createElement('small')
    const now = new Date()
    small1.innerText = now.toLocaleString()
    const small2 = document.createElement('small')
    small2.innerText = `Updated balance: $${format(balance)}`
    lastPart.append(small1, small2)

    listGroupItem.append(topPart, middlePart, lastPart)

    // To keep latest transaction on the top
    const existingList = transactionList.innerHTML
    transactionList.innerHTML = ''
    transactionList.append(listGroupItem)
    transactionList.innerHTML += existingList

    // 3. Show alerts
    document.getElementById('deposit-successful').innerHTML = `
    <div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
        Deposit successful!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
}

function sendMoney() {
    // VALIDATION BLOCK
    const nameInput = document.getElementById("beneficiary-name")
    const accountInput = document.getElementById("beneficiary-account")
    const accountNumber = accountInput.value.trim()
    const amountInput = document.getElementById("amount-to-transfer")

    let errors = [];

     // Validate name
    if (nameInput.value.length < 1) { 
        errors.push("Beneficiary name is required.");
    }

    // Validate account number
    if (!/^\d{12}$/.test(accountNumber)) {
        errors.push("Beneficiary account number must be exactly 12 digits.");
    }

    // Validate amount
    if (amountInput.value.length < 1) {
        errors.push("Amount is required.")
    }

    // If any errors exist, show them and stop
    if (errors.length > 0) {
        document.getElementById('transfer-unsuccessful').innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show mt-3" role="alert">
                ${errors.join("<br>")}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        return;
    }
    // END VALIDATION BLOCK

    // 1. Collect form data and reset
    const amountToTransfer = Number(document.getElementById('amount-to-transfer').value)
    const transferType = document.getElementById('transfer-type').value
    const beneficiaryName = document.getElementById('beneficiary-name').value
    const sendMoneyForm = document.getElementById('send-money-form')
    sendMoneyForm.reset()
    balance -= amountToTransfer
    document.getElementById('account-balance').innerText = `$${format(balance)}`

    // 2. Create element structure using DOM Methods
    const listGroupItem = document.createElement('a')
    listGroupItem.classList.add('list-group-item', 'list-group-item-action', 'white-smoke-background')

    const topPart = document.createElement('div')
    topPart.classList.add('d-flex', 'w-100', 'justify-content-between')

    const h5 = document.createElement('h5')
    h5.classList.add('mb-1')
    h5.innerText = `${transferType} Transfer: ${beneficiaryName}`
    const amount = document.createElement('div')
    amount.classList.add('fs-5', 'text-danger')
    amount.innerText = `-$${format(amountToTransfer)}`

    topPart.append(h5, amount)

    const middlePart = document.createElement('p')
    middlePart.classList.add('mb-1')
    middlePart.innerText = 'Transfer out (DEBIT)'

    const lastPart = document.createElement('div')
    lastPart.classList.add('d-flex', 'w-100', 'justify-content-between')

    const small1 = document.createElement('small')
    const now = new Date()
    small1.innerText = now.toLocaleString()
    const small2 = document.createElement('small')
    small2.innerText = `Updated balance: $${format(balance)}`
    lastPart.append(small1, small2)

    listGroupItem.append(topPart, middlePart, lastPart)

    // To keep latest transaction on the top
    const existingList = transactionList.innerHTML
    transactionList.innerHTML = ''
    transactionList.append(listGroupItem)
    transactionList.innerHTML += existingList

    // 3. Show alerts
    document.getElementById('transfer-successful').innerHTML = `
    <div class="alert alert-success alert-dismissible fade show mt-3" role="alert" >
        Transfer successful!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
}