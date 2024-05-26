document.addEventListener("DOMContentLoaded",function(){

    const userProfile =
    {
        name:"John Doe",
        username:"johndoe",
        email:"johndoe@example.com",
        bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        avatar:"https://via.placeholder.com/150"
    }
    const userPosts =  [
        {title: "Post 1", body: "This is the body of post 1." },
        { title: "Post 2", body: "This is the body of post 2." },
        { title: "Post 3", body: "This is the body of post 3." }
    ]

    const profileDiv = document.getElementById("profile")
    profileDiv.innerHTML=
    `
    <img src="${userProfile.avatar}" alt="">
    <h2>${userProfile.name} (@${userProfile.username})</h2>
    <p>Bio: ${userProfile.bio}</p>
    `

    const postsDiv = document.getElementById("posts")
    userPosts.forEach(post =>{
        const postDiv= document.createElement("div")
        postDiv.className="post"
        postDiv.innerHTML =
        `<h3>${post.title}</h3>
        <p>${post.body}</p>`
        postsDiv.appendChild(postDiv)
    })




})