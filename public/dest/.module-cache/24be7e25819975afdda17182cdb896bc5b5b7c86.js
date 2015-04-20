var Comment = React.createClass({displayName: "Comment",
  render: function() {
    return (
      React.createElement("div", {className: "divider"}, 
        "ラベル", React.createElement("hr", null)
      )
    )
  }
});


React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
