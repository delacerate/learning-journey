// logical operator OR is || and AND &&

const password = 'p@sss'

if (password.length >= 12 && password.includes('@')) {
  console.log('the password is might strong')
} else if (password.length >= 8 || password.includes('@') && password.length >= 5) {
  console.log('that password is strong enough')
} else {
  console.log('the password is not strong enough')
}
