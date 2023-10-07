class GitHub {
  async getUserDetails(username = "rishabh1999bhatt") {
    document.querySelector("#search").focus();
    try {
      let response = await fetch(`https://api.github.com/users/${username}`);
      let data = await response.json();
      console.log(data);
      this.createUserCard(data);
    } catch (error) {
      console.log(error);
    }
  }
  createUserCard({
    name,
    avatar_url,
    bio,
    followers,
    following,
    public_repos,
    twitter_username,
    location,
  }) {
    document.querySelector("#main").innerHTML = "";
    let parent_div = document.createElement("div");

    parent_div.setAttribute("class", "parent-container");

    let image_div = document.createElement("div");
    image_div.setAttribute("class", "image-container");
    let image = document.createElement("img");
    image.src = avatar_url;
    image.setAttribute("class", "avatar-image");
    let circle_div = document.createElement("div");
    circle_div.setAttribute("class", "circle-div");
    circle_div.appendChild(image);
    image_div.appendChild(circle_div);

    let information_div = document.createElement("div");
    information_div.setAttribute("class", "information-container");
    let information_container_div = document.createElement("div");
    information_container_div.setAttribute(
      "class",
      "information-container-div"
    );

    let name_div = document.createElement("div");
    name_div.setAttribute("class", "name-div");
    let name_span = document.createElement("span");
    name_span.textContent = name;
    name_div.appendChild(name_span);
    information_container_div.appendChild(name_div);

    let about_div = document.createElement("div");
    about_div.setAttribute("class", "about-div");
    let about_div_span = document.createElement("span");
    about_div_span.textContent = bio;
    about_div.appendChild(about_div_span);
    information_container_div.appendChild(about_div);

    let more_details_div = document.createElement("div");
    more_details_div.setAttribute("class", "more_details-div");

    let div1 = document.createElement("div");
    div1.setAttribute("class", "more-details");
    div1.innerHTML = `<b>Followers</b> :  ${followers}`;
    more_details_div.appendChild(div1);
    let div2 = document.createElement("div");
    div2.setAttribute("class", "more-details");
    div2.innerHTML = `<b>Following</b> :  ${following}`;
    more_details_div.appendChild(div2);
    let div3 = document.createElement("div");
    div3.setAttribute("class", "more-details");
    div3.innerHTML = `<b>Repos</b> :  ${public_repos}`;
    more_details_div.appendChild(div3);
    let div4 = document.createElement("div");
    div4.setAttribute("class", "more-details");
    div4.innerHTML = `<b>Twitter</b> :  ${twitter_username}`;
    more_details_div.appendChild(div4);
    let div5 = document.createElement("div");
    div5.setAttribute("class", "more-details");
    div5.innerHTML = `<b>Location</b> :  ${location}`;
    more_details_div.appendChild(div5);

    information_container_div.appendChild(more_details_div);
    information_div.appendChild(information_container_div);

    parent_div.appendChild(image_div);
    parent_div.appendChild(information_div);

    document.getElementById("main").appendChild(parent_div);
  }
}

let github_object = new GitHub();
github_object.getUserDetails();

document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = document.querySelector("#search").value;
  github_object.getUserDetails(userName);
});
