import './User.css'

function User({ avatar, name, email, isPremium, age }) {
  return (
    <div className='user-box'>
      <img src={avatar} />
      <h2>{name}</h2>
      <p>{email}</p>
      {isPremium && <p className='premium'>PREMIUM USER</p>}
      {age >= 18 && <p>ELIGIBILE TO VOTE</p>}
    </div>
  );
}

export default User;