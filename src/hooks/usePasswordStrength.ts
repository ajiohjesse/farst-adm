interface IvalidatePassword {
  strength: 0 | 1 | 2 | 3 | 4;
  value: 'Empty' | 'Weak' | 'Fair' | 'Good' | 'Strong';
}

export const usePasswordStrength = (password: string) => {
  const validatePassword = (): IvalidatePassword => {
    if (password.length && password.length < 4)
      return { strength: 1, value: 'Weak' };

    let checksPassed = 0;
    const validateRegex = ['[A-Z]', '[a-z]', '[0-9]', '\\W'];

    validateRegex.forEach(regex => {
      if (new RegExp(regex).test(password)) {
        checksPassed += 1;
      }
    });

    switch (checksPassed) {
      case 0:
        return {
          strength: 0,
          value: 'Empty',
        };
      case 1:
        return {
          strength: 1,
          value: 'Weak',
        };
      case 2:
        return {
          strength: 2,
          value: 'Fair',
        };
      case 3:
        return {
          strength: 3,
          value: 'Good',
        };
      case 4:
        return {
          strength: 4,
          value: 'Strong',
        };

      default:
        return { strength: 0, value: 'Empty' };
    }
  };

  return {
    strength: validatePassword().strength,
    value: validatePassword().value,
  };
};
