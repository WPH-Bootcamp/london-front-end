type ProfileProps = {
  name: string;
  hobby: string;
};

function Profile({ name, hobby }: ProfileProps) {
  return (
    <>
      <h2>Name: {name} </h2>
      <p>Hobby: {hobby}</p>
    </>
  );
}

export default Profile;
