import httpClient from './httpClient';

httpClient.getAllPost = function(){
    return this({method:"get", url:"https://6hc5k.sse.codesandbox.io/api/posts"})
                .then(response => {
                    if(response.data.success){
                        return response.data.posts;
                    }else{
                        return false;
                    }
                })
}

httpClient.getAllLike = function(){
    return this({method:"get", url:"https://6hc5k.sse.codesandbox.io/api/likes"})
                .then(response => {
                    if(response.data){
                        return response.data;
                    }else{
                        return false;
                    }
                })
}


httpClient.getAllLikeBelongsUser = function(){
    return this({method:"get", url:"https://6hc5k.sse.codesandbox.io/api/likes/user"})
                .then(response => {
                    if(response.data){
                        return response.data;
                    }else{
                        return false;
                    }
                })
}

httpClient.likePost = function(data){
    return this({method:"post", url:"https://6hc5k.sse.codesandbox.io/api/likes/like", data: data})
                .then(response => {
                    if(response.data.success){
                        return response.data.like;
                    }else{
                        return false;
                    }
                })
}

httpClient.dislikePost = function(data){
    return this({method:"post", url:"https://6hc5k.sse.codesandbox.io/api/likes/dislike", data: data})
                .then(response => {
                        return response.data.success;
                })
}

httpClient.commentPost = function(data){
    return this({method:"post", url:"https://6hc5k.sse.codesandbox.io/api/posts/comment", data: data})
                .then(response => {
                    if(response.data.success){
                        return response.data.comment;
                    }
                    return false;
                })
}

export default httpClient;