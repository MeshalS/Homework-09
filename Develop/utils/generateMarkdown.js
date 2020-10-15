// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}__
your user  name is :- ${data.username}__
Email: ${data.email}__
`;
}

module.exports = generateMarkdown;
