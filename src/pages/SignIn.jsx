import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const SignIn = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (formData) => {
        try {
            const { data } = await axios.post(
                `http://localhost:3000/signin`,
                formData
            );
            localStorage.setItem("user", JSON.stringify(data));
        } catch (error) {
            console.log("Error:", error.response.data);
        }
    };

    return (
        <div>
            <h2 className="mb-3">Đăng nhập</h2>

            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <span>Email:</span>
                <input
                    className="form-control mb-3"
                    type="email"
                    {...register("email")}
                    placeholder="Điền email..."
                />{" "}
                <span>Mật khẩu:</span>
                <input
                    className="form-control mb-3"
                    type="password"
                    {...register("password")}
                    placeholder="Điền password..."
                />
                <button>Đăng nhập</button>
            </form>
        </div>
    );
};

export default SignIn;
