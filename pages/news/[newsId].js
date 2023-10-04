import { useRouter } from "next/react";

function DeatilsPage() {
  const router = useRouter();

  console.log(router.query.newsId);

  return <h1>The Detail Page</h1>;
}

export default DeatilsPage;
