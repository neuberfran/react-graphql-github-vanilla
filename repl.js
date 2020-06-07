const User = model('User', {
  name: String,
  email: String,
  encryptedPassword: String,
})

User.create = async ({ name, email, password }) => {
  const user = new User({ name, email })
  user.encryptedPassword = await Bcrypt.hash(password, 10)
  return user.save()
}
