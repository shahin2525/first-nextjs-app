const page = ({ params, searchParams }) => {
  console.log(params, searchParams);
  return (
    <div>
      <h1>dynamic route {params.newsId}</h1>
    </div>
  );
};

export default page;
