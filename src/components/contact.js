
const Contact=()=>{
      
    return(
          <div className="m-4, p-4">
            <h1 className=" font-bold">Contact Form</h1>
            <form>
              <input type="text" placeholder="name" className="border border-black p-2 m-4">
              </input>
              <input type="text" placeholder="message" className="border border-black p-2 m-4"></input>
              <button className="border border-black p-2 m-4 rounded">submit</button>

            </form>
          </div>

      )
  

};

export default Contact;
