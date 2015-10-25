var React = require('react');





var SimpleTestClass = React.createClass({
            getInitialState: function() {
              return {
 
              };
            },
            render: function() {
              return (
                <div id="testPreLoad">
                  some content
                </div>
              );
            }
        });


  var ProjectsLoader = React.createClass({
        getInitialState: function() {
                return {
                };
            },
        _handleImageLoadError: function() {
          console.log("_handleImageLoadError")
        },
        _handleImageLoadSuccess: function() {
          console.log("_handleImageLoadError")
        },
        render: function() {

          var loadingIndicator = (<div>Loading...</div>)
          var images = ["images/brazil1.jpg","images/brazil2.jpg"];

          var Preload = require('react-preload').Preload; 

          return (
            <Preload
              loadingIndicator={loadingIndicator}
              images={images}
              autoResolveDelay={3000}
              onError={this._handleImageLoadError}
              onSuccess={this._handleImageLoadSuccess}
              resolveOnError={true}
              mountChildren={true}
              >
                <SimpleTestClass />
            </Preload>
            )
        }
      });




	   React.render(
          <ProjectsLoader />
          ,
        document.getElementById('container')
      );
