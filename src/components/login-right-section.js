import "../styles/login-right-section.css"
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginRightSec() {
    const navigate = useNavigate();

    const formik = useFormik(
        {
            initialValues: {
                employeeId: "",
                password: ""
            },
            onSubmit: (values) => {
                axios.post(`http://localhost:8080/login-valid?userId=${formik.values.employeeId}&password=${formik.values.password}`)
                    .then((result) => {
                        console.log(result);
                        navigate("/homepage");
                    })
                    .catch((error) => {
                        alert("invalid credentials")

                    });
            }
        }
    )


    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="position-relative py-0 my-0 px-1" style={{ height: "100vh" }}>
                <div className="bg bg-light d-flex flex-column  position-absolute bottom-0  p-3 my-0 rounded-top-3" style={{ height: "80vh", width: "25vw", }}>

                    <p className="mb-0 wel-font">welcome</p>
                    <h3 className="login-font mb-3"><span className="text text-primary login-font">Login</span> to your account</h3>


                    <div className="d-flex flex-column gap-3">
                        <TextField
                            id="employee-id"
                            label="Employee Id"
                            value={formik.values.employeeId}
                            onChange={formik.handleChange}
                            name="employeeId"
                            variant="outlined"
                            size="small"
                            sx={{
                                "& .MuiInputBase-root": {
                                    fontSize: "15px",
                                    height: "40px",
                                },
                                "& .MuiInputLabel-root": {
                                    fontSize: "15px",
                                }
                            }}
                        />

                        <TextField
                            id="employee-id"
                            label="Password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            variant="outlined"
                            size="small"
                            type="password"
                            sx={{
                                "& .MuiInputBase-root": {
                                    fontSize: "15px",
                                    height: "40px",
                                },
                                "& .MuiInputLabel-root": {
                                    fontSize: "15px",
                                }
                            }}

                        />

                        <Button
                            variant="contained"
                            size="small"
                            sx={{ fontSize: "12px", padding: "8px 15px", minWidth: "80px" }}
                            type="submit"
                        >
                            Login
                        </Button>
                    </div>

                    <div className="mt-auto text-center">
                        <p className="pass-reset-text" >Cant login <a href="" className="password-reset-link">Reset Password here</a></p>
                    </div>



                </div>
            </div>


            {/* <div className="position-relative  " style={{ height: "100vh" }}></div> */}
        </form>

    );
}
export default LoginRightSec;