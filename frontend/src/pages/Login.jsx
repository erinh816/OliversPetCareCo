

const Login = () => {
  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">Hello! 
          <span className="text-primaryColor"> Welcome </span>Back
        </h3>
        
        {/* Login Form */}
        <form className="py-4 mb:py-0">
          <div className="mb-5">
            <input type="email"></input>

          </div>
        </form>

      </div>
    </section>
  )
}

export default Login;
