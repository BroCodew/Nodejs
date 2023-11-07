module.exports = {
  mongoURI: process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
  ),
  options: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
};
