import Link from "next/link";
import { getPosts } from "../lib/post";

export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
};

const IndexPage = (props) => {
  console.log(props);
  return (
    <>
      <>
        <title>Home - My blog</title>
      </>
      <main>
        <h1>My Blog's</h1>
        <ul>
          {props.posts.map((post, index) => (
            <li key={index}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default IndexPage;
