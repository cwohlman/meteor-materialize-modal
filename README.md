Materialize Modals for Meteor
==============

Usage
--------------
```javascript
Template._makeModal({
  // the data context for your modal template:
  data: {
    message: "some message"
  }
  // the name of the template you want to display, doesn't needto have any
  // modal specific markup 
  , template: 'MyContent'
  // the wrapper template, needs to have modal specific markup, there are two
  // default templates: 
  // '_modalLayoutOK' presents an OK button for users to dismiss the modal
  // '_modalLayoutForm' (better named LayoutEmpty) bare minimum modal markup
  , layoutTemplate: '_modalLayoutOk'
  // You may also pass other options to bee passed through to the materialize
  // modal jquery plugin, see http://materializecss.com/modals.html
});
```
