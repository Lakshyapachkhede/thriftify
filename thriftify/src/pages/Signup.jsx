export default function Signup()
{
    return <>
    
    <div className="container my-5">
  <div className="form-container">
    <h3 className="mb-3">Register</h3>
    <form>

      <div className="mb-3">
        <label>Full Name</label>
        <input type="text" className="form-control" placeholder="Enter name" />
      </div>

      <div className="mb-3">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Enter email"/>
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password"/>
      </div>

      <div className="mb-3">
        <label>Phone Number</label>
        <input type="text" className="form-control" placeholder="Enter phone"/>
      </div>

      <button className="btn btn-success w-100">Register</button>
      <p className="mt-3 text-center">Already have an account? <a href="login.html">Login</a></p>
    </form>
  </div>
</div>
    
    </>

}
