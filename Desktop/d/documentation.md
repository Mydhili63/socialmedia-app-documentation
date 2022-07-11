# Social media Flatform where connecting each other

> ## Problem Statement

#### To create a application with the below features

<br>

#### Features

- Login/Signup
  - Users should be able to signup with their basic details
    - name, mobile number, email, password, DOB, gender, profile picture,Username,Password
  - After signing up, users must be able to login with their username and password
    (while logging in database check with those username,password.if they are correct then user can able to login)
- After logging in users must be taken to the home page ( posts page )
- Should have a Posts page

  - Users can see their post and their friends posts here
  - Users can add/edit/delete their own posts
    - Post can have images, description, name, hashtags
  - Users can comment/like their posts and other user's posts

- Should have a profile page
  - user can see their profile picture(while uploading user put a restriction whether the picture is jpg or png only)
  - User can view their own profile details here
  - Users should be able to edit their profile details
    - name, mobile number, DOB, gender
- Should have a Friends page
  - Users should be able to view their list of friends
  - Users should have the ability to see people who are not friends, and send them friend request
  - Users should be able accept friend requets from others
- theme changing option like dark/light

<br>

## Proposed solution

#### Build a application which will contain 3 parts. Frontend ( What the user will interact with ), Backend ( Where we will serve content for our frontend ) and Database ( Where we will store data necessary for our application ).

<br>

## Architectural diagram

### For Signuppage

![signuppage](signuppage.png "Title")

### For Loginpage

![loginpage](loginpage.png "Title")

### For Homepage

![ homepage ](homepage.png "Title")

### For Profilepage

![profilepage](profilepage.png "Title")

### For Friendpage

![friendpage](friendpage.png "Title")

### For Friendrequestpage

![ Friendrequestpage ](friendrequestpage.png "Title")
<br>

## Technologies used

- NodeJs
  - It can be used as both frontend and backend.By using nodejs we can connect the database to the app.We are able to see the home page(where the posts),profile page(details about the user),able to delete the posts,able to add new posts etc.We connect css page to change the colourful view of the app.We use routes to go other pages and also used automatic redirecting/rendering to homepage.To use nodejs we need to have inbuilt-packages and modules.
- ReactJs
  - Reactjs used for building user interfaces based on UI components.It used for frontend purpose.Its aim is to allow developers to easily create fast user interfaces for websites and applications alike.By using react we can go to the which page we want by using routes and id which is we provided.In those pages we are able to add the information,adding pictures etc.we are able to see our provided info here.And we can delete the info which is we provided.By using react we can add css designs,we are able to style and layout web pages.To use Reactjs we need to have inbuilt-packages and modules.
- MongoDb
  - It is used for database purpose.It created schemas which is the information provided in the app.

<br>

## MongoDB Specifications

- MongoDB is an open source NoSQL database management program.
- MongoDB is a tool that can manage document-oriented information, store or retrieve information.
- today as the backend data store of many high-profile businesses and organizations such as Forbes, Facebook, Google, IBM, Twitter, and many more.
- MongoDB can serve diverse sets of data and multiple purposes within a single application.
- JSON is widely used across for frontend and API communication. It only makes sense for the database to use the same protocol.

#### You will find the list of schemas below

<br>

### Users Schema

- what is schema
  - It is the overall description of the database.
  - Schema is same for whole database.
  - Does not change Frequently.
  - Defines the basic structure of the database i.e how the data will be stored in the database.
  - A database schema contains schema objects that may include tables, fields, packages, views, relationships, primary key, foreign key

```
{
    email: string,
    name: string,
    password: string,
    mobile: string,
    Uid:int,
    Gender:string,
    pic:  ,
    username:

}
```

```
{
    {"_id":{"$oid":"62b9590fdb15f7e26a4ddc04"},
    "title":"post",
    "post":"New post",
    "body":"description",
    "createdAt":{"$date":{"$numberLong":"1656314127249"}},
    "updatedAt":{"$date":{"$numberLong":"1656314127249"}},
    "__v":{"$numberInt":"0"}}
}
```

<br>

## NodeJs Specifications

#### You will find the list routes below

<br>

### User Routes

1. #### POST /user/login

Request body -

```

{
email: string, ( Required )
password: string, ( Required, Must be atleast 8 characters )
}

```

Response body ( 200 ) -

```

{
userDetails: {
email: string,
name: string,
mobile: string,
}
}

```

Response body ( 400 ) -

```

{
error: {
password: string, // Example - password: "must be atleast 8 characters"
}
}

```

2. #### user/login/putpost
   Request body -

```

{
pic: jpg or png, ( Required )
}

```

```

Response body ( 200 ) -


{
userDetails: {
email: string,
name: string,
mobile: string,
pic:jpg or png
}
}

{
error: {
pic: jpg or png // Example - pic: "must be jpg or png format only"
}
}

```

### Route parameters

Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34",
"bookId": "8989" }

<br>

### React specifications

- Signup page
  - entering name,mobile number,dob,gender,username,password,login button
- Login Page
  - Feature to enter email,password and login
- Uploading profile page
  - user can upload their pic from thier mobile storage
  - user able to give their preferabble name
- Home page
  - user able to see the posts which he posted and his/her friends posted
  - can like/comment the post
  - can delete their own post
- User details/profile page
  - user able to see their details like name,mobilenumber,dob,gender and logout option
- friend requests page
  - User able to get friend requests and accept friend requests from their friends
- friend page
  - user able to see thier friends posts in their page
