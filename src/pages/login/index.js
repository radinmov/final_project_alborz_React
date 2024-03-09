import useTitle from "../../componets/Hook";
import { Style } from "./Style";

export default function Login() {
    const title = useTitle("Login");
    return (
        <Style>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="container_inner  bg-light p-4">
                    <h1 className="text-center">Login page </h1>
                    <hr />      
                    <div className="inputs text-center" >
                        <input className="w-75 border-0 mt-4 " placeholder="please Enter your userName" type="text" />
                        <input className="w-75 border-0 mt-4" placeholder="please Enter your passcode" type="text" />
                    </div>
                    <h3 className="fs-5 mt-4">Forget Password?</h3>
                    <div className="buttons d-flex justify-content-center">
                        <button className="buttton_inner  border-0 w-75 rounded-pill ">Login</button>
                    </div>
                    <h5 className="fw-bold text-center fst-italic mt-5">codeAcademy-Develop</h5>
                </div>
            </div>
        </Style>
    );
}
