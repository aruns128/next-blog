import { getPost, getSlugs } from "../../lib/post";

// only rendered in server side
export const getStaticPaths = async () => {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

// only rendered in server side
export const getStaticProps = async ({ params: { slug } }) => {
  const post = await getPost(slug);
  return {
    props: {
      post,
    },
  };
};

// only rendered in client side
const PostPage = ({ post }) => {
  const pageTitle = post.title;
  return (
    <>
      <>
        <title>{pageTitle} - My blog</title>
      </>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
};

export default PostPage;
