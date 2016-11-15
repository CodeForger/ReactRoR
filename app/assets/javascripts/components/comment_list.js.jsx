var CommentList = React.createClass({
  render: function() {
    return (
      <div>
        {JSON.parse(this.props.comments).map(function(comment, idx) {
          return <Comment key={idx} {... comment} />;
        })}
      </div>
    );
  }
});
