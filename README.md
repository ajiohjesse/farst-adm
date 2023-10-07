# FarstCart Project Readme

Welcome to the FarstCart project! We're thrilled to have you contribute to our project. Please take a moment to review our contribution guidelines to ensure a smooth and collaborative development process.

## Contribution Guidelines

### 1. Branching Strategy

- Contributors must create personal branches for their work and make pull requests (PRs) against the `dev` branch.
- **Do not push directly to the main branch.**

#### Example:

```bash
git checkout -b my-feature-branch
# Work on your changes
git add .
git commit -m "feat: Add new feature"
git push origin my-feature-branch
```

### 2. Commit Pattern

Please follow the conventional commit pattern when creating your commits. We recommend using the following format:

#### Example:

```bash
<type>(<scope>): <description>

<additional information (optional)>
```

- `<type>` should be one of the following: feat, fix, docs, style, refactor, test, or chore

- `<scope>` (optional) is used to specify which part of the codebase your change affects.

- `<description>` should be a concise summary of your change.
- `<additional information>` (optional) can be used for more detailed information about the change, such as breaking changes, issue references, etc.

#### Examples:

```bash
feat(user-auth): Add login functionality
fix(cart): Fix issue with item quantity
docs(readme): Update contribution guidelines
```

### 3. Yarn Precommit

Before syncing your branches with GitHub and creating a pull request, it's important to run yarn precommit. This command helps ensure that your your coded is properly formatted and linted before syncing.

```bash
yarn precommit
```

### 4. One Feature per Pull Request

To keep our codebase clean and manageable, please ensure that each PR implements one feature or bug fix. If you have multiple changes to propose, create separate branches and pull requests for each feature or fix.

### 5. Code Review and Approval

Once you've created a pull request, our team will review your changes. Please be responsive to feedback and address any requested changes promptly. We appreciate your collaboration!

## Conclusion

Thank you for contributing to FarstCart! Your efforts are greatly appreciated, and together, we can make this project even better. If you have any questions or need assistance, feel free to reach out to the maintainers. Happy coding!
