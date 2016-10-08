import * as React from "react";
import * as ReactDOM from "react-dom";

import { CommentBox } from "./components/CommentBox";

const data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

ReactDOM.render(
    <CommentBox url="/api/comments" pollInterval={5000} />,
    document.getElementById('content')
);