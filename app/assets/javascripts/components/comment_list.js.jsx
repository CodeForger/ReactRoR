var CommentList = React.createClass({
  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
  },
  render: function() {
    return (
      <div>
        {Store.comments().map(function(comment, idx) {
          return <Comment key={idx} {... comment} />;
        })}
      </div>
    );
  },
  _onChange: function() {
    this.forceUpdate();
  }
});
