module.exports = {
   index: function(req, res) {
      res.send('Here we go');
   },
   createnew: function(req, res) {
     var passedContent = req.body.content;
     var passedName = randomGenerator(20);
     do {
        var passedName = randomGenerator(20);
     } while (pasteExists(passedName) == true); 
     var yeah = new paste({ name: passedName, content: passedContent });
     yeah.save(function(err) {
       if (err) res.send('ERROR!' + err + 'and i used these values: ' + passedContent + ' ' + passedName);
       res.redirect('/show/' + passedName);
     }); 
   },
   create: function(req, res) {
     res.render('newpaster');
   },
   list: function(req, res) {
      paste.find(function(err, content) {
         if (err) return console.error(err);
         console.log(content);
         res.render('list', {content: content});
      });
   }, 
   show: function(req, res) {
      value = paste.findOne({ name: req.params.id}, function(err, value) {
         if (err) return console.error(err);
         if (value === null) {
            var value2 = { __v: 0, content: 'None', name: 'None', _id: 'None'  };
            res.render('paster', value2);
         } else {
            res.render('paster',value);
         }
      });
   }
};


var pasteExists = function(name) {
   if (paste.findOne({name: name}).length > 0) {
      return true;
   } else {
      return false;
   }
}
