/* eslint-disable object-curly-newline */
import React from 'react';
import { MDBContainer, MDBCard, MDBBtn, MDBRow } from 'mdbreact';

function LoginPage() {
  return (
    <MDBContainer sm="12" style={{ width: '65%', marginTop: '3rem' }}>
      <MDBCard>
        <div className="header pt-3 blue-gradient">
          <MDBRow className="d-flex justify-content-center">
            <h3 className="white-text mb-3 pt-3 font-weight-bold">Log in</h3>
          </MDBRow>
        </div>
        <form className="text-center border border-light p-5" action="#!">
          <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" />

          <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" />

          <div className="text-center">
            <div>
              <div className="text-center custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                <label className="custom-control-label" htmlFor="defaultLoginFormRemember">
                  Remember me
                </label>
              </div>
            </div>
            <br />
          </div>
          <MDBBtn className="btn btn-block my-4" type="submit">
            Sign in
          </MDBBtn>

          <p>
            Not a member?
            <br />
            <a href="/">Register</a>
          </p>

          <p>or sign in with:</p>

          <a href="#" className="mx-2" role="button">
            <i className="fab fa-facebook-f light-blue-text"></i>
          </a>
          <a href="#" className="mx-2" role="button">
            <i className="fab fa-twitter light-blue-text"></i>
          </a>
          <a href="#" className="mx-2" role="button">
            <i className="fab fa-linkedin-in light-blue-text"></i>
          </a>
          <a href="#" className="mx-2" role="button">
            <i className="fab fa-github light-blue-text"></i>
          </a>
        </form>
      </MDBCard>
    </MDBContainer>
  );
}

export default LoginPage;
