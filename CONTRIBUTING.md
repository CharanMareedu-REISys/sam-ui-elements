# Welcome!

We're so glad you're thinking about contributing to an 18F open source project! If you're unsure about anything, just ask — or submit your issue or pull request anyway. The worst that can happen is we'll politely ask you to change something. We appreciate all friendly contributions.

One of our goals is to ensure a welcoming environment for all contibutors to our projects. Our staff follows the [18F Code of Conduct](https://github.com/18F/code-of-conduct/blob/master/code-of-conduct.md), and all contributors should do the same.

We encourage you to read this project's CONTRIBUTING policy (you are here), its [LICENSE](https://github.com/18F/web-design-standards/blob/staging/LICENSE.md), [README](https://github.com/18F/web-design-standards/blob/staging/README.md) and its [Workflow](https://github.com/18F/web-design-standards/wiki/Workflow) process.

If you have any questions or want to read more, check out the [18F Open Source Policy GitHub repository]( https://github.com/18f/open-source-policy), or just [shoot us an email](mailto:18f@gsa.gov).

## Guidelines

### Contributor Guidelines for Design
We have provided some guidelines for folks who would like to submit new components to the Draft Web Design Standards and the lifecycle those new components will go through. For more detail, please visit the [guidelines on our wiki](https://github.com/18F/web-design-standards/wiki/Component-Maturity-Scale).

### Submitting an issue

To help us get a better understanding of the issue you're submitting, follow our ISSUE TEMPLATE and the guidelines it describes.

**Issue prioritization:**

1. lvl1 Defect - the functionality is broken or does not meet federal regulations.
2. lvl2 Defect - the functionality is annoying or designed incorrectly.
3. r&r - the functionality should be refactored or re-engineered in some way.
4. nf - the functionality does not exist yet.

### Submitting a pull request

Here are a few guidelines to follow when submitting a pull request:

1. Create a GitHub account or sign in to your existing account.
1. Fork this repo into your GitHub account (or just clone it if you're an 18F team member). Read more about forking a repo here on GitHub:
[https://help.github.com/articles/fork-a-repo/](https://help.github.com/articles/fork-a-repo/)
1. Create a branch from `staging` that lightly defines what you're working on (for example, add-styles).
1. Ensure that your contribution works via `npm`, if applicable. See below under
   _Install the package locally via `npm-link`_.
1. Once you're ready to submit a pull request, fill out the PULL REQUEST template provided.
1. Submit your pull request against the `staging` branch.

Have questions or need help with setup? Open an issue here [https://github.com/GSA/sam-uikit-js/issues](https://github.com/GSA/sam-uikit-js/issues).

### What goes here & where things are

This repository houses the elements and components defined in the [SAM Web Design Standards](https://gsa.github.io/sam-web-design-standards/) - not page templates.

The folder structure for this repository follows the information architecture of the [SAM Web Design Standards](https://gsa.github.io/sam-web-design-standards/). Therefore, if the HTML is defined in [elements -> form-controls](https://gsa.github.io/sam-web-design-standards/elements/form-controls/) the corresponding element should be located in `src -> js -> elements-> form-controls` in this repository.

### Design

The design of this kit is to be modular by nature - each element and component is defined as a single encapsulated unit. This allows you (and future-you) to reason about the code locally with little-to-no knowledge of the kit as a whole.

This kit is designed to be framework independent, meaning almost any developer using any JavaScript runtime (or client-side framework) should be able to include the kit and begin using it.

Each modular is written in a [self-documenting](https://en.wikipedia.org/wiki/Self-documenting_code) fashion as much as possible. This means sometimes extracting the logic of a conditional to a method to increase human readability.

```
if (this.hasSelected(config)) {
  
}

hasSelected = function(config) {
  return (config.selected !== undefined && config.selected.length > 0);
}
```

Instead of:

```
if (config.selected !== undefined && config.selected.length > 0) {
  
}
```

### Coding standards

|Name                |Style                          |Example           |
|:-------------------|:-----------------------------:|:----------------:|
|Class names         |TitleCased                     |Select = {}       |
|Function definitions|camelCased                     |isRequired(config)|
|Variable names      |camelCased and self documenting|isRequired = true; <br> NOT i = true;|
|Configuration JSON member names|camelCased and self documenting|srOnly: true <br> NOT sr-only: true <br> NOT s: true|
|Tabs & spaces       |Follow the provided linter and provided .editorconfig|n/a |

