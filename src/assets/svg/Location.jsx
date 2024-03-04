import * as React from "react";

function Location(props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8 0a5 5 0 00-5 5c0 5 5 11 5 11s5-6 5-11a5 5 0 00-5-5zm0 8.063a3.063 3.063 0 110-6.126 3.063 3.063 0 010 6.126zM6.063 5a1.938 1.938 0 113.876 0 1.938 1.938 0 01-3.876 0z"
      />
    </svg>
  )
}

export default Location;