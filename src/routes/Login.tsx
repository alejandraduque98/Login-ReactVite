import DefaultLayout from "../Layout/DefaultLayout";

export default function Login(){

    return(
        <DefaultLayout>
            <form action="">
            
            <h1>Login</h1>

            <label htmlFor="">UserName</label>
            <input type="text" />

            <label htmlFor="">Pasword</label>
            <input type="Password" />

            <button>Login</button>
            </form>
        </DefaultLayout>  
    );
}