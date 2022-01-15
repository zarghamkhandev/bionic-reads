import type { NextPage } from "next";
import Layout from "../../components/Layout";
import { getAllPosts, getPost } from "../../helpers/backend";
import { WPPost } from "../../types";
interface Props {
  post: WPPost;
}

{
  /* <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div> */
}

const Blog: NextPage<Props> = ({ post }) => {
  return (
    <Layout>
      <div className="container w-full px-5 py-24 mx-auto lg:px-32">
        <div className="flex flex-col w-full mx-auto mb-2 prose text-left prose-md">
          <div className="mb-5 border-b border-gray-200">
            <div className="flex flex-wrap items-baseline -mt-2">
              <h5>12-03-2021</h5>
              <p className="mt-1 ml-2">Transitions</p>
            </div>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl title-font">
            Page transitions are a fundamental part of website navigation and
            user experience.
          </h1>
          <div
            className="mt-8 text-base leading-relaxed text-gray-700 "
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps({ params }: any) {
  const post = await getPost(params.id);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((item) => ({
    params: {
      id: item.id + "",
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}
