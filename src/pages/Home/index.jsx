import React, { Component } from 'react';
import {
  Container, Row, Col
} from 'reactstrap';
import httpClient from '../../actions/httpClient';
import post from '../../actions/post';
import notification from '../../actions/notification';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import CardPost from '../../components/CardPost';
import CommentContext from '../../contexts/CommentContext';
import LikeContext from '../../contexts/LikeContext';
import './Home.scss';

class Timeline extends Component {
  constructor(props){
    super(props);
    this.state = {
      comment: '',
      posts: [],
      likes: [],
      userLikes: [],
      notifications: []
    }
    this.onCommentPost = this.onCommentPost.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.onLikePost = this.onLikePost.bind(this);
    this.onUnLikePost = this.onUnLikePost.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  onCommentPost(data){
    const idPost = data.idPost
    const currentState = this;
    post.commentPost(data).then(comment => {
      let {posts} = currentState.state;
      let indexPost = posts.findIndex(post => post._id === idPost);
      let post = JSON.stringify(posts[indexPost]);
      post = JSON.parse(post);
      post.comments.push(comment);
      currentState.setState({
        comment: '',
        posts: [...posts.slice(0, indexPost), post, ...posts.slice(indexPost + 1)]
      });
    });
  }

  handleInput(event){
    const value = event.target.value;
    this.setState({
        comment: value
    });
  }

  onLikePost(idPost){
    const userId = httpClient.getCurrentUser()._id; //user's post
    if(!userId) return;
    const currentState = this;
    post.likePost({idPost: idPost}).then(like => {
      if(like){
        let { userLikes, likes, notifications} = currentState.state;
        // notification.sendNotify({userId: userId, content:'Da thich anh cua ban'});
        currentState.setState({
          likes: [...likes, like],
          userLikes: [...userLikes, like]
        });
      }
    });
  }

  onUnLikePost(idPost){
    const currentState = this;
    post.dislikePost({idPost: idPost}).then(success => {
      if(success){
        let { userLikes, likes } = currentState.state;
        let indexInLikes = likes.findIndex(like => like.postId === idPost);
        let indexInUserLikes = userLikes.findIndex(like => like.postId === idPost);
        currentState.setState({
          likes: [...likes.slice(0, indexInLikes), ...likes.slice(indexInLikes + 1)],
          userLikes: [...userLikes.slice(0, indexInUserLikes), ...userLikes.slice(indexInUserLikes + 1)]
        });
      }
    });
  }

  logOut() {
    if(httpClient.logOut()){
      this.props.history.push('/login');
    }
  }
  componentDidMount(){
    let currentComponent = this;
    post.getAllPost().then(posts => {
      if(posts){
        currentComponent.setState({
          posts: posts
        });
      }
    })
    post.getAllLike().then(likes => {
      if(likes){
        currentComponent.setState({
          likes: likes
        });
      }
    })
    post.getAllLikeBelongsUser().then(likes => {
      if(likes){
        currentComponent.setState({
          userLikes: likes
        });
      }
    })
    // const userId = httpClient.getCurrentUser()._id;
    // notification.getAllNotificationByUser(userId).then(notifications => {
    //   if(notifications){
    //     currentComponent.setState({
    //       notifications: notifications
    //     });
    //   }
    // })
  }

  render(){
    const { posts, likes, comment, userLikes, notifications} = this.state;
    return (
      <>
        <Header />
        <div className="main">
          <Container>
            <Row>
              <Col xs="8">
                <CommentContext.Provider
                  value={{
                    onCommentPost: this.onCommentPost
                  }}
                  >
                  <LikeContext.Provider
                    value={{
                      onUnLikePost: this.onUnLikePost,
                      onLikePost: this.onLikePost
                    }}
                  >
                  {posts.map(post =>
                    <CardPost
                      isLike={userLikes.some(like => like.postId === post._id)}
                      key={post._id}
                      post={post}
                      likes={likes}
                    />
                    )
                  }
                 </LikeContext.Provider>
                 </CommentContext.Provider>
              </Col>
              <Col xs="4">
                <SideBar />
              </Col>
          </Row>
        </Container>
        </div>
      </>
    );
  }
}

export default Timeline;