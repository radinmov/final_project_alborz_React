import useTitle from "../../componets/Hook";
import { Style } from "./Style";

export default function Login() {
    const title = useTitle("Login");
    return (
        <Style>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="container_inner  bg-light p-4">
                    <h1>Login page </h1>
                    <input />
                    <input />
                    <h3>Forget Password?</h3>
                    <button>Login</button>
                    <h5>Alborz_codeAcademy_Develop</h5>
                </div>
            </div>
        </Style>
    );
}
