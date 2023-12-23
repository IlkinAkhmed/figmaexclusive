import React from "react";
import "./index.scss"
import google from "../../../public/img/google.png";
import { Link } from "react-router-dom";

function Sign_up() {
  return (
    <section id="sign_up">
      <div className="loginLeft">
        <img src='https://s3-alpha-sig.figma.com/img/75f3/94c0/a1c7dc5b68a42239311e510f54d8cd59?Expires=1704067200&Signature=arb0jdLVeBEtmb-xK1CHLqsyvaaanspdkF96H9VfCfasKDpQswfOAhuSccak3p3W8vRvsIqch6F67X1Dyl9BcAQekKWqekSnzpxeu3xQi80xP1K7HoABf7sZFGXnBFhS~ulkdvZNYrBSPQV7rpbqEgKEyXM4hcw-a0VKs2vsaiJlTfImJYw3JAdF0rgYvUdQ1LxVvWkwgDLVHn~mWmyraEd7vcowLOjYYM~7V0l6~U15qKMR27WHOFLp1YhkwWeTfadhwp6n9XisXqTxlabJ0mOP7o3QYWjPjwI-xpPyCA~Qd-gj89CJNStUR69aD0L7RwfGpjCKluM-TGTacyrlDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt="" />
      </div>
      <div className="registerArea">
        <h1>Create An Account</h1>
        <p>Enter your details below</p>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
        </form>
        <button>Create Account</button>
        <div className="google">
          <img src={google} alt="" />
          <p>Sign Up With Google</p>
        </div>
        <p>Already have account? <Link to={'/login'} className="login">Log in</Link></p>
      </div>
    </section>
  )
}

export default Sign_up;
