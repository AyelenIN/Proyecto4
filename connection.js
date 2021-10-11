const { connect } = require('mongoose');
const URI = ''

connect(process.env.URI)
.then(() => console.log('BD is connected'))
.catch(err => console.error(err))