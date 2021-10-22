const User=()=>{
    const usser=[
        {
            username:"ahmadrazach",
            avatar:"https://avatars.githubusercontent.com/u/39387314?v=4",
            name:"Ahmed Raza",
            helped:[
            {
            name:"Talha Tanveer",
            avatar:"https://avatars.githubusercontent.com/u/39387314?v=4" ,
            feedback:"Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.",
            designation:"Software Engineer",
            location:"DG Khan",
            }, ],
        },
    ];

    const users=[
        {
            username:"ahmadrazach",
            avatar:"https://avatars.githubusercontent.com/u/39387314?v=4",
            name:"Ahmed Raza",
            helped:[
            {
            name:"Talha Tanveer",
            avatar:"https://avatars.githubusercontent.com/u/39387314?v=4",
            },
            {
              name:"Hassan Zafar",
              avatar:"https://avatars.githubusercontent.com/u/28758216?s=200&v=4",
            },
            {
              name:"Hassan Zafar",
              avatar:"https://avatars.githubusercontent.com/u/28758216?s=200&v=4",
            },
            {
              name:"Hassan Zafar",
              avatar:"https://avatars.githubusercontent.com/u/28758216?s=200&v=4",
            },
            {
              name:"Hassan Zafar",
              avatar:"https://avatars.githubusercontent.com/u/28758216?s=200&v=4",
            },
            {
              name:"Hassan Zafar",
              avatar:"https://avatars.githubusercontent.com/u/28758216?s=200&v=4",
            }
        ],
        },
    ];
    return(
        <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
        <form className="relative ">
        <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
        </svg>
        <input className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" aria-label="Search person" placeholder="Search Person" />
      </form>
      
                    <div>
                    <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                        <img className="object-contain w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://avatars.githubusercontent.com/u/39387314?v=4" alt="" width="384" height="512"/>
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-lg font-semibold">
                            "Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny."
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-cyan-600">
                            Ahmed Raza
                            </div>
                            <div className="text-gray-500">
                            Staff Engineer
                            </div>
                        </figcaption>
                        </div>
                    </figure>
                </div>
      </section>
      
    );
}

export default User;