import httpClient from './httpClient';

httpClient.getAllPost = function(){
    return this({method:"get", url:"http://localhost:8080/api/posts"})
                .then(response => {
                    if(response.data.success){
                        return response.data.posts;
                    }else{
                        return false;
                    }
                })
}

httpClient.getAllLike = function(){
    return this({method:"get", url:"http://localhost:8080/api/likes"})
                .then(response => {
                    if(response.data){
                        return response.data;
                    }else{
                        return false;
                    }
                })
}


httpClient.getAllLikeBelongsUser = function(){
    return this({method:"get", url:"http://localhost:8080/api/likes/user"})
                .then(response => {
                    if(response.data){
                        return response.data;
                    }else{
                        return false;
                    }
                })
}

httpClient.likePost = function(data){
    return this({method:"post", url:"http://localhost:8080/api/likes/like", data: data})
                .then(response => {
                    if(response.data.success){
                        return response.data.like;
                    }else{
                        return false;
                    }
                })
}

httpClient.dislikePost = function(data){
    return this({method:"post", url:"http://localhost:8080/api/likes/dislike", data: data})
                .then(response => {
                        return response.data.success;
                })
}

httpClient.commentPost = function(data){
    return this({method:"post", url:"http://localhost:8080/api/posts/comment", data: data})
                .then(response => {
                    if(response.data.success){
                        return response.data.comment;
                    }
                    return false;
                })
}

httpClient.createPost = function(data){
    return this({method:"post", url:"http://localhost:8080/api/posts/create", data: data})
                .then(response => {
                    console.log(response)
                    if(response.data.success){
                        return response.data.comment;
                    }
                    return false;
                })
}

httpClient.getPostByUser = function(userName){
    return this({method:"get", url:"http://localhost:8080/api/posts/" + userName})
                .then(response => {
                    if(response.data.success){
                        return response.data.posts;
                    }
                    return false;
                })
}



export default httpClient;