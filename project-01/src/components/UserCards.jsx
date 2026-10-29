function UserCards({ user }) {
  return (
    <section>
      <h1>{user.name.first}</h1>
      <p>{user.email}</p>
      <p>{user.location.country}</p>
    </section>
  );
}

export default UserCards;
