// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}__
your user  name is :- ${data.username}__
your Email: ${data.email}__
`;
}

module.exports = generateMarkdown;
