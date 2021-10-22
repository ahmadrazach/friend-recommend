import HelperCard from "../components/HelperCard";
const Home=()=>{
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

users[0].helped=[...users[0].helped,...users[0].helped];
users[0].helped=[...users[0].helped,...users[0].helped];
users[0].helped=[...users[0].helped,...users[0].helped];
    return(
        <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
    <header className="flex items-center justify-between">
    <form className="relative">
      <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
      </svg>
      <input className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" aria-label="Search person" placeholder="Search Person" />
    </form>
      <button className="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2">
        <svg className="group-hover:text-light-blue-600 text-light-blue-500 mr-2" width="12" height="20" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"/>
        </svg>
        New
      </button>
    </header>

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
    {users.map((user)=>{
    return (<HelperCard user={user} />);
    })}
     
    </ul>
  </section>
    )
}
export default Home;