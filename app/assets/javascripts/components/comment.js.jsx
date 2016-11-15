var Comment = React.createClass({
  propTypes: {
    author: React.PropTypes.string,
    body: React.PropTypes.string,
    rank: React.PropTypes.integer
  },

  render: function() {
    return (
      <div>
        <p>{this.props.author}</p>
        <p>{this.props.body}</p>
        <p>{this.props.rank}</p>
      </div>
    );
  }
});
