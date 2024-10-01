import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../../AuthContext";
import Input from "../Components/Input";
import { useForm } from "react-hook-form";
import Validation from "../valid/validation.js";

const MyForm = () => {
    const{Login} = useAuth();
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        const {email, password} = data;
        if(Validation.isEmpty(email) || Validation.isEmpty(password)) {
            alert("Please enter all inputs!")
        } else {
            if(email === '1@gmail.com') {
                if(password === '123') {
                    Login({email})
                    navigate('/home')
                } else {
                    alert("Wrong Password!!!")
                }

            } else {
                alert ("Wrong Email!!!")
            } 
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
            <div className="box email-box">
                <label className="email-label" htmlFor="">Email: </label>
                <Input
                    className="input email-input"
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    register={register}
                />
            </div>

            <div className="box password-box">
                <label className="password-label">Password:</label>
                <Input
                    className="input password-input"
                    type="text"
                    name="password"
                    placeholder="Password"
                    register={register}
                />
            </div>

            <Button type="submit" className="button">Log in</Button>

        </form>
    )
}

export default MyForm