// Include React
var React = require("react");

// Here we include all of the sub-components
var Form = require("./children/Form");
var Results = require("./children/Results");

// Helper Function
var helpers = require("./utils/helpers");

// This is the main component
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return { searchTerm: "", searchStartYear:"", searchEndYear:"",  results: "" };
  },

  // componentDidUpdate is a lifecycle method that will get run every time the component updates it's
  // props or state
  componentDidUpdate: function(prevProps, prevState) {
    // If we have a new search term, run a new search
    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log("UPDATED");

      helpers.runQuery(this.state.searchTerm, this.state.searchStartYear, this.state.searchEndYear).then(function(data) {
        if (data !== this.state.results) {
          console.log(data);
          this.setState({ results: data.snippet });
        }
        // This code is necessary to bind the keyword "this" when we say this.setState
        // to actually mean the component itself and not the runQuery function.
      }.bind(this));
    }
  },
  setTerm: function(term, startYear, endYear) {
    this.setState({ searchTerm: term, searchStartYear: startYear, searchEndYear: endYear });
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="container">
         <div className="jumbotron">
      		<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
      	</div>

         <div className="row">

             <div className="col-sm-12">
      				<Form setTerm={this.setTerm} />
             </div>

             <div className="col-sm-12">
                     <Results address={this.state.results} />
             </div>

         </div>
      </div>

    );
  }
});


module.exports = Main;
