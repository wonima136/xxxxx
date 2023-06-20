var documents = {{ $index | jsonify }};
var index = lunr(function () {
  this.ref('url');
  this.field('title');
  this.field('content');

  documents.forEach(function (doc) {
    this.add(doc);
  }, this);
});

function search(query) {
  var results = index.search(query);

  var $searchResults = $('.search-results');
  $searchResults.empty();

  if (results.length === 0) {
    $searchResults.append('<li>没有找到匹配的结果</li>');
  } else {
    results.forEach(function (result) {
      var item = documents.filter(function (doc) {
        return doc.url === result.ref;
      })[0];

      $searchResults.append('<li><a href="' + item.url + '">' +
        '<h3>' + item.title + '</h3>' +
        '<p>' + item.content.substring(0, 200) + '...</p>' +
        '</a></li>');
    });
  }
}

$(function () {
  $('#search-form').submit(function (event) {
    event.preventDefault();
    var query = $('#search-box').val();
    search(query);
  });
});
