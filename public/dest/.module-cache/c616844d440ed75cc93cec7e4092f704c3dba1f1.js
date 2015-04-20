/*
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="divider">
        ラベル<hr />
      </div>
    );
  }
});
*/

var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return
      React.createElement("div", {className: "divider"}, 
        "ラベル", React.createElement("hr", null)
      )
  }
});


React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
