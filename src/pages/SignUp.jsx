import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(
                `http://localhost:3000/signup`,
                data
            );
            console.log(response);
            toast.success("Đăng ký thành công!");
            navigate("/sign-in");
        } catch (error) {
            console.log("error", error);
            toast.error("Đã xảy ra lỗi khi đăng ký");
        }
    };

    return (
        <div className="d-flex align-items-center py-4 container justify-content-center">
            <div>
                <main className="form-signin w-100 m-auto">
                    <form
                        className="custom-form-width"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <img
                            className="mb-4 mx-auto d-block"
                            src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Header.svg"
                            width={100}
                            height={110}
                        />
                        <h1 className="h3 mb-3 fw-normal text-signup text-center">
                            Đăng ký
                        </h1>
                        <div className="form-floating">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                {...register("email", { required: true })}
                            />
                            {errors.email && (
                                <span className="text-danger">
                                    *Không biết nhập email à ?
                                </span>
                            )}
                            <label htmlFor="floatingInput">Email:</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                name="password"
                                placeholder="Password"
                                {...register("password", { required: true })}
                            />
                            {errors.password && (
                                <span className="text-danger">
                                    *Không biết nhập mật khẩu à ?
                                </span>
                            )}
                            <label htmlFor="floatingPassword">Mật khẩu</label>
                        </div>
                        <div className="form-check text-start my-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="remember-me"
                                id="flexCheckDefault"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                            >
                                Nhớ tài khoản ?
                            </label>
                        </div>
                        <div className="mb-3">
                            <Link
                                to={"/sign-in"}
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                            >
                                Đã có tài khoản ? Đăng nhập ngay
                            </Link>
                        </div>
                        <button
                            className="btn btn-primary w-100 py-2"
                            type="submit"
                        >
                            Đăng ký
                        </button>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default SignUp;
