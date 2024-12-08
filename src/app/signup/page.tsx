export default function SignUp(){
    return(
        <div className="h-screen"> 
        <h1 className="xs:text-2xl xs:text-center xs:mt-36 xs:font-bold">Create an Account</h1>
        <form className="space-y-6 px-4 max-w-sm mx-auto font-[sans-serif] mt-16">
      <div className="flex items-center">
        <label className="text-gray-400 w-36 text-sm">Name</label>
        <input type="text" placeholder="Enter your name"
          className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-white" />
      </div>

      <div className="flex items-center">
        <label className="text-gray-400 w-36 text-sm">Email</label>
        <input type="email" placeholder="Enter your email"
          className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-white" />
      </div>

      <div className="flex items-center">
        <label className="text-gray-400 w-36 text-sm">Phone No.</label>
        <input type="number" placeholder="Enter your phone no"
          className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-white" />
      </div>

      <div className="flex items-center">
        <label className="text-gray-400 w-36 text-sm">State</label>
        <input type="text" placeholder="Enter your state"
          className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-white" />
      </div>

      <button type="button"
        className="!mt-8 px-6 py-2 w-full bg-[#333] hover:bg-[#444] text-sm text-white mx-auto block">Sign up</button>
    </form>
    </div>
    )
}