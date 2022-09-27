const API = "https://jsonplaceholder.typicode.com/comments";

export default function Home(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {props.comments?.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
              <td>{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(API);
  const comments = await res.json();

  return {
    props: { comments },
  };
}
