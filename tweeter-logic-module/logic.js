const Tweeter = function () {
    let posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    const getPosts = () => posts
    
    const addPost = text => {
        let post = {}
        post["text"] = text
        post["id"] = "p" + (posts.length+1)
        post["comments"] = []
        posts.push(post)
    }

    const removePost = function (postID) {
        for (const indx in posts) {
            if(posts[indx]["id"] == postID){
                posts.splice(indx,1)
            }
        }
    }

    const getLastIndexOfComment = () =>{
        for (let i = posts.length-1 ; i>=0; i--) {
            let comments_for_post  = posts[i]["comments"]
            let size_comments = comments_for_post.length
            if(size_comments > 0){
                let comments_index = comments_for_post[size_comments-1]["id"].slice(1)
                return comments_index
            }
        }
    }
    
    const addComment = function(text,postID) { 
        
        let ind = getLastIndexOfComment()

        for (const i in posts) {
            if(posts[i]["id"] == postID ){
                let comment = {}
                let index = parseInt(ind )+ 1
                comment["id"] = "c" + index
                comment["text"] = text
                posts[i]["comments"].push(comment)
            }
        }
    }

    const removeComment = function(postID , commentID){
        for (const indx in posts) {
            if(posts[indx]["id"] == postID){
                let comms = posts[indx]["comments"]
                for (const key in comms) {     
                    if(comms[key]["id"] == commentID){
                        comms.splice(key,1)
                    }
                }
            }
        }
    }

    return {
        posts: posts,
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}
