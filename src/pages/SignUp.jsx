import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await axios.post(
                `http://localhost:3000/signup`,
                data
            );
            console.log(response);
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <div>
            <h2 className="mb-3">Đăng ký</h2>

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
                <button>Đăng ký</button>
            </form>
        </div>
    );
};

export default SignUp;
