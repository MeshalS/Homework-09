// function to generate markdown for README
function generateMarkdown(data) {
  return `#
your user  name is :- ${data.username}

your Email: ${data.email}

The project is :- ${data.email}

The title is :- ${data.title}

The applcation is :- ${data.usage}

installation  is :-  ${data.installation}

`;
}

module.exports = generateMarkdown;
