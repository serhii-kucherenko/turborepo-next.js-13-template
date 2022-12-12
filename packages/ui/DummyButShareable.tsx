import * as React from "react";

interface IProps {
  appName: string;
}

export const DummyButShareable = ({ appName }: IProps) => {
  return (
    <div>
      <p>
        You called me from <b>{appName}</b> app
      </p>
    </div>
  );
};
