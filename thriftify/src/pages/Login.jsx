export default function Login()
{
    return <>

    
    <div className="container my-5 min-vh-100">
  <div className="form-container">
    <h3 className="mb-3">Login</h3>
    <form>
      <div className="mb-3">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Enter email" />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
      </div>

      <button className="btn btn-primary w-100">Login</button>

      <p className="mt-3 text-center">Don't have an account? <a href="signup.html">Register</a></p>
    </form>
  </div>
</div>
    </>
}