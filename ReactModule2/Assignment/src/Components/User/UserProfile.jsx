function UserProfile({userName,userEmail}){
    return(
        <div className="userContainer">
            <p className=" user userName"> User Name: {userName}</p>
            <p className=" user userEmail">User Email: {userEmail}</p>
        </div>
    )
}
export default UserProfile;