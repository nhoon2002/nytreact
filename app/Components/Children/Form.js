// Include React
var React = require("react");

// Form is the main component. It includes the banner and form element
var Form = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { term: "", startYear: "", endYear: "" };
  },

  // This function will respond to the user input
  handleChange: function(event) {
    // Here we create syntax to capture any change in text to the query terms (pre-search).
    // See this Stack Overflow answer for more details:
    // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  // When a user submits...
  handleSubmit: function(event) {
    // preventing the form from trying to submit itself
    event.preventDefault();
    // Set the parent to have the search term
    this.props.setTerm(this.state.term, this.state.startYear, this.state.endYear);


    // Clearing the input field after submitting
    this.setState({ term: "", startYear:"", endYear:"", });
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          	<h3 className="panel-title">
               <strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong>
            </h3>
        </div>

        <div className="panel-body">

          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label>Search Term:</label>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange function.
              */}
              <input
                type="text"
                value={this.state.term}
                className="form-control"
                id="term"
                onChange={this.handleChange}
                required
              />

            </div>

            <div className="form-group">
               <label>Start Year (Optional):</label>
               <input
                  type="text"
                  className="form-control"
                  id="startYear"
                  value={this.state.startYear}
                  onChange={this.handleChange}
               />
            </div>

            <div className="form-group">
               <label>End Year (Optional):</label>
               <input
                type="text"
                className="form-control"
                id="endYear"
                value={this.state.endYear}
                onChange={this.handleChange}
               />

            </div>


            <br />
            <button
               className="btn btn-default"
               type="submit"
               id="runSearch"
               >
                  <i className="fa fa-search"></i>Search
            </button>
            <button
               className="btn btn-default"
               type="button"
               id="clearAll"
               >
                  <i className="fa fa-trash"></i> Clear Results
            </button>
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
