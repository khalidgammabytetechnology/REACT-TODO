import { useState } from "react";
import "./Register.css"

export const RegistrationForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const HandleInputChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "firstName":
                setFirstName(value);
                break;

            case "lastName":
                setLastName(value);
                break;

            case "email":
                setEmail(value);
                break;

            case "password":
                setPassword(value);
                break;

            case "phone":
                setPhoneNumber(value);
                break;
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
        };

        console.log(formData);

    };

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>

                    <label htmlFor="firstName">
                        <b>First Name</b>
                    </label>
                    <input type="text"
                        name="firstName"
                        placeholder="Enter FirstName"
                        required
                        value={firstName}
                        onChange={HandleInputChange}
                    />

                    <label htmlFor="lastName">
                        <b>Last Name</b>
                    </label>
                    <input type="text"
                        name="lastName"
                        placeholder="Enter lastName"
                        required
                        value={lastName}
                        onChange={HandleInputChange}
                    />


                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input type="text"
                        name="email"
                        placeholder="Enter Email"
                        required
                        value={email}
                        onChange={HandleInputChange}
                    />

                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input type="password"
                        name="password"
                        placeholder="Enter Password"
                        required
                        value={password}
                        onChange={HandleInputChange}
                    />

                    <label htmlFor="phone">
                        <b>Phone Number</b>
                    </label>
                    <input type="phone"
                        name="phone"
                        placeholder="8866465067"
                        required
                        value={phoneNumber}
                        onChange={HandleInputChange}
                    />

                    <p>
                        By breating an account you agree to our
                        <a href="#" style={{ color: "dodgerblue" }}>
                            Term & Privacy
                        </a>
                    </p>

                    <div className="clearfix">
                        <button type="submit" className="btn">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>

            <section
                className="summary"
                style={{ textAlign: "center", marginTop: "30px" }}
            >
                <p>
                    Hello, my name is
                    <span>
                        {firstName} {lastName}
                    </span>
                    . My email address is <span>{email}</span> and my phone number is
                    <span>{phoneNumber}</span>.
                </p>
            </section>
        </>
    )
}