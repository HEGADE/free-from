type ErrProps = {
  message: string;
};

const errorStyle = {
  color: "red",
  width: "100%",
};

const Error = ({ message }: ErrProps) => {
  return (
    <>
      {message ? (
        <div
          style={{
            width: errorStyle.width,
          }}
        >
          <p
            style={{
              color: errorStyle.color,
            }}
          >
            {message}
          </p>
        </div>
      ) : null}
    </>
  );
};

export { Error };
