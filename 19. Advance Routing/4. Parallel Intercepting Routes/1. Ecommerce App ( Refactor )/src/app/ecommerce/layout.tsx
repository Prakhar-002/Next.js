const EcommerceLayout = ({
  children,
  product,
}: {
  children: React.ReactNode;
  product: string;
}) => {
  return (
    <div>
      {children}
      {product}
    </div>
  );
};
export default EcommerceLayout;
