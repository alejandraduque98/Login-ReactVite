import DefaultLayout from "../Layout/DefaultLayout";

export default function Singup(){

    return (
        
        <DefaultLayout>
            <form action="">
            
                <h1>SingUp</h1>

                <label htmlFor="">Name</label>
                <input type="text" />

                <label htmlFor="">UserName</label>
                <input type="text" />

                <label htmlFor="">Pasword</label>
                <input type="Password" />

                <button>CreateUser</button>
            </form>
        </DefaultLayout>  
        
    )
}