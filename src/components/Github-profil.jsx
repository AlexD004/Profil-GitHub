import { useEffect, useState } from "react";

function GithubProfil() {

    const [userData, setuserData] = useState({
        userName: "",
        userDescription: "",
        avatarURL: "",
        followers: 0,
        following: 0,
        createdAt: "",
        updatedAt: "",
        reposURL: ""

    });

    useEffect( () => {
        fetch("https://api.github.com/users/github-john-doe")
            .then( (res) => res.json() )
            .then(
                (result) => {
                    console.log(result);
                    setuserData({ 
                        ...userData,
                        userName : result.name,
                        avatarURL : result.avatar_url,
                        userDescription : result.bio,
                        followers : result.followers,
                        following : result.following,
                        createdAt : result.created_at,
                        updatedAt : result.updated_at,
                        reposURL : result.repos_url
                     });
                },
                (error) => {
                    console.log(error);
                }
            );
    }, []);

    return (
      <div className="GithubProfil">
        <h1>Github user</h1>
        <h2>{userData.userName}</h2>
        <img src={userData.avatarURL} alt="Photo of the user" width="200"></img>
        <p>{userData.userDescription}</p>
        <p>Abonnées : {userData.followers}</p>
        <p>Abonnements : {userData.following}</p>
        <p>Créé le : {userData.createdAt}</p>
        <p>Modifié le : {userData.updatedAt}</p>
        <p>URL repositories : <a href={userData.reposURL}>{userData.reposURL}</a></p>
      </div>
    );
  }
  
  export default GithubProfil;