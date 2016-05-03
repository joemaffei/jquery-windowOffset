(function($) {
  $.fn.windowOffset = function(setter) {
    var windowScroll = {
      left: $(window).scrollLeft(),
      top: $(window).scrollTop()
    }
    if ($.type(setter) !== 'object') {
      return {
        left: this.offset().left - windowScroll.left,
        top: this.offset().top - windowScroll.top
      }
    } else {
      var os = {};
      if (setter.left != null) { os.left = setter.left + windowScroll.left }
      if (setter.top != null) { os.top = setter.top + windowScroll.top }
      this.offset(os);
    }    
  }
}(jQuery));
