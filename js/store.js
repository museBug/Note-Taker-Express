
const uuidv1 = require('uuid/v1');

module.exports = (body) => {
   return data = {
      title: body.title,
      text: body.text,
      id: uuidv1()
   }
}


