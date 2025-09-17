import React, { useEffect, useState } from 'react'

// we get the data as application runs

const YouEffect = () => {
//     const [GithubData, setGithubData] = useState(null)

// async function FetchUserData() {
//     try {
//         const response = await fetch("https://api.github.com/users/HirenSiyodia");
//         const data = await response.json();
//         setGithubData(data);
//     } catch (error) {
//         console.log(error);        
//     }    
// }

// useEffect(() => {
//     FetchUserData();
// },[])

// console.log(GithubData);

const [githubData, setGithubData] = useState(null);

async function FetchUserData() {
    try {
        const response = await fetch("https://api.github.com/users/HirenSiyodia");
        const data = await response.json();
        setGithubData(data);

    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    setTimeout(() => {
        FetchUserData();
    }, 3000);
},[])

console.log(githubData);


  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center font-bold space-y-2 text-3xl bg-slate-100'>
    YouEffect Concept
    </div>
  )
}
export default YouEffect

// useEffect(() => {
//     setTimeout(() => {
//         document.title = "Hi Hiren";
//     }, 3000);
// }, [])