require('dotenv').config()
const express = require("express");
const app = express();
const port = 4000;

const githubData={
  "login": "Talhaaltaf1320",
  "id": 127618327,
  "node_id": "U_kgDOB5tNFw",
  "avatar_url": "https://avatars.githubusercontent.com/u/127618327?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Talhaaltaf1320",
  "html_url": "https://github.com/Talhaaltaf1320",
  "followers_url": "https://api.github.com/users/Talhaaltaf1320/followers",
  "following_url": "https://api.github.com/users/Talhaaltaf1320/following{/other_user}",
  "gists_url": "https://api.github.com/users/Talhaaltaf1320/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Talhaaltaf1320/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Talhaaltaf1320/subscriptions",
  "organizations_url": "https://api.github.com/users/Talhaaltaf1320/orgs",
  "repos_url": "https://api.github.com/users/Talhaaltaf1320/repos",
  "events_url": "https://api.github.com/users/Talhaaltaf1320/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Talhaaltaf1320/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "TechMystic",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "✨ Full Stack Developer ✨\r\nCrafting seamless, scalable solutions and building the digital world with the magic of code.",
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-03-11T16:47:38Z",
  "updated_at": "2025-08-11T09:29:29Z"
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/twitter', (req,res)=>{
res.send("talhaaltafcom")
})

app.get("/login",(req,res)=>{
res.send('<h1>This is the H1 heading </h1>')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>this is h2 heading </h2>")
})

app.get('/github',(req ,res)=>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
