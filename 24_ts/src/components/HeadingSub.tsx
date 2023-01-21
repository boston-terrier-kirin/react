type HeadingSubProps = {
  children: string;
};

const HeadingSub = (props: HeadingSubProps) => {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  );
};

export default HeadingSub;
