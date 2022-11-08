interface Props {
  value: string;
}

const Component = (props: Props) => {

  // Render
  const render = () => {
    return <div className="">Value: {props.value}</div>;
  }

  return render();
};

export default Component;
