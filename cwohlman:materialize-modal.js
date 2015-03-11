// Write your package code here!
Template._makeModal = function (options) {
  if (!_.isObject(options))
    throw new Error('_makeModal requires options');

  _.defaults(options, {
    template: "_modalAlert"
    , layoutTemplate: "_modalLayoutOk"
    , data: {
      message: "Hi"
    }
  });

  var originalCloseCallback = options.complete;

  options.complete = function () {
    $modal.remove();
    if (typeof originalCloseCallback === "function")
      originalCloseCallback.apply(this, arguments);
  };

  var template = Template[options.template];
  var layoutTemplate = Template[options.layoutTemplate];

  layoutTemplate.helpers({
    yield: function () {
      return template;
    }
  });

  var $modal = $(Blaze.renderWithData(layoutTemplate, options.data, $('body')[0]).firstNode());

  Meteor.setTimeout(function () {
    $modal.openModal(_.omit(options, 'data', 'template', 'layoutTemplate'));
  }, 100);
};