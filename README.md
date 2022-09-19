# Webpack Express Example App

- This web app is used to get the sentiments on blogs/articles. It takes url from the user and then uses api to fetch data from meaningCloud.org and gives output about that particular blog/article i.e Model, Agreement, Subjectivity, Confidence and Irony.
- The goal of this project is be an example of a basic but functional app built on Express and Webpack.

## What to learn

- Webpack entry point
- Webpack output and dist folder
- Webpack Loaders
- Webpack Plugins
- Webpack Mode
- Tools for convenient Webpack development

## Get Up and Running
1. Install all the necessary plugings and dependencies
2. There are two modes set 'development' and 'production
3. There are two js files in the js folder formHandler(for fetching data + updating UI) and urlChecker (for validating url true or false)
4. Enter the command npm start to start the local server
5. Enter the command npm run build when whole project sets up, after succussfull build a dist folder will be created in the directory
6. Two tests files(testForHandler and testisValidateUrl) are added in the __test__ folder to be tested
7. Ensure that you have installed jest dependencies and added script "test":"jest"
7. run command npm run test and check if this test passes the files or not
