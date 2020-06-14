import React, { Component } from 'react';
import {
  Container,
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle,
  Navbar, Nav, NavItem,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { Link } from "react-router-dom";
import Comment from './Comment';
import httpClient from '../actions/httpClient';
import post from '../actions/post';
import notification from '../actions/notification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'

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
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.onLikePost = this.onLikePost.bind(this);
    this.onUnLikePost = this.onUnLikePost.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  handleKeyUp(event){
    if(event.keyCode === 13){
      const content = this.state.comment;
      if(!content.trim()){
        return;
      }
      let idPost = event.currentTarget.dataset.id;
      const data = {
        idPost: idPost,
        content: content
      }
      const currentState = this;
      const accessToken = localStorage.getItem('token');
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
  }

  handleInput(event){
    const value = event.target.value;
    this.setState({
        comment: value
    });
  }

  onLikePost(event){
    const idPost = event.currentTarget.dataset.id;
    const userId = event.currentTarget.dataset.userId; //user's post
    const accessToken = localStorage.getItem('token');
    const currentState = this;
    post.likePost({idPost: idPost}).then(like => {
      if(like){
        let { userLikes, likes, notifications} = currentState.state;
        notification.sendNotify({userId: userId, content:'Da thich anh cua ban'});
        currentState.setState({
          likes: [...likes, like],
          userLikes: [...userLikes, like]
        });
      }
    });
  }

  onUnLikePost(event){
    let idPost = event.currentTarget.dataset.id;
    const accessToken = localStorage.getItem('token');
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
  logOut(event) {
    if(httpClient.logOut()){
      this.props.history.push('/login');
    }
  }
  componentDidMount(){
    let currentComponent = this;
    const userId = httpClient.getCurrentUser()._id;
    post.getAllPost().then(posts => {
      if(posts){
        currentComponent.setState({
          posts: posts
        });
      }else{
        currentComponent.props.history.push('/login');
      }
    })
    post.getAllLike().then(likes => {
      if(likes){
        currentComponent.setState({
          likes: likes
        });
      }else{
        currentComponent.props.history.push('/login');
      }
    })
    post.getAllLikeBelongsUser().then(likes => {
      if(likes){
        currentComponent.setState({
          userLikes: likes
        });
      }else{
        currentComponent.props.history.push('/login');
      }
    })
    notification.getAllNotificationByUser(userId).then(notifications => {
      if(notifications){
        currentComponent.setState({
          notifications: notifications
        });
      }
    })
  }

  render(){
    const { posts, likes, comment, userLikes, notifications} = this.state;
    return (
      <>
        <Container fluid={true}>
          <Navbar color="light" light expand="md">
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle tag="a" className="nav-link" caret>
                  Noti
                </DropdownToggle>
                <DropdownMenu>
                  {
                    notifications.map(noti =>
                        <DropdownItem tag="a" href="/blah" active>
                          <strong className="mr-1">{noti.user.username}</strong>
                            {noti.content}
                        </DropdownItem>
                      )
                  }
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to="posts/create" className="mr-2">Create Post</Link>
                <a href="#" onClick={this.logOut}>Log out</a>
              </NavItem>
            </Nav>
          </Navbar>
        </Container>
        <Container>
        {posts.map(post =>
            <Card key={ post._id } className="mt-5">
              <CardImg top width="100%" src={ post.imageUrl} alt="Card image cap" />
              <CardBody>
                <CardTitle>{post.user.username}:{ post.caption }</CardTitle>
                <span className="mr-1">{ likes.filter(like => like.postId === post._id).length }</span>
                {
                  userLikes.some(like => like.postId === post._id)
                  ? <FontAwesomeIcon data-id={post._id} onClick={this.onUnLikePost} icon={faHeartSolid} />
                  : <FontAwesomeIcon data-id={post._id} data-user-id={post.user._id} onClick={this.onLikePost} icon={faHeartRegular} />
                }
                <hr/>
                {
                  post.comments && post.comments.map((comment, index) =>
                    <CardSubtitle className="p-2" key={index}>{comment.username}: {comment.content}</CardSubtitle>
                  )
                }
                <Comment idPost={post._id} comment={comment} handleInput={this.handleInput} handleKeyUp={this.handleKeyUp}/>
              </CardBody>
            </Card>
        )}
        </Container>
      </>
    );
  }
}

export default Timeline;