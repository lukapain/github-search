import { useEffect, useState } from "react";
import "./App.css";
import UserImg from "./assets/Oval.png";
import building from "./assets/Shape.png";
interface UserData {
  login: string;
  name: string;
 bio: string;
 avatar_url: string;
 repos_url:string
 location:string
 twitter_username:string
 followers:string
 following:string
 public_repos:string
 company:string
 created_at:string
 url:string
 message:string

}
function App() {
  const [userName, setUserName] = useState("gela");
  const [data, setData] = useState<UserData>({} as UserData);;
  const urlApi = `https://api.github.com/users/${userName}`;
  const fetchApi = async () => {
    const response = await fetch(urlApi);
    const DataJson = await response.json();
    setData(DataJson);
    
  };
  
  useEffect(() => {
    fetchApi();
  }, []);

  const {avatar_url,bio,company,followers,following,name,location,twitter_username,public_repos,url }= data

  return (
    <div className="container">
      <header className="header-comp">
        <h1>devfinder</h1>
        <div className="theme-switch">
          <h4>DARK</h4>
          <span>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z"
                fill="#697C9A"
                fill-rule="nonzero"
              />
            </svg>
          </span>
        </div>
      </header>
      <div className="search-bar">
        <div className="search-in">
          <svg
            height="24"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
            id="search-svg"
          >
            <path
              d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
              fill="#0079ff"
            />
          </svg>
          <span>
            {" "}
            <input
              type="text"
              id="search"
              placeholder="Search GitHub username…"
            />
          </span>
          <span>
            <button className="btn">Search</button>
          </span>
        </div>
      </div>
      {/**main card */}
      <main>
        <div className="main-cont">
          <div className="infos">
            <img src={UserImg} alt="" />
            <div className="name-info">
              <h3>The Octocat</h3>
              <p>@octocat</p>
              <p>Joined 25 Jan 2011</p>
              
            </div>
            
          </div>
          <p id="about">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros.
              </p>
              <div className="info-cont">
          <div className="repos">
              <p id="rep">repos</p>
              <b>8</b>
          </div>
          <div className="followers">
          <p id="fol">followers</p>
          <b>3932</b>
          </div>
          <div className="following">
              <p id="fol-ing">following</p>
              <b>9</b>
          </div>
        </div>
        <div className="privete-infos">
        <div className="location">
        <svg height="20" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z" fill="#4b6a9b"/></svg>
        <span>San Francisco</span>
        </div>
        <div className="url">
        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="#4b6a9b"><path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z"/><path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z"/></g></svg>
        <span><a href="">https://github.blog</a></span>
        </div>
        <div className="social">
        <svg height="18" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z" fill="#4b6a9b"/></svg>
       <span>Not Available</span>
        </div>
        <div className="platform">
        <img src={building} alt="" />
        <span>@github</span>
        </div>
        </div>
        </div>
        
      </main>
    </div>
  );
}

export default App;