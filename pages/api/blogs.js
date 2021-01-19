import sanityClient from "./client";

export async function getBlogData() {
  console.log("hello");
  sanityClient.fetch(`*[_type == "post"]{title}`).then((data) => {
    return data.json();
  });
}
