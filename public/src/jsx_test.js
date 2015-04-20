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

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="divider">
        ラベル<hr />
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);
