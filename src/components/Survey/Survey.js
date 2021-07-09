import React from "react";

const Survey = () => {
  return (
    <div>
      <header>
        <h1 id="title">Survey Form</h1>
        <p id="description">
          Thank you for taking your time to help improve the portfolio page.
        </p>
      </header>
      <main>
        <form
          className="form-fill"
          action="/Survey_Form"
          method="POST"
          id="survey-form"
        >
          <div className="sub-section">
            <label for="name" id="name-label">
              Name
            </label>
            <input
              type="text"
              name="fullname"
              value=""
              placeholder="Enter your name"
              id="name"
              className="form-input"
            />
          </div>

          <div className="sub-section">
            <label for="email" id="email-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value=""
              placeholder="Enter your email"
              id="email"
              className="form-input"
            />
          </div>

          <div className="sub-section">
            <label for="age" id="number-label">
              Age(optional)
            </label>
            <input
              type="number"
              name="age"
              value=""
              min="18"
              max="99"
              placeholder="Age"
              id="age"
              className="form-input"
            />
          </div>

          <div className="sub-section">
            <label for="birthdate">Date of Birth</label>
            <input
              type="date"
              name="birthdate"
              value=""
              id="birthdate"
              className="form-input"
            />
          </div>

          <div className="sub-section">
            <label for="number">Phone Number</label>
            <input
              type="number"
              name="countrycode"
              value=""
              min="1"
              max="999"
              placeholder="Country Code"
              id="number"
              className="form-input phone"
            />
            <input
              type="tel"
              name="phonenumber"
              value=""
              placeholder="Phone Number"
              className="form-input phone"
              id="phone-number"
            />
          </div>

          <div className="sub-section">
            <label for="dropdown">
              Which option best describes your current role?
            </label>
            <select className="" name="jobtitle" id="dropdown">
              <option>Select current role</option>
              <option id="student">Student</option>
              <option id="full-time">Full Time Job</option>
              <option id="part-time">Part Time Job</option>
              <option id="unemployed">Unemployed</option>
              <option id="other">Other</option>
            </select>
          </div>

          <div className="sub-section">
            <label>Would you recommend the website to a friend?</label>
            <label className="radio">
              <input
                type="radio"
                name="recommendation"
                value="definitely"
                checked
              />
              Definitely
            </label>
            <label className="radio">
              <input type="radio" name="recommendation" value="maybe" />
              Maybe
            </label>
            <label className="radio">
              <input type="radio" name="recommendation" value="not sure" /> Not
              sure
            </label>
          </div>
          <div className="sub-section">
            <label for="dropdown2">Which project you liked most?</label>
            <select name="bestproject" id="dropdown2">
              <option>Select an option</option>
              <option id="best-project1">Landing Page</option>
              <option id="best-project2">Personal Page</option>
              <option id="best-project3">Technical Documentation</option>
              <option id="best-project4">Tribute Page</option>
            </select>
          </div>

          <div className="sub-section">
            <label>
              What would you like to see improved? (Check all that apply)
            </label>
            <label className="checkbox-label">
              <input type="checkbox" name="improve" value="Front-end Styling" />
              Front-end Styling
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="improve"
                value="Back-end Operations"
              />
              Back-end Operations
            </label>
            <label className="checkbox-label">
              <input type="checkbox" name="improve" value="Website Speed" />
              Website Speed
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="improve"
                value="Add Front End Libraries"
              />
              Add Front End Libraries
            </label>
            <label className="checkbox-label">
              <input type="checkbox" name="improve" value="Responsiveness" />
              Responsiveness
            </label>
            <label className="checkbox-label">
              <input type="checkbox" name="improve" value="Add Animation" /> Add
              Animation
            </label>
            <label className="checkbox-label">
              <input type="checkbox" name="improve" value="More Projects" />{" "}
              More Projects
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="improve"
                value="Web Content Accessibility"
              />
              Web Content Accessibility
            </label>
            <label className="checkbox-label">
              <input type="checkbox" name="improve" value="Improve UI Design" />
              Improve UI Design
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="improve"
                value="Improve Typography"
              />
              Improve Typography
            </label>
          </div>

          <div className="sub-section">
            <label for="text-area">Any comments or suggestions?</label>
            <textarea
              name="comments"
              rows="6"
              cols="68"
              placeholder="Enter your comment here..."
              className="text-area"
              id="text-area"
            ></textarea>
          </div>

          <div className="sub-section">
            <button type="submit" id="submit">
              Submit
            </button>
          </div>
        </form>
        <div>
          <h3 className="weatherAdd">
            The temperature in Toronto on today is temperature degree
            centigrade!
          </h3>
          <img className="center" src="<%= imageIcon %>" alt="whether" />
        </div>
      </main>
    </div>
  );
};

export default Survey;
