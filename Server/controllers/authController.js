function login(req, res) {
    const { email, password } = req.body; // Assuming you're sending email and password in the request body
    // Your actual login logic goes here, check if email/password match, etc.
    if (email === 'test@ex.com' && password === 'password') {
      // If login is successful, send a success response
      res.status(200).json({ message: 'Login successful' });
    } else {
      // If login fails, send an error response
      res.status(401).json({ message: 'Invalid email or password' });
    }
  }
  
  module.exports={ login };