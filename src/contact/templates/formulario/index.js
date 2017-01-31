'use strict'
import yo from 'yo-yo'

module.exports = {
  template: yo`
    <form class="form">
      <div class="form-group">
        <label for="formFirstName">First Name</label>
        <input type="text" class="form-control" id="formFirstName" aria-describedby="emailHelp" placeholder="Enter Last Name">
      </div>
      <div class="form-group">
        <label for="formLastName">Last Name</label>
        <input type="text" class="form-control" id="formLastName" aria-describedby="emailHelp" placeholder="Enter Last Name">
      </div>
      <div class="form-group">
        <label for="formEmail">Email Address</label>
        <input type="email" class="form-control" id="formEmail" aria-describedby="emailHelp" placeholder="Enter Email" required>
      </div>
      <div class="form-group">
        <label for="formTel">Contact Number</label>
        <input type="tel" class="form-control" id="formTel" aria-describedby="emailHelp" placeholder="Enter Contact Number">
      </div>
      <div class="form-group">
        <label for="formCountry">Country</label>
        <select class="form-control" id="formCountry">
          <option>USA</option>
          <option>Canada</option>
          <option>Spain</option>
        </select>
      </div>
      <button type="submit" class="btn btn-secondary">Submit</button>
    </form>`
}
