// let card = document.querySelector(".container")


function setValue(time, tiltle, views, publish) {


    if (views < 1000000) {
        views = views/1000 + "K"
    }
    else if (views < 10000000){
        views = views/1000000 + "M"
    }
    let html = `    
    <div class="card">
    <div class="img">
    <img src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA" alt="">
    <p>${time}</p>
    </div>
    <div class="text">
    <h4>${tiltle}</h4>
    <p>CodeWithHarry • ${views} views • ${publish} month ago</p>
    </div>
    </div>
    `
    document.querySelector(".container").innerHTML += html
}



setValue("11.11", "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #2", 500000, 9)

setValue("55.11", "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #3", 5000000, 3)

