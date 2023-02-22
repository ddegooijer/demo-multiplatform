const Slug = ({ params }: { params: { site: string; slug: string } }) => {
  return <>{JSON.stringify(params)}</>;
};

export default Slug;
